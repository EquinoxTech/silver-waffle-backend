import { EntityRepository, Repository } from 'typeorm';
import { Ong } from './entities/';
import { CreateOngDto } from './dto/create-ong.dto';

@EntityRepository(Ong)
export class OngRepository extends Repository<Ong> {
  async createOneOng(createOngDto: CreateOngDto): Promise<Ong> {
    const {
      title,
      description,
      working_hours,
      street,
      number,
      state,
      city,
      neighbourhood,
      location,
      responsible,
    } = createOngDto;
    const ong = new Ong();
    ong.title = title;
    ong.description = description;
    ong.working_hours = working_hours;
    ong.working_hours = state;
    ong.street = street;
    ong.number = number;
    ong.city = city;
    ong.neighbourhood = neighbourhood;
    ong.location = location;
    ong.responsible = responsible;
  }
}