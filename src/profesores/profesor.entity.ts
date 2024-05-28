import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Clase } from '../clases/clase.entity';

@Entity({name: 'profesores'})
//Clase profesores
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  email: string;

//Relacion de uno a muchos con Clase
  @OneToMany(() => Clase, (clase) => clase.profesor)
  clases: Clase[];
}
