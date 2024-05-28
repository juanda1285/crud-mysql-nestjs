import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   // Configura CORS
   app.enableCors({
    origin: 'http://localhost:3001', // Reemplaza con la URL de tu aplicación React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Si necesitas enviar cookies o datos de autenticación
  });
  
  await app.listen(3000);
}
bootstrap();
