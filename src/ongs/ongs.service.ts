import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOngDto } from './dto/create-ong.dto';
import { UpdateOngDto } from './dto/update-ong.dto';
import { Ong } from './entities/ong.entity';
import { Repository } from 'typeorm';
import { Point } from 'geojson';
@Injectable()
export class OngsService {
  constructor(@InjectRepository(Ong) private ongRepository: Repository<Ong>) {}

  create(newOng: CreateOngDto) {
    const long = newOng.location[0];
    const lat = newOng.location[1];

    const pointObject: Point = {
      type: 'Point',
      coordinates: [long, lat],
    };
    newOng.location = pointObject;
    return this.ongRepository.create({ newOng });
  }

  findAll() {
    return this.ongRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ong`;
  }

  update(id: number, updateOngDto: UpdateOngDto) {
    return `This action updates a #${id} ong`;
  }

  remove(id: number) {
    return `This action removes a #${id} ong`;
  }
}
