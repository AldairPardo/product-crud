import { Module } from '@nestjs/common';
import { AppController } from './domain/controllers/app.controller';
import { DatabaseModule } from '@database/database.module';
import { ProductModule } from '@modules/products/product.module';

@Module({
  imports: [DatabaseModule, ProductModule],
  controllers: [AppController],
})
export class AppModule {}
