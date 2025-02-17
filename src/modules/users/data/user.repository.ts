import { UserEntity } from '@database/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../domain/models/user.model';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async save(user: User): Promise<User> {
    const entity = UserEntity.from(user);
    await this.repository.save(entity);
    return entity.toModel();
  }

  async findAll(): Promise<User[]> {
    const entities = await this.repository.find();
    return entities.map(entity => entity.toModel());
  }

  async findById(id: number): Promise<User | undefined> {
    const entity = await this.repository.findOneBy({ id });
    return entity?.toModel();
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const entity = await this.repository.findOneBy({ email });
    return entity?.toModel();
  }

  async delete(id: number) {
    return await this.repository.delete(id);
  }
}
