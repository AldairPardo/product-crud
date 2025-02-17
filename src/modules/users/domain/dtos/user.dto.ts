import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsEmpty,
  IsEmail,
} from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({ example: 'Aldair Pardo', description: 'Nombre del usuario' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    example: 'example@mail.com',
    description: 'Correo del usuario',
  })
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty({ example: '123456', description: 'Contraseña del usuario' })
  @IsString()
  @IsNotEmpty()
  password!: string;
}

export class UserDto extends RegisterUserDto {
  @ApiProperty({ example: 1, description: 'Identificador del usuario' })
  @IsEmpty()
  id?: number;

  @ApiProperty({ example: new Date(), description: 'Fecha de creación' })
  @IsEmpty()
  createdAt?: Date;

  @ApiProperty({ example: new Date(), description: 'Fecha de actualización' })
  @IsEmpty()
  updatedAt?: Date;
}
