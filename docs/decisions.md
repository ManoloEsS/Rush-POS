# Project Decisions

Architecture Decision Records (ADRs) for the full-stack application.

## Table of Contents

### Tech Stack

| ADR                                                                       | Title                                               | Status   |
| ------------------------------------------------------------------------- | --------------------------------------------------- | -------- |
| [ADR-001](#adr-001-use-typescript-as-the-primary-language)                | Use TypeScript as the primary language              | Accepted |
| [ADR-002](#adr-002-use-bun-as-the-all-in-one-toolchain)                   | Use Bun as the all-in-one toolchain                 | Accepted |
| [ADR-004](#adr-004-use-postgresql-via-docker-for-local-development)       | Use PostgreSQL via Docker for local development     | Accepted |
| [ADR-005](#adr-005-use-react-spa-for-the-frontend)                        | Use React SPA for the frontend                      | Accepted |
| [ADR-006](#adr-006-use-zod-for-validation-and-type-inference)             | Use Zod for validation and type inference           | Accepted |
| [ADR-007](#adr-007-use-drizzle-orm-for-database-access)                   | Use Drizzle ORM for database access                 | Accepted |
| [ADR-010](#adr-010-use-express-as-the-backend-framework)                  | Use Express as the backend framework                | Accepted |
| [ADR-013](#adr-013-use-basic-react-state-management-usestateusecontext)   | Use basic React state management                    | Accepted |
| [ADR-017](#adr-017-use-dotenv-for-environment-configuration)              | Use dotenv for environment configuration            | Accepted |
| [ADR-024](#adr-024-strict-typescript-configuration)                       | Strict TypeScript configuration                     | Accepted |
| [ADR-027](#adr-027-add-typesnode-and-configure-typesnode-bun-in-tsconfig) | Add @types/node and configure types ["node", "bun"] | Accepted |
| [ADR-028](#adr-028-use-postgresjs-as-the-drizzle-postgresql-driver)       | Use postgres.js as the Drizzle PostgreSQL driver    | Accepted |

### Architecture

| ADR                                                                                         | Title                                             | Status   |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------- | -------- |
| [ADR-008](#adr-008-adopt-strict-tdd-as-the-development-approach)                            | Adopt strict TDD as the development approach      | Accepted |
| [ADR-009](#adr-009-organize-code-in-vertical-slices-feature-folders--shared-infrastructure) | Organize code in vertical slices                  | Accepted |
| [ADR-011](#adr-011-use-rest-api-style)                                                      | Use REST API style                                | Accepted |
| [ADR-014](#adr-014-monorepo-with-bun-workspaces)                                            | Monorepo with Bun workspaces                      | Accepted |
| [ADR-015](#adr-015-use-jwt-for-authentication)                                              | Use JWT for authentication                        | Accepted |
| [ADR-018](#adr-018-react-native-as-a-future-nice-to-have)                                   | React Native as a future nice-to-have             | Accepted |
| [ADR-019](#adr-019-project-scaffolding-with-bun-workspaces)                                 | Project scaffolding with Bun workspaces           | Accepted |
| [ADR-029](#adr-029-centralized-config-object-with-runtime-validation)                       | Centralized config object with runtime validation | Accepted |
| [ADR-030](#adr-030-apptsindexts-separation-pattern)                                         | app.ts / index.ts separation pattern              | Accepted |
| [ADR-031](#adr-031-api-route-prefix-and-health-check-endpoint)                              | API route prefix and health check endpoint        | Accepted |
| [ADR-032](#adr-032-graceful-shutdown-with-sigintsigterm-handling)                           | Graceful shutdown with SIGINT/SIGTERM handling    | Accepted |
| [ADR-033](#adr-033-uuid-primary-keys-with-gen_random_uuid)                                  | UUID primary keys with gen_random_uuid()          | Accepted |

### DevOps & Infra

| ADR                                                              | Title                                        | Status   |
| ---------------------------------------------------------------- | -------------------------------------------- | -------- |
| [ADR-003](#adr-003-set-up-ci-pipeline-early-with-github-actions) | Set up CI pipeline early with GitHub Actions | Accepted |
| [ADR-016](#adr-016-use-neon-postgres-on-render-for-production)   | Use Neon Postgres on Render for production   | Accepted |
| [ADR-020](#adr-020-docker-based-local-database-management)       | Docker-based local database management       | Accepted |
| [ADR-035](#adr-035-bun---hot-for-development-server-reload)      | Bun --hot for development server reload      | Accepted |

### UX/UI

| ADR                                                    | Title                              | Status   |
| ------------------------------------------------------ | ---------------------------------- | -------- |
| [ADR-012](#adr-012-use-plain-css-for-frontend-styling) | Use plain CSS for frontend styling | Accepted |

### Code Style

| ADR                                                                 | Title                                                                  | Status   |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------- |
| [ADR-021](#adr-021-code-style-enforcement-with-prettier-and-eslint) | Code style: single quotes, semicolons, enforced with Prettier + ESLint | Accepted |
| [ADR-022](#adr-022-environment-variable-management-with-env-files)  | Environment variable management with --env-file flags                  | Accepted |
| [ADR-023](#adr-023-eslint-per-package-rules-and-import-boundaries)  | ESLint per-package rules and import boundaries                         | Accepted |
| [ADR-025](#adr-025-pre-commit-hooks-with-husky-and-lint-staged)     | Pre-commit hooks with Husky and lint-staged                            | Accepted |
| [ADR-026](#adr-026-keep-node_env-in-environment-files)              | Keep NODE_ENV in environment files                                     | Accepted |
| [ADR-034](#adr-034-named-exports-only-no-default-exports)           | Named exports only (no default exports)                                | Accepted |
| [ADR-036](#adr-036-path-aliases--mapping-to-src-in-all-packages)    | Path aliases @/_ mapping to ./src/_ in all packages                    | Accepted |
| [ADR-037](#adr-037-code-conventions)                                | Code conventions (grouped minor decisions)                             | Accepted |

---

## Template

Each decision follows this format:

- **ADR-ID**: Incremental ID (ADR-XXX)
- **Title**: Short descriptive title
- **Status**: Proposed | Accepted | Deprecated | Superseded
- **Category**: Tech Stack | Architecture | DevOps & Infra | UX/UI
- **Date**: When the decision was made
- **Context**: What is driving this decision
- **Decision**: What was decided
- **Alternatives Considered**: Other options evaluated and why they were not chosen
- **Consequences**: Impacts, tradeoffs, and risks

---

## ADR-001: Use TypeScript as the primary language

- **Status**: Accepted
- **Category**: Tech Stack
- **Date**: 2026-06-02
- **Context**: The project is a full-stack application. Without type safety, runtime errors increase and developer experience degrades at scale. TypeScript provides compile-time checks, better IDE support, and self-documenting code across frontend and backend.
- **Decision**: Use TypeScript for all frontend and backend code.
- **Alternatives Considered**: JavaScript — no serious alternative was evaluated; TypeScript is the clear industry standard for this use case.
- **Consequences**: Improved type safety and DX across the stack; slight build-tooling overhead; shared types between frontend and backend become possible.

---

## ADR-002: Use Bun as the all-in-one toolchain (with Vite for frontend dev/build)

- **Status**: Accepted
- **Category**: Tech Stack
- **Date**: 2026-06-02
- **Context**: Full-stack projects typically require a runtime, package manager, test runner, and bundler — often from different tools (Node.js, npm/pnpm, Jest/Vitest, Vite/Webpack). This fragments tooling, increases config overhead, and slows down dev workflows. While Bun covers most concerns, its browser bundling (`bun build --target browser`) lacks code splitting, CSS extraction, asset hashing, and HMR needed for frontend development.
- **Decision**: Use Bun as the runtime, package manager, and test runner for the entire project. Use `bun build --target bun` for the server bundle. Use Vite for the frontend dev server (HMR) and production builds (code splitting, CSS extraction, asset hashing).
- **Alternatives Considered**: Node.js — mature but requires separate tools for each concern; `bun build --target browser` for frontend — lacks code splitting, CSS handling, and HMR.
- **Consequences**: Bun remains the primary toolchain for server and test concerns; Vite fills the gap for frontend dev experience (HMR) and production optimization; one additional devDependency in `@rush-pos/web`; Vite's proxy config routes `/api` requests to the Express server during development; the server still uses `bun build` for its own bundle.

---

## ADR-003: Set up CI pipeline early with GitHub Actions

- **Status**: Accepted
- **Category**: DevOps & Infra
- **Date**: 2026-06-02
- **Context**: Establishing CI early ensures code quality is enforced from the start. Without CI, type errors, lint issues, and test failures go undetected until manually discovered. Since this is a TypeScript full-stack app using Bun, the pipeline should leverage Bun's speed.
- **Decision**: Create a GitHub Actions CI pipeline that runs on every push to `main` and every pull request targeting `main`. Four parallel jobs: (1) Lint & Format — Prettier check + ESLint; (2) TypeCheck — `tsc --noEmit` across all packages; (3) Build — `bun run build` to verify the build succeeds; (4) Test — Bun test runner with a PostgreSQL 18 service container providing the `rush-pos_test` database. Migrations are applied before tests run. Caching uses `actions/cache@v4` keyed by `bun.lock` hash.
- **Alternatives Considered**: Minimal pipeline first — adds stages later but risks missing issues early; three-job pipeline (no build step) — build failures could go undetected until deploy; other CI platforms (GitLab CI, CircleCI, Jenkins) — GitHub Actions is the natural choice if the repo is on GitHub.
- **Consequences**: Catches issues before merge from day one; slightly more upfront setup work; build step catches bundling errors that typecheck alone would miss; Bun support in GitHub Actions requires using `oven-sh/setup-bun` action; PostgreSQL 18 service container matches local dev version.

---

## ADR-004: Use PostgreSQL via Docker for local development

- **Status**: Accepted
- **Category**: Tech Stack
- **Date**: 2026-06-02
- **Context**: A full-stack application needs a reliable, relational database. Local development requires a reproducible, easy-to-set-up database instance that matches the production environment. Docker provides consistent, disposable database instances without local installation hassles.
- **Decision**: Use PostgreSQL (version 18) as the primary database, running via official Docker images for local development. Production database hosting decision is deferred to ADR-016.
- **Alternatives Considered**: MongoDB — document-oriented NoSQL database; doesn't align with the need for relational data integrity and ACID compliance. SQLite — lighter but lacks concurrency and production parity.
- **Consequences**: Consistent local dev environment; easy onboarding (just `docker start rush-pos_postgres` or `bun run db:start`); production DB is Neon (ADR-016); Docker dependency for local dev; data persistence across container restarts via Docker volume `rush-pos_pgdata`.

---

## ADR-005: Use React SPA for the frontend

- **Status**: Accepted
- **Category**: Tech Stack
- **Date**: 2026-06-02
- **Context**: The frontend needs a component-based UI framework. The team has experience with React, reducing onboarding time. A SPA approach keeps the frontend decoupled from the backend, aligning with the full-stack TypeScript setup.
- **Decision**: Use React 18 as a single-page application for the frontend. SSR frameworks like Next.js can be considered later if SEO or initial load performance becomes a concern.
- **Alternatives Considered**: Vue — simpler syntax and less boilerplate, but team has less experience with it; doesn't leverage existing team knowledge. React 19 — newer but less stable ecosystem at time of decision.
- **Consequences**: Team productivity from day one due to familiarity; large ecosystem of libraries and components; SPA means client-side routing and initial load considerations; no SSR out of the box (can migrate to Next.js later if needed); React 18 is stable and well-documented.

---

## ADR-006: Use Zod for validation and type inference

- **Status**: Accepted
- **Category**: Tech Stack
- **Date**: 2026-06-02
- **Context**: A full-stack TypeScript app needs consistent, type-safe validation on both the frontend (forms) and backend (API input). Without runtime validation, TypeScript types only exist at compile time and can't guarantee incoming data shape at the boundaries. Zod provides a single source of truth for schemas that both validate at runtime and infer TypeScript types.
- **Decision**: Use Zod for API input validation on the backend and form validation on the frontend.
- **Alternatives Considered**: No serious alternative — Zod is the de facto standard for TypeScript-first schema validation with a minimal API and built-in type inference.
- **Consequences**: Shared validation schemas between frontend and backend reduce duplication; Zod schemas double as TypeScript type definitions via `z.infer`; slight runtime overhead on validation; strong ecosystem integration with forms (e.g., react-hook-form) and API frameworks.

---

## ADR-007: Use Drizzle ORM for database access

- **Status**: Accepted
- **Category**: Tech Stack
- **Date**: 2026-06-02
- **Context**: The backend needs a type-safe way to interact with PostgreSQL. ORMs provide query building, migration management, and type safety, but many add heavy abstractions or require code generation steps. Drizzle offers SQL-like syntax with full TypeScript inference and zero runtime overhead beyond query building.
- **Decision**: Use Drizzle ORM as the database access layer for the backend, connecting to PostgreSQL via the `postgres` (postgres.js) driver (ADR-028).
- **Alternatives Considered**: Prisma — schema-first approach with a Prisma schema file and code generation step; heavier runtime, slower cold starts, and less SQL-like control. Drizzle was preferred for its lighter footprint, native TypeScript types without codegen, and SQL-like DX.
- **Consequences**: Full type safety on queries and results without code generation; SQL-like syntax feels natural for developers who know SQL; lightweight runtime; Drizzle has a smaller community than Prisma; migration tooling is less mature; schema is defined in TypeScript directly, enabling easy sharing with Zod schemas; postgres.js driver provides async, high-performance PostgreSQL connectivity.

---

## ADR-008: Adopt strict TDD as the development approach

- **Status**: Accepted
- **Category**: Architecture
- **Date**: 2026-06-02
- **Context**: Without a structured testing discipline, code quality and design can degrade as the project grows. TDD forces thinking about interfaces and contracts before implementation, leading to better architecture and fewer bugs. This is especially important for a full-stack app where backend APIs and frontend logic must work reliably together.
- **Decision**: Adopt strict TDD — all code must have tests written first. No code is merged without corresponding tests. Pragmatic scope: TDD applies across the full stack but with priority on core business logic and API contracts.
- **Alternatives Considered**: Test-after approach — leads to lower coverage and tests that verify implementation rather than behavior; no structured testing — relies on developer discretion, inconsistent coverage.
- **Consequences**: Higher code quality and better software design from the start; living documentation through tests; slower initial development pace; requires discipline and team buy-in; some boilerplate for simple cases; CI pipeline (ADR-003) enforces the red-green-refactor cycle; Bun's built-in test runner (ADR-002) will be used as the test framework; placeholder smoke tests serve as a starting point in each package.

---

## ADR-009: Organize code in vertical slices (feature folders + shared infrastructure)

- **Status**: Accepted
- **Category**: Architecture
- **Date**: 2026-06-02
- **Context**: Traditional layered architecture (controllers/, services/, models/) groups code by technical concern, making it hard to understand a full feature flow. As the project grows, features become scattered across many folders, increasing cognitive load and merge conflicts. Vertical slices organize code by feature, keeping everything related to "users" or "orders" together.
- **Decision**: Organize both frontend and backend code by feature/domain in vertical slices. Each feature folder contains its route, handler, and related UI/components. Shared infrastructure (database, auth, config) remains in common modules. Slices are thin — they compose over a shared service/data layer rather than duplicating it.
- **Alternatives Considered**: Layered architecture — code organized by technical layer; familiar but scatters feature logic across directories and increases cross-cutting maintenance. Full vertical slice architecture — each slice fully independent with its own data; too much duplication for a monorepo-style full-stack app.
- **Consequences**: Feature-related code is co-located and easy to navigate; reduces merge conflicts since teams work in different feature folders; shared data layer (Drizzle) and auth/config remain centralized; easier to reason about a single feature end-to-end; requires discipline to keep slices thin and push shared logic into common modules.

---

## ADR-010: Use Express as the backend framework

- **Status**: Accepted
- **Category**: Tech Stack
- **Date**: 2026-06-02
- **Context**: The backend needs an HTTP framework to serve the REST API. The team is experienced with Express, minimizing onboarding time. Running on Bun (ADR-002) provides the performance benefits of Bun's runtime while keeping the familiar Express API.
- **Decision**: Use Express 4 as the backend HTTP framework with its built-in `express.json()` middleware for body parsing.
- **Alternatives Considered**: Hono, Elysia — newer Bun-native frameworks with modern APIs; not chosen due to team experience with Express. Express 5 — available but less stable ecosystem at time of decision.
- **Consequences**: Team productive from day one; massive middleware ecosystem; Express is not fully Bun-optimized (Hono/Elysia would leverage Bun APIs more); some middleware may need Bun compatibility checks; built-in JSON body parser avoids adding a separate `body-parser` dependency.

---

## ADR-011: Use REST API style

- **Status**: Accepted
- **Category**: Architecture
- **Date**: 2026-06-02
- **Context**: The frontend and backend need to communicate. REST is the most widely understood and well-documented API style, providing clear resource-based endpoints.
- **Decision**: Use REST for all client-server communication. All API routes are prefixed with `/api/` (e.g., `/api/health`). A `/api/health` endpoint returns `{ status: 'ok' }` for operational monitoring.
- **Alternatives Considered**: None — REST is the standard choice for this project's needs.
- **Consequences**: Predictable URL-based endpoints; easy to cache and scale; `/api/` prefix cleanly separates API routes from potential static routes; health check enables uptime monitoring; no type-safety between client and server (mitigated by shared Zod schemas, ADR-006); tRPC could be considered in the future if end-to-end type safety becomes a priority.

---

## ADR-012: Use plain CSS for frontend styling

- **Status**: Accepted
- **Category**: UX/UI
- **Date**: 2026-06-02
- **Context**: The frontend needs a styling approach. Plain CSS keeps things simple with no build tooling dependencies, no class name hashing, and full control over styles.
- **Decision**: Use plain CSS files for all frontend styling. CSS files are co-located with their components (e.g., `Layout.css` next to `Layout.tsx`) and imported directly. Class names follow a BEM-like convention (`block`, `block-element`). A global reset applies `box-sizing: border-box`, zero margin/padding, and a system font stack with `line-height: 1.5`.
- **Alternatives Considered**: CSS Modules — adds scoping but unnecessary for initial simplicity; Tailwind CSS — utility-first approach adds a dependency and learning curve; styled-components — runtime CSS-in-JS overhead.
- **Consequences**: Zero additional dependencies or build steps; full control over styling; co-located CSS makes it easy to find styles for a component; BEM-like naming prevents class collisions without tooling; global reset ensures consistent baseline; no scoped CSS by default — naming conventions (BEM) prevent collisions; can migrate to CSS Modules or Tailwind later if needed.

---

## ADR-013: Use basic React state management (useState/useContext)

- **Status**: Accepted
- **Category**: Tech Stack
- **Date**: 2026-06-02
- **Context**: The frontend needs state management. For now, React's built-in useState and useContext are sufficient. No complex global state is anticipated at this stage.
- **Decision**: Use React's built-in state management (useState and useContext) only. No external state library.
- **Alternatives Considered**: Zustand — lightweight but unnecessary for current scope; Redux — overkill for this stage; TanStack Query — can be added later for server state caching if needed.
- **Consequences**: Zero additional dependencies; simplest possible state management; may need to introduce an external library (Zustand, TanStack Query) if server state or complex global state becomes a concern.

---

## ADR-014: Monorepo with Bun workspaces

- **Status**: Accepted
- **Category**: Architecture
- **Date**: 2026-06-02
- **Context**: The full-stack app has a frontend and backend that share types, schemas (Zod, ADR-006), and possibly utilities. A monorepo keeps everything in one repository, enabling code sharing and atomic commits across the stack. Bun workspaces provide native monorepo support without additional tooling.
- **Decision**: Use a monorepo structure managed by Bun workspaces, with separate packages for frontend, backend, and shared code.
- **Alternatives Considered**: Turborepo — adds caching and orchestration but overkill for this project size; Nx — full framework, too heavy; separate repos — loses code sharing and atomic cross-stack commits.
- **Consequences**: Shared types and schemas between frontend and backend; single repo for all code; Bun workspaces are simple and add no extra dependency; no caching or advanced orchestration (can add Turborepo later if needed); monorepo scripts use `bun run --filter` with wildcard (`./packages/*`) or specific package (`@rush-pos/server`) patterns.

---

## ADR-015: Use JWT for authentication

- **Status**: Accepted
- **Category**: Architecture
- **Date**: 2026-06-02
- **Context**: The application needs an authentication mechanism. JWTs are stateless, easy to implement in a REST API, and work well across both web and potential mobile (React Native) clients.
- **Decision**: Use JWT-based authentication for the API.
- **Alternatives Considered**: Session-based auth — requires server-side session storage, less portable across clients; OAuth provider (Auth0, Clerk) — adds a third-party dependency, can be layered on later if needed.
- **Consequences**: Stateless auth, easy to scale; works seamlessly with future React Native client (ADR-018); must handle token refresh and expiration carefully; no built-in logout/revocation without a token denylist or short expiry + refresh tokens.

---

## ADR-016: Use Neon Postgres on Render for production

- **Status**: Accepted
- **Category**: DevOps & Infra
- **Date**: 2026-06-02
- **Context**: The app needs production hosting. Neon provides a serverless Postgres database with autoscaling and branching, complementing ADR-004 (PostgreSQL). Render offers simple deployment for both the backend API and React SPA.
- **Decision**: Host the production database on Neon Postgres and deploy the application on Render.
- **Alternatives Considered**: Self-hosted Postgres on Render — more ops overhead; AWS RDS — more complex setup and pricing; Supabase — includes auth and realtime features beyond current needs; Vercel — frontend-focused, less suitable for Express backend.
- **Consequences**: Managed database reduces ops burden; Neon's branching feature useful for preview environments; Render provides straightforward deployment with auto-scaling; cost will scale with usage; production DB is Neon (not Docker), so local dev uses ADR-004 Docker setup for parity testing.

---

## ADR-017: Use dotenv for environment configuration

- **Status**: Accepted
- **Category**: Tech Stack
- **Date**: 2026-06-02
- **Context**: The backend needs a way to manage environment-specific configuration (database URLs, JWT secrets, API keys). These values must not be committed to source control.
- **Decision**: Use `.env` files for environment configuration. Bun's `--env-file` flag loads variables per context (development, test), and `dotenv` is included as a safety net for environments or scripts that may not use `--env-file`.
- **Alternatives Considered**: Bun's built-in env loading only — would work but `dotenv` provides explicit initialization in the server entry point; environment-only config — no file, set vars in CI/hosting only; harder for local development.
- **Consequences**: Simple, industry-standard approach; `.env` files excluded from version control; `dotenv.config()` is called in the server entry point as a safety net alongside `--env-file`; environment variable documentation lives in `DEVELOPMENT.md` (not a separate `.env.example` file, to keep docs in one place); must define a schema for required env vars (validated with `validateConfig()`, ADR-029).

---

## ADR-018: React Native as a future nice-to-have

- **Status**: Accepted
- **Category**: Architecture
- **Date**: 2026-06-02
- **Context**: A mobile client may be desired in the future. React Native shares React knowledge and can reuse API clients, auth (JWT, ADR-015), and Zod schemas (ADR-006) from the web app.
- **Decision**: Keep React Native as a nice-to-have target. No immediate development, but architecture decisions (REST API, JWT auth, monorepo structure) should not preclude a future React Native client.
- **Alternatives Considered**: Flutter — different language (Dart), no React knowledge reuse; native — higher development cost, no code sharing.
- **Consequences**: Current decisions (REST, JWT, monorepo) are mobile-friendly; shared packages in monorepo (ADR-014) will make mobile integration smoother when prioritized; no immediate mobile investment.

---

## ADR-019: Project scaffolding with Bun workspaces

- **Status**: Accepted
- **Category**: Architecture
- **Date**: 2026-06-02
- **Context**: The project needs a monorepo structure (ADR-014) that separates frontend, backend, and shared code. Bun workspaces provide native monorepo support. The backend will serve the built React SPA in production, so the build pipeline must ensure `@rush-pos/web` builds before `@rush-pos/server` references the output. Vertical slices (ADR-009) dictate feature-based folder organization within each package. Shared schemas and types (ADR-006) need a dedicated package that both web and server depend on.
- **Decision**: Scaffold the project with three workspace packages: `@rush-pos/shared` (Zod schemas, shared types), `@rush-pos/server` (Express backend with feature folders, Drizzle schema/migrations, DB connection), and `@rush-pos/web` (React SPA with feature folders, components, styles). Web builds to its own `dist/`; server references `../web/dist/` as static files. Root `package.json` orchestrates build order (web first, then server) and dev scripts. Drizzle config and migrations live in the server package. Scoped package names (`@rush-pos/*`) avoid naming collisions.
- **Alternatives Considered**: Web builds into server directory — simpler deploy but couples build output paths; Turborepo/Nx — adds orchestration tooling overhead unnecessary at this scale; separate repos — loses shared code and atomic commits.
- **Consequences**: Clean separation of concerns with three packages; shared package eliminates type/schema duplication; Bun workspaces resolve `@rush-pos/shared` as a local dependency; build order enforced by root scripts; server serves production build from `../web/dist/` (relative path within workspaces); Docker Compose provides local PostgreSQL; monorepo structure supports future React Native package (ADR-018).

---

## ADR-020: Docker-based local database management

- **Status**: Accepted
- **Category**: DevOps & Infra
- **Date**: 2026-06-02
- **Context**: Developers need a PostgreSQL database running locally for development and testing. Docker provides a consistent, disposable database instance. The project needs scripts to start/stop the database, run migrations, and run tests against a separate test database — similar to the knife-roll pattern of `docker start || docker run` for fast iteration.
- **Decision**: Use a `docker start || docker run` pattern via npm scripts for the local database. Separate `.env.development` and `.env.test` files configure different databases (`rush-pos` and `rush-pos_test`) on the same PostgreSQL container. Root scripts: `db:start` (start or create container), `db:stop`, `db:migrate`, `dev:full` (start DB, migrate, run dev), and `test` (start DB, use `.env.test`, run tests). Bun's `--env-file` flag loads the appropriate environment per context. The Docker container is named `rush-pos_postgres` with a `rush-pos_pgdata` volume mounted at `/var/lib/postgresql`. Default credentials are `postgres/postgres` for local development only.
- **Alternatives Considered**: Docker Compose only — requires `docker compose up` every time, slower for quick start/stop; separate Docker containers for test DB — unnecessary resource overhead when a second database on the same container works fine; manual Docker commands — error-prone and inconsistent across team members.
- **Consequences**: Fast database startup with `docker start` (reuses existing container) or `docker run` (creates on first use); test isolation via `rush-pos_test` database on the same container; `dev:full` script provides one-command onboarding; `docker-compose.yml` is not included — the `docker start || docker run` pattern is sufficient for local dev and CI uses GitHub Actions service containers; environment files are gitignored to prevent secrets from being committed; `DEVELOPMENT.md` documents the env var templates instead of a separate `.env.example` file.

---

## ADR-021: Code style — single quotes, semicolons, enforced with Prettier + ESLint

- **Status**: Accepted
- **Category**: Code Style
- **Date**: 2026-06-02
- **Context**: Without enforced formatting rules, code style will drift across the project as different developers write code. Inconsistent quote styles, semicolons, trailing commas, and spacing create noise in diffs and reduce readability. The project needs both automated formatting (Prettier) and code quality rules (ESLint) from the start to support the TDD approach (ADR-008) and keep CI checks consistent.
- **Decision**: Use single quotes, always require semicolons, trailing commas, and enforce these with Prettier and ESLint. Prettier handles formatting (quotes, semicolons, indentation, line width). ESLint handles code quality (unused variables, React hooks rules, TypeScript best practices). Both run as root-level scripts available to all packages. ESLint config uses the new flat config format (`eslint.config.mjs`) with TypeScript and React plugins. Full Prettier config: single quotes, semicolons, trailing commas (`all`), print width 80, tab width 2, bracket spacing, always parens for arrow functions, LF line endings.
- **Alternatives Considered**: Double quotes — valid choice but Prettier default; single quotes are more common in JS/TS community; no enforcement — relies on discipline, style drifts immediately; Biome — all-in-one formatter+lint but less mature ecosystem than Prettier+ESLint.
- **Consequences**: Consistent code style across the entire project; `bun run format` auto-fixes formatting; `bun run lint` catches code quality issues; `bun run format:check` validates formatting in CI; Prettier and ESLint configs are root-level (shared across all packages); new devs just run `bun run format` and style is handled automatically; `.prettierignore` excludes `node_modules/`, `dist/`, `drizzle/`, `coverage/`, and lock files.

---

## ADR-022: Environment variable management with --env-file flags

- **Status**: Accepted
- **Category**: Architecture
- **Date**: 2026-06-02
- **Context**: Different environments (development, test, production) need different configuration. The server needs `DATABASE_URL`, `JWT_SECRET`, and `PORT`. Drizzle Kit commands need access to `DATABASE_URL` when running locally. Production deployments (Render) set env vars via the platform dashboard — no `.env` files exist. CI sets env vars inline in the workflow.
- **Decision**: Use Bun's built-in `--env-file` flag to load environment files per context. All scripts that need env vars explicitly pass the appropriate file: `--env-file=.env.development` for dev commands, `--env-file=.env.test` for test commands. Production gets env vars from the hosting platform. `drizzle.config.ts` uses `process.env.DATABASE_URL!` directly. The `dotenv` package is included as a production dependency and called in the server entry point as a safety net for cases where `--env-file` is not used (e.g., direct `bun run` without flags).
- **Alternatives Considered**: Import `dotenv/config` in `drizzle.config.ts` only — works but creates inconsistency between config file and app initialization; separate `.env` for each environment — same pattern but `--env-file` is a Bun native feature; environment-only config — no file, set vars in CI/hosting only; harder for local development.
- **Consequences**: Explicit about which environment each command targets; no conditional env loading logic in application code; `.env.*` patterns are gitignored; environment variable documentation lives in `DEVELOPMENT.md` instead of a separate `.env.example` file, keeping all onboarding docs in one place; the `start` script (production) has no `--env-file` flag since the platform provides env vars; test script runs `db:migrate` before tests to ensure schema is up to date; `dotenv.config()` in `index.ts` provides a fallback for direct execution.

---

## ADR-023: ESLint per-package rules and import boundaries

- **Status**: Accepted
- **Category**: Architecture
- **Date**: 2026-06-02
- **Context**: The monorepo has three packages with a clear dependency direction: `server ← shared → web`. Without enforcement, developers could import `@rush-pos/web` from `@rush-pos/server` or vice versa, creating circular dependencies and breaking the architecture. Additionally, React lint rules should only apply to `@rush-pos/web`, not `@rush-pos/server`.
- **Decision**: Split ESLint configuration into per-package rule sets in a single flat config (`eslint.config.mjs`). `@rush-pos/shared` gets TypeScript rules + blocked from importing server or web. `@rush-pos/server` gets TypeScript rules + blocked from importing web. `@rush-pos/web` gets TypeScript + React + React Hooks rules + blocked from importing server. Unused variable rule allows underscore-prefixed args (`argsIgnorePattern: '^_'`). React JSX scope is off (React 17+ automatic runtime). React Hooks `rules-of-hooks` is error, `exhaustive-deps` is warn. React version is auto-detected. Root config files (`vite.config.ts`, `drizzle.config.ts`) inherit the server rules. The `no-console` and `consistent-type-imports` rules described in the original proposal will be added in a future iteration.
- **Alternatives Considered**: Single ESLint config for all packages — applies React rules to server code, creates false positives; no import boundary enforcement — relies on discipline, leads to architectural drift over time; Turborepo/Nx for boundary enforcement — overkill for this project size.
- **Consequences**: Architectural boundaries enforced at lint time; React rules only apply where relevant; import violations produce clear error messages; `@typescript-eslint/no-unused-vars` with `argsIgnorePattern: '^_'` allows intentional unused params; `no-console` and `consistent-type-imports` are planned but not yet enforced; `eslint.config.mjs` ignores `**/dist/**`, `**/drizzle/**`, and `**/node_modules/**`.

---

## ADR-024: Strict TypeScript configuration

- **Status**: Accepted
- **Category**: Tech Stack
- **Date**: 2026-06-02
- **Context**: TypeScript's `strict: true` enables many safety checks but doesn't cover all cases. `noUncheckedIndexedAccess` prevents accessing array elements or object keys from returning `T` instead of `T | undefined`. `isolatedModules` ensures each file can be transpiled independently, which is required for Bundler module resolution (used by Bun and Vite). `noImplicitOverride` forces explicit `override` keywords on class method overrides, preventing accidental method shadowing. Additional settings like `esModuleInterop`, `skipLibCheck`, `forceConsistentCasingInFileNames`, and `resolveJsonModule` improve compatibility and DX.
- **Decision**: Use a strict base `tsconfig.base.json` inherited by all packages: `strict: true`, `noUncheckedIndexedAccess`, `isolatedModules`, `noImplicitOverride`, `esModuleInterop`, `skipLibCheck`, `forceConsistentCasingInFileNames`, `resolveJsonModule`, `target: ES2022`, `module: ESNext`, `moduleResolution: bundler`. Per-package overrides: server disables `declaration`, `declarationMap`, and `sourceMap` (it's an app, not a library); web adds `jsx: react-jsx` and `lib: ["ES2022", "DOM", "DOM.Iterable"]`.
- **Alternatives Considered**: Default `strict: true` only — misses index access safety and bundler compatibility; `verbatimModuleSyntax` instead of `isolatedModules` — stricter but requires `import type` everywhere, which we already enforce via ESLint's `consistent-type-imports`.
- **Consequences**: Array element access and object key access return `T | undefined`, requiring explicit null checks; each TS file is independently transpilable, ensuring compatibility with Bun and Vite; class method overrides must use the `override` keyword; slightly more verbose code but significantly fewer runtime type errors; ES modules are the default (`module: ESNext`); web package includes DOM types for browser APIs.

---

## ADR-025: Pre-commit hooks with Husky and lint-staged

- **Status**: Accepted
- **Category**: DevOps & Infra
- **Date**: 2026-06-02
- **Context**: Without pre-commit hooks, developers can commit code that fails formatting or lint checks, pushing issues to CI instead of catching them locally. This wastes CI minutes and slows the feedback loop. Running Prettier and ESLint on the entire project on every commit would be too slow for large codebases.
- **Decision**: Use Husky for git hooks and lint-staged for running checks only on staged files. On every `git commit`, lint-staged runs `eslint --fix` and `prettier --write` on staged `*.{ts,tsx}` files, and `prettier --write` on staged `*.{json,md,css,yml}` files. If any check fails, the commit is blocked. Developers can bypass with `--no-verify` for WIP commits.
- **Alternatives Considered**: No pre-commit hooks — relies on CI to catch issues, slower feedback; full-project lint on every commit — too slow as the project grows; Biome lint-staged — would work but project already uses Prettier + ESLint.
- **Consequences**: Formatting and lint issues are caught before push; only staged files are checked, making the hook fast (usually under 1 second); developers can bypass with `git commit --no-verify`; Husky's `prepare` script runs automatically on `bun install`; lint-staged config lives in root `package.json`.

---

## ADR-026: Keep NODE_ENV in environment files

- **Status**: Accepted
- **Category**: Architecture
- **Date**: 2026-06-02
- **Context**: `NODE_ENV` appears in `.env.development`, `.env.test`, and the CI workflow YAML, but nothing in the current codebase reads or checks it. It could be considered dead weight. However, `NODE_ENV` is a widely recognized convention that Express automatically uses for behavior toggling (detailed errors in development, caching in production), Vite uses to determine build mode, and hosting platforms (Render) set it automatically in production.
- **Decision**: Keep `NODE_ENV` in `.env.development` and environment files as documentation of the convention. The server's centralized config (ADR-029) provides `NODE_ENV` with a default value of `'development'`. The server entry point should check `NODE_ENV` to determine behavior such as serving static files only in production, enabling detailed error messages in development, and configuring CORS or rate limiting per environment.
- **Alternatives Considered**: Remove `NODE_ENV` entirely — nothing reads it now, but it will be needed as soon as server code is written; set it only in CI and hosting — works but developers lose visibility into what environment they're running locally.
- **Consequences**: `NODE_ENV` serves as documented convention before it's actively used; server code will rely on it for environment-specific behavior (static file serving, error detail, CORS); hosting platforms set it automatically; developers see it in their `.env.development` file and understand it's an expected variable; CI sets it inline in the test job; test port is 3001 (different from dev port 3000).

---

## ADR-027: Add @types/node and configure types ["node", "bun"] in tsconfig

- **Status**: Accepted
- **Category**: Tech Stack
- **Date**: 2026-06-05
- **Context**: `drizzle.config.ts` uses `process.env.DATABASE_URL!`, which requires Node.js type definitions. The project runs on Bun and has `@types/bun` installed, but `process` is a Node.js global not fully covered by Bun's types. Without `@types/node`, TypeScript reports `Cannot find name 'process'`. The base `tsconfig.json` had no `types` field, so TypeScript couldn't resolve Node.js globals.
- **Decision**: Add `@types/node` as a devDependency to the server package and set `"types": ["node", "bun"]` in each package's `tsconfig.json` compilerOptions. This ensures both Node.js APIs (`process`, `Buffer`, etc.) and Bun-specific APIs are available during type checking.
- **Alternatives Considered**: Use `Bun.env` instead of `process.env` — would avoid needing `@types/node` but diverges from standard Node.js conventions and Drizzle Kit examples; add only `@types/node` without `bun` types — loses Bun-specific type definitions.
- **Consequences**: Config files and server code can use `process.env` with full type safety; both Node and Bun APIs are available in type checking; aligns with ADR-024 (strict TS config) and ADR-002 (Bun as toolchain); other packages can add `"types": ["node", "bun"]` as needed.

---

## ADR-028: Use postgres.js as the Drizzle PostgreSQL driver

- **Status**: Accepted
- **Category**: Tech Stack
- **Date**: 2026-06-05
- **Context**: Drizzle ORM supports multiple PostgreSQL drivers: `pg` (node-postgres), `postgres.js`, `node-postgres-js`, and `neon-http`. The choice of driver affects performance, bundle size, and compatibility with the Bun runtime (ADR-002). Drizzle Kit also needs a driver for migration operations.
- **Decision**: Use `postgres` (postgres.js) as the PostgreSQL driver for Drizzle ORM. The `postgres` package provides async, high-performance PostgreSQL connectivity that works well with Bun's runtime. The database connection is initialized in `src/db/connection.ts` using `drizzle-orm/postgres-js` and the `postgres` client.
- **Alternatives Considered**: `pg` (node-postgres) — more established but callback-based and slower; `node-postgres-js` — wrapper around postgres.js, unnecessary indirection; `neon-http` — only for Neon serverless, not suitable for local dev.
- **Consequences**: High-performance async driver compatible with Bun; minimal dependencies; established pattern for Drizzle + Bun; the `postgres` package is a production dependency in `@rush-pos/server`; connection is centralized in `src/db/connection.ts` for reuse across the application.

---

## ADR-029: Centralized config object with runtime validation

- **Status**: Accepted
- **Category**: Architecture
- **Date**: 2026-06-05
- **Context**: Environment variables are loaded via `--env-file` flags (ADR-022) and `dotenv`, but accessing `process.env` directly throughout the codebase is error-prone — typos in variable names won't be caught at compile time, and missing variables cause runtime crashes in unpredictable places. A centralized config module provides a single source of truth for all configuration values.
- **Decision**: Create a centralized config module (`src/utils/config.ts`) that reads all required environment variables into a typed object with sensible defaults. `PORT` defaults to 3000, `NODE_ENV` defaults to `'development'`. Required variables (`DATABASE_URL`, `JWT_SECRET`) are validated at startup by `validateConfig()`, which throws a clear error listing all missing variables. The server entry point calls `validateConfig()` before initializing the database or starting the server.
- **Alternatives Considered**: Zod-based config validation — more type-safe but adds complexity for a small config surface; direct `process.env` access — error-prone, no startup validation, misses typos; environment-only validation — no clear error messages at startup.
- **Consequences**: All config access goes through a typed object (`config.PORT`, `config.DATABASE_URL`); missing variables cause an immediate, clear error at startup rather than a confusing runtime crash; defaults reduce boilerplate for optional variables; single file to update when adding new config values; `validateConfig()` is called early in `index.ts` before any other initialization; complements ADR-022 (`--env-file` loading) and ADR-026 (`NODE_ENV` convention).

---

## ADR-030: app.ts / index.ts separation pattern

- **Status**: Accepted
- **Category**: Architecture
- **Date**: 2026-06-05
- **Context**: In Express applications, it's common to see the app setup, middleware, routes, server creation, and startup logic all in a single file. This makes testing the Express app difficult because importing the file starts the server. Separating concerns enables testing the app configuration without binding to a port.
- **Decision**: Split the server into two files. `app.ts` defines the Express app, middleware, and routes — it exports the `app` object without side effects. `index.ts` is the entry point — it loads env vars (`dotenv.config()`), validates config (`validateConfig()`), initializes the database, creates the HTTP server, and registers graceful shutdown handlers.
- **Alternatives Considered**: Single-file server — simpler but untestable without starting the server; more granular split (separate files for middleware, routes, etc.) — premature for current project size; claude-workflow pattern — app factory function returning configured app.
- **Consequences**: `app.ts` can be imported in tests to test routes and middleware without starting a server; `index.ts` is the single orchestrator that wires everything together; adding new middleware or routes only requires editing `app.ts`; startup concerns (env validation, DB init, shutdown) are centralized in `index.ts`; aligns with ADR-009 (vertical slices) by keeping shared infrastructure separate.

---

## ADR-031: API route prefix and health check endpoint

- **Status**: Accepted
- **Category**: Architecture
- **Date**: 2026-06-05
- **Context**: The Express server serves both API routes and (in production) static frontend files. Without a clear convention, API routes and static asset routes could collide. An operational health check endpoint is needed for uptime monitoring, load balancer checks, and CI verification.
- **Decision**: All API routes are prefixed with `/api/` (e.g., `/api/health`). A `/api/health` endpoint returns `{ status: 'ok' }` for operational monitoring. During development, Vite proxies `/api` requests to the Express server (port 3000) from the frontend dev server (port 5173).
- **Alternatives Considered**: No prefix — API and static routes could collide, harder to reason about; `/v1/api/` prefix — premature versioning; health check on root (`/`) — conflicts with serving the SPA in production.
- **Consequences**: Clean separation between API routes (`/api/*`) and static/SPA routes; Vite proxy config only needs to forward `/api`; health check enables uptime monitoring and CI health checks; convention is simple and easy to follow for new routes; consistent with REST API style (ADR-011).

---

## ADR-032: Graceful shutdown with SIGINT/SIGTERM handling

- **Status**: Accepted
- **Category**: Architecture
- **Date**: 2026-06-05
- **Context**: When a server process receives a termination signal (SIGINT from Ctrl+C, SIGTERM from Docker/Render), in-flight requests should complete before the process exits. Abrupt termination can cause database connection leaks, interrupted writes, and client errors. This is especially important when running in Docker or cloud hosting environments.
- **Decision**: Register `SIGINT` and `SIGTERM` handlers in the server entry point (`index.ts`). The shutdown function closes the database connection, then closes the HTTP server, then exits with code 0. On startup failure, the process exits with code 1 after a 100ms delay (to allow error logs to flush).
- **Alternatives Considered**: No graceful shutdown — connections leak, in-flight requests drop; `process.exit()` on first signal — no cleanup at all; third-party graceful shutdown library — unnecessary complexity for a simple shutdown sequence.
- **Consequences**: Database connections are properly closed on shutdown; in-flight HTTP requests can complete; matches Docker and cloud hosting expectations (SIGTERM → cleanup → exit); 100ms delay on error startup ensures error messages flush to stdout/stderr; simple, no additional dependencies; the shutdown function is in `index.ts` alongside the startup logic for easy review.

---

## ADR-033: UUID primary keys with gen_random_uuid()

- **Status**: Accepted
- **Category**: Architecture
- **Date**: 2026-06-05
- **Context**: Database tables need primary keys. Auto-incrementing integers are simple but expose record counts, make merging data across environments difficult, and are predictable. UUIDs are globally unique, opaque, and work well with distributed systems. PostgreSQL 13+ has built-in `gen_random_uuid()` support.
- **Decision**: Use UUID as the primary key type for all database tables, with `defaultRandom()` in Drizzle (which maps to PostgreSQL's `gen_random_uuid()`). Table names use plural lowercase English (e.g., `users`, `orders`).
- **Alternatives Considered**: Auto-incrementing integer IDs — simple but expose record counts and make cross-environment merging difficult; ULID — time-sortable but less native PostgreSQL support; CUID — requires application-level generation.
- **Consequences**: Globally unique IDs that work across environments and don't leak record counts; PostgreSQL generates IDs at the database level, reducing round trips; slightly larger storage (16 bytes vs 4 bytes for int); consistent convention across all tables; Drizzle's `.defaultRandom()` makes this easy to define in schema code; table naming convention is plural lowercase.

---

## ADR-034: Named exports only (no default exports)

- **Status**: Accepted
- **Category**: Code Style
- **Date**: 2026-06-05
- **Context**: JavaScript/TypeScript supports both named exports and default exports. Default exports allow arbitrary names at the import site, making it harder to search for usages and leading to inconsistent naming. Named exports have consistent names everywhere they're used, improve IDE auto-import, and make refactoring safer.
- **Decision**: Use named exports exclusively throughout the codebase. No default exports. This applies to all packages: functions, constants, components, and modules must use named exports.
- **Alternatives Considered**: Default exports — allows arbitrary import names, harder to search and refactor; mixed approach — inconsistent, creates ambiguity about whether to expect default or named.
- **Consequences**: Consistent import names across the codebase; IDE auto-import works more reliably; easier to search for usages by export name; no confusion about default vs named imports; React components use `export function ComponentName()` style; aligns with ESLint's `prefer-default-export` rule being off.

---

## ADR-035: Bun --hot for development server reload

- **Status**: Accepted
- **Category**: DevOps & Infra
- **Date**: 2026-06-05
- **Context**: During development, the server needs to automatically reload when source files change. Bun's `--hot` flag enables hot module reloading — it replaces changed modules without restarting the entire process, preserving state where possible. This is faster than full restarts and preserves database connections and other stateful resources.
- **Decision**: Use `bun run --hot src/index.ts` as the development server command for `@rush-pos/server`. The `--hot` flag enables Bun's hot module reloading during development.
- **Alternatives Considered**: `--watch` flag — full process restart on changes, slower and loses state; `nodemon` — Node.js-based watcher, requires separate dependency and doesn't leverage Bun's runtime; manual restart — no automation, worst DX.
- **Consequences**: Fast development iteration; module replacement preserves some state across reloads; works with Bun's runtime natively; no additional dependencies; the `dev` script in the server package uses `--hot`; the root `dev:full` script chains `db:start`, `db:migrate`, and `dev` for one-command startup.

---

## ADR-036: Path aliases @/_ mapping to ./src/_ in all packages

- **Status**: Accepted
- **Category**: Code Style
- **Date**: 2026-06-05
- **Context**: As packages grow, relative imports become deeply nested (e.g., `../../../utils/config`). Path aliases provide a clean, stable import path regardless of file depth. Both TypeScript and Vite need to agree on the same alias resolution for the dev experience to work smoothly.
- **Decision**: Use `@/*` as a path alias mapping to `./src/*` in both the server and web packages. TypeScript path aliases are configured in each package's `tsconfig.json`. Vite resolves the same alias in `vite.config.ts` for the web package. The shared package doesn't use path aliases since it's a single-layer module.
- **Alternatives Considered**: No aliases — deeply nested relative imports reduce readability and make file moves error-prone; `~/*` prefix — common but less standard than `@/`; package-absolute imports — would require name changes.
- **Consequences**: Clean imports regardless of file depth (e.g., `import { config } from '@/utils/config'`); TypeScript and Vite both resolve the alias consistently; easy to move files without updating all import paths; `@/*` is a widely recognized convention in TypeScript projects; only applies to server and web packages (shared is flat enough not to need it).

---

## ADR-037: Code conventions (grouped minor decisions)

- **Status**: Accepted
- **Category**: Code Style
- **Date**: 2026-06-05
- **Context**: Several minor conventions are implemented across the codebase that don't warrant individual ADRs but should be documented for consistency.
- **Decision**: The following conventions are established:
  - **Port scheme**: Development frontend on 5173 (Vite default), development backend on 3000, test backend on 3001. Vite proxies `/api` from 5173 to 3000.
  - **ESM module system**: All packages use ESNext modules (`"module": "ESNext"`). The web package explicitly sets `"type": "module"`.
  - **Direct source resolution for shared**: Vite resolves `@rush-pos/shared` directly to TypeScript source (`../shared/src`) during development, avoiding a build step for the shared package.
  - **Named exports**: All exports are named exports (ADR-034). No default exports anywhere.
  - **CSS reset and baseline**: Global CSS applies `box-sizing: border-box`, resets margin/padding, uses `system-ui, -apple-system, sans-serif` font stack, and `line-height: 1.5`.
  - **Co-located CSS**: Component CSS files live next to their components (`Layout.css` next to `Layout.tsx`) and are imported directly.
  - **BEM-like class naming**: CSS classes follow `block` and `block-element` patterns (e.g., `.layout`, `.layout-header`).
  - **Dependency versioning**: All dependencies use caret (`^`) ranges for minor/patch upgrades.
  - **Caret version ranges**: Dependencies use `^` (allow minor/patch updates) rather than exact pinning or tilde ranges.
  - **VS Code settings**: Format on save (Prettier), organize imports on save, local TypeScript SDK, recommended extensions (ESLint, Prettier, TypeScript Next, Drizzle).
  - **Drizzle config**: `verbose: true` and `strict: true` in `drizzle.config.ts` ensure SQL is printed and strict checks are enforced during migrations.
  - **Placeholder smoke tests**: Each package has a placeholder `describe`/`test` block until real tests are written per the TDD approach (ADR-008).
  - **`clean` script convention**: All packages have a `clean` script that removes `dist/` and `coverage/` directories.
  - **`.gitignore` contents**: Ignores `node_modules/`, `dist/`, `.env` and `.env.*`, `*.db`, `.DS_Store`, `.eslintcache`, and `coverage/`.
  - **`.prettierignore` contents**: Ignores `node_modules/`, `dist/`, `.next/`, `coverage/`, `bun.lock`, `pnpm-lock.yaml`, and `drizzle/`.
- **Alternatives Considered**: Documenting each as a separate ADR — too much overhead for minor conventions; no documentation — conventions are implicit and discovered by reading code.
- **Consequences**: All conventions are explicit and discoverable; new developers can find the project norms in one place; decisions are reversible but provide a starting point; grouped ADR reduces overhead while still recording the decisions.
