import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clase } from './clase.entity';
import { ClasesService } from './clases.service';
import { ClasesController } from './clases.controller';
import { Profesor } from '../profesores/profesor.entity';
import { Estudiante } from '../estudiantes/estudiante.entity';

@Module({
  //Imports de los Features que estan relacionados con Clase
  imports: [TypeOrmModule.forFeature([Clase, Profesor, Estudiante])],
  providers: [ClasesService],
  controllers: [ClasesController],
})
export class ClasesModule {}