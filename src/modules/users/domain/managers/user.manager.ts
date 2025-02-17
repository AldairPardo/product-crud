import { UserRepository } from '@modules/users/data/user.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { RegisterUserDto } from '../dtos/user.dto';
import { User } from '../models/user.model';

@Injectable()
export class UserManager {
  constructor(
    private readonly repository: UserRepository,
  ) {}

  async create(payload: RegisterUserDto): Promise<User> {
	const user: User = User.fromJson(payload);
    return await this.repository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.repository.findAll();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.repository.findById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findByEmail(email);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async remove(id: number): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) throw new NotFoundException('User not found');
  }
}
