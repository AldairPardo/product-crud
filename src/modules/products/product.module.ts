import { ProductEntity } from '@database/entities/product.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './domain/controllers/product.controller';
import { ProductManager } from './domain/managers/product.manager';
import { ProductRepository } from './data/product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [ProductManager, ProductRepository],
})
export class ProductModule {}
