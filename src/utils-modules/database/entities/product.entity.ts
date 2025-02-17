import { Product } from '@modules/products/domain/models/product.model';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity("products")
export class ProductEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'decimal', nullable: false })
  price: number;

  @Column({ type: 'int', nullable: false })
  quantity: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  static from(model: Product): ProductEntity {
    const entity = new ProductEntity();
    entity.loadModel(model);
    return entity;
  }

  loadModel(model: Product): void {
    this.id = model.id;
    this.name = model.name;
    this.description = model.description;
    this.price = model.price;
    this.quantity = model.quantity;
    this.created_at = model.createdAt;
    this.updated_at = model.updatedAt;
  }

  toModel(): Product {
    return new Product(this.name, this.price, this.quantity, {
      id: this.id,
      description: this.description,
      createdAt: this.created_at,
      updatedAt: this.updated_at,
    });
  }
}
