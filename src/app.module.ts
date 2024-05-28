import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { ClasesModule } from './clases/clases.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    //Configuración de conexion a la DB y seleccion de entidades
    //Ajustar a su necesidad
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'cruddb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }), EstudiantesModule, ClasesModule, ProfesoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
