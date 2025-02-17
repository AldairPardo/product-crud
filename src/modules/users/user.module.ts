import { UserEntity } from '@database/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './domain/controllers/user.controller';
import { UserManager } from './domain/managers/user.manager';
import { UserRepository } from './data/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [ UserController ],
  providers: [ UserManager, UserRepository ],
  exports: [ UserManager ]
})
export class UserModule {}
