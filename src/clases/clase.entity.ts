import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Profesor } from '../profesores/profesor.entity';
import { Estudiante } from '../estudiantes/estudiante.entity';

@Entity({ name: 'clases' })
//Entity de Clase , Columnas, tipos de datos y relaciones
export class Clase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({ nullable: true })
  profesorId: number;
  //Relacion muchos a uno
  @ManyToOne(() => Profesor, (profesor) => profesor.clases)
  profesor: Profesor;
  //Relacion Muchos a muchos
  @ManyToMany(() => Estudiante, (estudiante) => estudiante.clases)
  @JoinTable()
  estudiantes: Estudiante[];
}
