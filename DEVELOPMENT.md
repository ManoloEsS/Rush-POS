# Development Guide

## Prerequisites

- [Bun](https://bun.sh/) (v1.3+)
- [Docker](https://www.docker.com/) (for PostgreSQL 18)

## Initial Setup

```bash
bun install
```

## Environment Variables

Environment files are gitignored and must be created locally. Copy the templates below into the project root.

### `.env.development`

```
DATABASE_URL=postgres://postgres:postgres@localhost:5432/rush-pos
PORT=3000
JWT_SECRET=development-secret
NODE_ENV=development
```

### `.env.test`

```
DATABASE_URL=postgres://postgres:postgres@localhost:5432/rush-pos_test
PORT=3001
JWT_SECRET=test-secret
NODE_ENV=test
```

| Variable       | Description                            |
| -------------- | -------------------------------------- |
| `DATABASE_URL` | PostgreSQL connection string           |
| `PORT`         | Server port (3000 dev, 3001 test)      |
| `JWT_SECRET`   | Secret for signing JWT tokens          |
| `NODE_ENV`     | `development`, `test`, or `production` |

The server validates required variables on startup and exits if any are missing.

## Database

The project uses PostgreSQL 18 running in Docker, managed through bun scripts.

```bash
bun run db:start      # Start the PostgreSQL container (or create it if it doesn't exist)
bun run db:stop       # Stop the container
bun run db:migrate    # Apply pending migrations (uses .env.development)
bun run db:studio     # Open Drizzle Studio to browse data
```

The container mounts a Docker volume at `/var/lib/postgresql` so data persists across restarts.

## Development

```bash
bun run dev:full
```

This one command starts the database, applies migrations, and runs both the frontend and backend in dev mode.

Or run the steps individually:

```bash
bun run db:start
bun run db:migrate
bun run dev
```

- **Frontend**: http://localhost:5173 (Vite with HMR, proxies `/api` to :3000)
- **Backend**: http://localhost:3000 (Bun with hot reload)

## Schema Changes and Migrations

After editing `packages/server/src/db/schema.ts`:

1. **Generate a migration file (name is required):**

   ```bash
   bun run db:generate <descriptive_name>
   ```

   For example: `bun run db:generate create_users_table`

   This creates a new SQL file in `packages/server/drizzle/`.

2. **Apply the migration:**

   ```bash
   bun run db:migrate
   ```

3. **(Alternative) Push schema directly without a migration file** (dev only):
   ```bash
   bun run db:push
   ```

Always generate and commit migration files for schema changes that will be deployed. Use `db:push` only for local experimentation.

## Quality Checks

```bash
bun run typecheck       # TypeScript type checking
bun run lint            # Check for lint errors
bun run lint:fix        # Auto-fix lint errors
bun run format          # Format all files with Prettier
bun run format:check    # Check formatting without writing
```

Pre-commit hooks (Husky + lint-staged) automatically run `eslint --fix` and `prettier --write` on staged files.

## Testing

```bash
bun run test            # Run all tests (uses .env.test)
bun run test:coverage   # Run tests with coverage report
```

Tests run against the `rush-pos_test` database. The test script will start the Docker container and apply migrations automatically.

## Production Build

```bash
bun run build           # Build web then server
bun run start           # Run the built server
```

## Project Structure

```
packages/
├── server/             # Express API (Bun runtime)
│   ├── src/
│   │   ├── db/
│   │   │   ├── schema.ts      # Drizzle schema definitions
│   │   │   └── connection.ts  # Database client and Drizzle instance
│   │   ├── middleware/
│   │   ├── utils/
│   │   │   └── config.ts      # Config validation
│   │   ├── app.ts             # Express app setup
│   │   └── index.ts           # Entry point (init, listen, shutdown)
│   └── drizzle.config.ts
├── web/                # React frontend (Vite)
│   └── src/
└── shared/             # Shared types and schemas
    └── src/
```
