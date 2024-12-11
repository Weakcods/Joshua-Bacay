import { DataSource } from 'typeorm';
import { Contact } from '../entities/Contact.entity';

export const AppDataSource = new DataSource({
  type: 'mysql', // or your database type
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Contact],
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV !== 'production',
}); 