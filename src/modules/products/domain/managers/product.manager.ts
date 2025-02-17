import { ProductRepository } from '@modules/products/data/product.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, ProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dtos/update-product.dto';

@Injectable()
export class ProductManager {
  constructor(
    private readonly repository: ProductRepository,
  ) {}

  async create(payload: CreateProductDto): Promise<Product> {
	const product: Product = Product.fromJson(payload);
    return await this.repository.save(product);
  }

  async findAll(limit: number = 5, page: number = 1): Promise<Product[]> {
    return await this.repository.findAll(limit, page);
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.repository.findById(id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async update(
    id: number,
    data: UpdateProductDto,
  ): Promise<Product> {
	const product = await this.findOne(id);
	const updatedProduct = product.update(data);
	return await this.repository.update(updatedProduct);
  }

  async remove(id: number): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) throw new NotFoundException('Product not found');
  }
}
