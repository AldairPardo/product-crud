# API de Gestión de Productos

## Descripción

Este proyecto es una API RESTful para la gestión de productos en un inventario. Permite realizar las operaciones básicas de CRUD (Crear, Leer, Actualizar, Eliminar) sobre productos. La API está construida utilizando **Nest.js**, **PostgreSQL**, **TypeORM**, y **Swagger** para la documentación automática.

## Características

- **Gestión de productos**: Permite crear, leer, actualizar y eliminar productos.
- **Validaciones**: Se implementan validaciones en los datos de entrada usando `class-validator`.
- **Documentación automática con Swagger**: Swagger se configura para proporcionar documentación interactiva y fácil de usar de la API.
- **Base de datos PostgreSQL**: La aplicación utiliza **PostgreSQL** como base de datos.
- **Seguridad**: Se manejan los errores y se devuelven respuestas con códigos de estado apropiados.

## Requisitos

- Node.js v14 o superior.
- PostgreSQL.
- Nest.js CLI.

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/product-crud.git
   cd product-crud
   ```

### Instalar Dependencias

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
  npm install
```

### Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con la siguiente configuración:

```env
DATABASE_HOST=localhost
DATABASE_PORT=XXXX
DATABASE_USERNAME=usuario
DATABASE_PASSWORD=contraseña
DATABASE_NAME=producto_db
```

Si estás utilizando Docker, puedes modificar estas variables según tu configuración.

## Ejecución del Proyecto

Para ejecutar el proyecto en tu entorno local, usa el siguiente comando:

```bash
  npm run start:dev
```

## 📖 Documentación con Swagger

La documentación de la API está disponible en:

```
http://localhost:{PORT}/api-docs
```
