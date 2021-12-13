import { Ong } from 'src/ongs/entities/ong.entity';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DB_NAME,
        entities: [Ong],
        synchronize: true,
      }),
  },
];
