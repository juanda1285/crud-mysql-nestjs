import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profesor } from './profesor.entity';

@Injectable()
export class ProfesoresService {
  constructor(
    @InjectRepository(Profesor)
    private profesoresRepository: Repository<Profesor>,
  ) {}

  findAll(): Promise<Profesor[]> {
    return this.profesoresRepository.find();
  }

  findOne(id: number): Promise<Profesor> {
    return this.profesoresRepository.findOneBy({ id });
  }

  create(profesor: Profesor): Promise<Profesor> {
    return this.profesoresRepository.save(profesor);
  }

  async update(id: number, profeModel: Profesor): Promise<Profesor> {
    const profesor = await this.profesoresRepository.findOne({ where: { id } });

    Object.assign(profesor, profeModel);
    return this.profesoresRepository.save(profesor);
  }

  async remove(id: number): Promise<void> {
    await this.profesoresRepository.delete(id);
  }
}