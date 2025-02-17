import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPositive, IsString, IsInt } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({ example: 'Laptop Dell', description: 'Nombre del producto' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    example: 'Laptop Dell con 16GB de RAM y 1TB de almacenamiento',
    description: 'Descripción del producto',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 1500, description: 'Precio del producto' })
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty({ example: 10, description: 'Cantidad de productos' })
  @IsInt()
  @IsPositive()
  @IsOptional()
  quantity?: number;
}
