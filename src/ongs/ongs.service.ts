import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOngDto } from './dto/create-ong.dto';
import { UpdateOngDto } from './dto/update-ong.dto';
import { Ong } from './entities/ong.entity';
import { Repository } from 'typeorm';
@Injectable()
export class OngsService {
  constructor(@InjectRepository(Ong) private ongRepository: Repository<Ong>) {}

  create(CreateOngDto: CreateOngDto) {
    return this.ongRepository
      .save(CreateOngDto)
      .catch(() => new BadRequestException().getResponse());
  }

  findAll() {
    return this.ongRepository.find();
  }

  findOne(id: number) {
    return this.ongRepository.findOne(id);
  }

  update(id: number, updateOngDto: UpdateOngDto) {
    return this.ongRepository.update(id, updateOngDto);
  }

  remove(id: number) {
    return this.ongRepository.delete(id);
  }
}
