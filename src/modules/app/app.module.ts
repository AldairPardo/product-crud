import { Module } from '@nestjs/common';
import { AppController } from './domain/controllers/app.controller';
import { DatabaseModule } from '@database/database.module';
import { ProductModule } from '@modules/products/product.module';
import { UserModule } from '@modules/users/user.module';
import { AuthModule } from '@modules/auth/auth.module';

@Module({
  imports: [DatabaseModule, ProductModule, UserModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
