import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsInt,
  IsEmpty,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Laptop Dell', description: 'Nombre del producto' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    example: 'Laptop Dell con 16GB de RAM y 1TB de almacenamiento',
    description: 'Descripción del producto',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 1500, description: 'Precio del producto' })
  @IsPositive()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ example: 10, description: 'Cantidad de productos' })
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  quantity: number;
}

export class ProductDto extends CreateProductDto {
  @ApiProperty({ example: 1, description: 'Identificador del producto' })
  @IsEmpty()
  id?: number;

  @ApiProperty({ example: new Date(), description: 'Fecha de creación' })
  @IsEmpty()
  createdAt?: Date;

  @ApiProperty({ example: new Date(), description: 'Fecha de actualización' })
  @IsEmpty()
  updatedAt?: Date;
}
