import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './estudiante.entity';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private estudiantesRepository: Repository<Estudiante>,
  ) {}

  findAll(): Promise<Estudiante[]> {
    return this.estudiantesRepository.find();
  }

  findOne(id: number): Promise<Estudiante> {
    return this.estudiantesRepository.findOneBy({ id });
  }

  create(estudiante: Estudiante): Promise<Estudiante> {
    return this.estudiantesRepository.save(estudiante);
  }

  async update(id: number, estudianteModel: Estudiante): Promise<Estudiante> {
    const estudiante = await this.estudiantesRepository.findOne({ where: { id } });

    Object.assign(estudiante, estudianteModel);
    return this.estudiantesRepository.save(estudiante);
  }

  async remove(id: number): Promise<void> {
    await this.estudiantesRepository.delete(id);
  }
}
