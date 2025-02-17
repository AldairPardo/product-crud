import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from '@database/entities/product.entity';
import { Product } from '../domain/models/product.model';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly repository: Repository<ProductEntity>,
  ) {}

  async save(product: Product): Promise<Product> {
    const entity = ProductEntity.from(product);
    await this.repository.save(entity);
    return entity.toModel();
  }

  async update(product: Product): Promise<Product> {
    const entity = ProductEntity.from(product);
    await this.repository.update(product.id, entity);
    return entity.toModel();
  }
  
  async findAll(limit: number, page: number): Promise<Product[]> {
    const entities = await this.repository.find({ skip: (page*limit) - limit, take: limit });
    return entities.map(entity => entity.toModel());
  }

  async findById(id: number): Promise<Product | undefined> {
    const entity = await this.repository.findOneBy({ id });
    return entity?.toModel();
  }

  async delete(id: number) {
    return await this.repository.delete(id);
  }
}
