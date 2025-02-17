import { User } from '@modules/users/domain/models/user.model';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  static from(model: User): UserEntity {
    const entity = new UserEntity();
    entity.loadModel(model);
    return entity;
  }

  loadModel(model: User): void {
    this.id = model.id;
    this.name = model.name;
    this.email = model.email;
    this.password = model.password;
    this.created_at = model.createdAt;
    this.updated_at = model.updatedAt;
  }

  toModel(): User {
    return new User(this.name, this.email, this.password, {
        id: this.id,
        createdAt: this.created_at,
        updatedAt: this.updated_at
    });
  }
}
