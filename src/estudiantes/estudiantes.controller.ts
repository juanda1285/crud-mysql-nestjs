import { Controller, Get, Post, Param, Delete, Body, Put } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { Estudiante } from './estudiante.entity';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) { }
//METODOS HTTP
  @Get()
  findAll(): Promise<Estudiante[]> {
    return this.estudiantesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Estudiante> {
    return this.estudiantesService.findOne(+id);
  }

  @Post()
  create(@Body() estudiante: Estudiante): Promise<Estudiante> {
    return this.estudiantesService.create(estudiante);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateEstudiante: Estudiante): Promise<Estudiante> {
    return this.estudiantesService.update(id, updateEstudiante);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.estudiantesService.remove(+id);
  }
}
