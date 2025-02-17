import { AppModule } from '@modules/app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 4000;

  // Configurar Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Inventario')
    .setDescription('Documentación de la API para la gestión de productos')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api-docs', app, document);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(port);
  console.log(`Application is running on port: ${port}`);
}
bootstrap();
