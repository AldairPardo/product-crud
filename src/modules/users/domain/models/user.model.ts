import { UserDto } from "../dtos/user.dto";

export class User {
  readonly id: number;
  readonly createdAt: Date;
  public updatedAt: Date;

  constructor(
    public name: string,
    public email: string,
    public password: string,
    options?: {
      id?: number;
      createdAt?: Date;
      updatedAt?: Date;
    },
  ) {
    this.id = options?.id;
    this.createdAt = options?.createdAt ?? new Date();
    this.updatedAt = options?.updatedAt ?? new Date();
  }

  toJson(): UserDto {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  static fromJson(json: UserDto ): User {
    return new User(
      json.name,
      json.email,
      json.password,
      {
        id: json.id,
        createdAt: json.createdAt,
        updatedAt: json.updatedAt,
      },
    );
  }
}
