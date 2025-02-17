import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsEmpty,
  IsEmail,
} from 'class-validator';

export class LoginDto {
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
