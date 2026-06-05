import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

let client: ReturnType<typeof postgres>;
export let db: ReturnType<typeof drizzle>;

export async function initDb(url: string) {
  console.log('Connecting to PostgreSQL database...');

  try {
    client = postgres(url);
    db = drizzle(client, { schema });
    await client`SELECT 1 as connected`;
    console.log('Successfully connected to PostgreSQL database');
  } catch (err) {
    console.error('Failed to connect to database', err);
    throw err;
  }
}

export async function closeDb() {
  if (client) {
    await client.end();
  }
}
