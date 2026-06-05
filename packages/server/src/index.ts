import dotenv from 'dotenv';
dotenv.config();

import { app } from './app';
import { config, validateConfig } from './utils/config';
import { initDb, closeDb } from './db/connection';

async function main() {
  validateConfig();
  console.log('Configuration validated successfully');

  await initDb(config.DATABASE_URL!);

  const server = app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
  });

  const shutdown = async () => {
    await closeDb();
    server.close();
    process.exit(0);
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

main().catch((err) => {
  console.error('Server startup failed:', err);
  setTimeout(() => process.exit(1), 100);
});
