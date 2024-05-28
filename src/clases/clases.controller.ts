import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ClasesService } from './clases.service';
import { Clase } from './clase.entity';

@Controller('clases')
export class ClasesController {
  constructor(private readonly claseService: ClasesService) {}
//METODOS HTTP
  @Get()
  async findAll(): Promise<Clase[]> {
    return this.claseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Clase> {
    return this.claseService.findOne(id);
  }

  @Post()
  async create(@Body() clase: any) {
    return this.claseService.create(clase);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() clase: any): Promise<Clase> {
    return this.claseService.update(id, clase);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.claseService.remove(id);
  }
}
