import { Connection } from 'typeorm';
import { Ong } from './entities/ong.entity';
export const OngsProviders = [
  {
    provide: 'OngRepository',
    useFactory: (connection: Connection) => connection.getRepository(Ong),
    inject: ['DATABASE_CONNECTION'],
  },
];
