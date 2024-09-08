import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // Permite solicitudes desde el frontend en el puerto 3000
  });
  await app.listen(3001);
}
bootstrap();