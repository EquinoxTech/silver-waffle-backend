import { Module } from '@nestjs/common';
import { OngsService } from './ongs.service';
import { OngsController } from './ongs.controller';
import { DatabaseModule } from 'src/database/database.module';
import { OngsProviders } from './ongs.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [OngsController],
  providers: [...OngsProviders, OngsService],
})
export class OngsModule {}
