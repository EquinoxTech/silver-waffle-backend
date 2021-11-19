import { Point } from 'geojson';
import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity()
export class Ong {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @Column('text')
  description: string;

  @Column('varchar')
  working_hours: string;

  @Column('varchar')
  street: string;

  @Column('int')
  number: number;

  @Column('varchar')
  state: string;

  @Column('varchar')
  city: string;

  @Column('varchar')
  neighbourhood: string;

  @Index({ spatial: true })
  @Column({
    type: 'point',
    nullable: true,
    srid: 4326,
  })
  location: Point;

  @Column()
  responsible: string;
}
