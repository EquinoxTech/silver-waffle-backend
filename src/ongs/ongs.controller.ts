import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseInterceptors,
  HttpCode,
} from '@nestjs/common';
import { OngsService } from './ongs.service';
import { CreateOngDto } from './dto/create-ong.dto';
import { UpdateOngDto } from './dto/update-ong.dto';
import { NotFoundIdInterceptor } from './interceptors/not.found.id.interceptor';

@Controller('ongs')
export class OngsController {
  constructor(private readonly ongsService: OngsService) {}

  @Post()
  create(@Body() CreateOngDto: CreateOngDto) {
    return this.ongsService.create(CreateOngDto);
  }

  @Get()
  findAll() {
    return this.ongsService.findAll();
  }

  @Get(':id')
  @UseInterceptors(NotFoundIdInterceptor)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.ongsService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(NotFoundIdInterceptor)
  @HttpCode(204)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOngDto: UpdateOngDto,
  ) {
    return await this.ongsService.update(+id, updateOngDto);
  }

  @Delete(':id')
  @UseInterceptors(NotFoundIdInterceptor)
  @HttpCode(204)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.ongsService.remove(+id);
  }
}
