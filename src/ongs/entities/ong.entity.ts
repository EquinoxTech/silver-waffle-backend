import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ongs')
export class Ong {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column('text')
  description: string;

  @Column()
  type: string;

  @Column('simple-json')
  working_hours: {
    start_time: Date;
    end_time: Date;
    days: string;
  };

  @Column()
  responsible: string;

  @Column()
  accepting_donations: boolean;

  @Column('simple-json')
  address: {
    id: number;
    street: string;
    neighbourhood: string;
    state: string;
    city: string;
    number: number;
    cep: number;
  };
}
