import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clase } from './clase.entity';
import { Estudiante } from 'src/estudiantes/estudiante.entity';

@Injectable()
export class ClasesService {
  constructor(
    @InjectRepository(Clase)
    private clasesRepository: Repository<Clase>,
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>, // Inyecta el repositorio de Estudiante
  ) {}

  //Trae todos los datos con su respectiva relacion
  findAll(): Promise<Clase[]> {
    return this.clasesRepository.find({ relations: ['profesor', 'estudiantes'] });
  }

    //Trae los datos de una clase con sus respectivos estudiantes
  findOne(id: number): Promise<Clase> {
    return this.clasesRepository
        .createQueryBuilder('clase')
        .leftJoinAndSelect('clase.estudiantes', 'estudiantes')
        .where('clase.id = :id', { id })
        .getOne();
  }

  //Crea una nueva clase y agrega estudiantes en caso de que los tenga
  async create(claseData: any): Promise<any> {
    const { estudiantesIds, ...clase } = claseData;
    const estudiantes = await this.estudianteRepository.findByIds(estudiantesIds);
    const nuevaClase = this.clasesRepository.create({ ...clase, estudiantes });
    return this.clasesRepository.save(nuevaClase);
  }

  //Actualización de clase
  async update(id: number, claseData: any): Promise<Clase> {
    const { estudiantesIds, ...clase } = claseData;

    // Actualiza los campos de la clase
    await this.clasesRepository.update(id, clase);

    // Actualiza los estudiantes asociados
    const claseExistente = await this.clasesRepository.findOne({ where: { id }, relations: ['estudiantes'] });
    if (estudiantesIds) {
      //consulta estudiantes
      const estudiantes = await this.estudianteRepository.findByIds(estudiantesIds);
      claseExistente.estudiantes = estudiantes;
      await this.clasesRepository.save(claseExistente);
    }
    //Deveulve clase con su relación
    return this.clasesRepository.findOne({ where: { id }, relations: ['estudiantes'] });
  }


  async remove(id: number): Promise<void> {
    await this.clasesRepository.delete(id);
  }
}
