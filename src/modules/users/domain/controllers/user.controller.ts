import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserManager } from '../managers/user.manager';
import { RegisterUserDto } from '../dtos/user.dto';
import { AuthGuard } from '@modules/auth/auth.guard';
  
@ApiTags('Usuarios')
@Controller('users')
export class UserController {
    constructor(private readonly manager: UserManager) {}
  
    @Post('/register')
    @ApiOperation({ summary: 'Crear un nuevo usuario' })
    @ApiResponse({
      status: 201,
      description: 'Usuario creado exitosamente.',
      type: RegisterUserDto,
    })
    @ApiResponse({
      status: 400,
      description: 'Solicitud incorrecta.',
    })
    async create(@Body() payload: RegisterUserDto) {
      const user = await this.manager.create(payload);
      return { user };
    }
  
    @UseGuards(AuthGuard)
    @Get()
    @ApiOperation({ summary: 'Listar todos los usuarios' })
    @ApiResponse({
      status: 200,
      description: 'Listado de usuarios.',
      type: [RegisterUserDto],
    })
    async findAll() {
      const users = await this.manager.findAll();
      return { users };
    }
  
    @UseGuards(AuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Buscar un usuario por ID' })
    @ApiResponse({
      status: 200,
      description: 'Producto encontrado.',
      type: RegisterUserDto,
    })
    @ApiResponse({
      status: 404,
      description: 'Usuario no encontrado.',
    })
    async findOne(@Param('id') id: number) {
      const user = await this.manager.findOne(id);
      return { user };
    }
  
    @UseGuards(AuthGuard)
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un usuario' })
    @ApiResponse({
      status: 200,
      description: 'Usuario eliminado.',
    })
    @ApiResponse({
      status: 404,
      description: 'Usuario no encontrado.',
    })
    remove(@Param('id') id: number) {
      return this.manager.remove(id);
    }
  }
  