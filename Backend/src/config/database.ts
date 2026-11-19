
import { Pool } from 'pg';

const databaseUrl = process.env.DATABASE_URL;

export const pool = databaseUrl
  ? new Pool({
      connectionString: databaseUrl
    })
  : new Pool({
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT || 5432),
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME || 'fresitas_db'
    });
