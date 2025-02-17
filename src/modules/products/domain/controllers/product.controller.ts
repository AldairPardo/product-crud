import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { ProductManager } from '../managers/product.manager';
import { ProductDto, CreateProductDto } from '../dtos/product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Productos')
@Controller('products')
export class ProductController {
  constructor(private readonly manager: ProductManager) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo producto' })
  @ApiResponse({
    status: 201,
    description: 'Producto creado exitosamente.',
    type: ProductDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Solicitud incorrecta.',
  })
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.manager.create(createProductDto);
    return { product };
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los productos' })
  @ApiResponse({
    status: 200,
    description: 'Listado de productos.',
    type: [ProductDto],
  })
  async findAll(
    @Query('limit') limit: number,
    @Query('page') page: number
  ) {
    const products = await this.manager.findAll(limit, page);
    return { products };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar un producto por ID' })
  @ApiResponse({
    status: 200,
    description: 'Producto encontrado.',
    type: ProductDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Producto no encontrado.',
  })
  async findOne(@Param('id') id: number) {
    const product = await this.manager.findOne(id);
    return { product };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un producto' })
  @ApiResponse({
    status: 200,
    description: 'Producto actualizado.',
    type: ProductDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Solicitud incorrecta.',
  })
  @ApiResponse({
    status: 404,
    description: 'Producto no encontrado.',
  })
  async update(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const product = await this.manager.update(id, updateProductDto);
    return { product };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un producto' })
  @ApiResponse({
    status: 200,
    description: 'Producto eliminado.',
  })
  @ApiResponse({
    status: 404,
    description: 'Producto no encontrado.',
  })
  remove(@Param('id') id: number) {
    return this.manager.remove(id);
  }
}
