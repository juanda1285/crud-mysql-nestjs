import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Clase } from '../clases/clase.entity';

@Entity({name:'estudiantes'})
//Clase Estudiante
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  email: string;
  //Relacion de muchos a muchos con estudiantes
  @ManyToMany(() => Clase, (clase) => clase.estudiantes)
  clases: Clase[];
}
