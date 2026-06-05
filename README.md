# 🥗 Rush POS

### 📊 A modern Point of Sale (POS) application built to help businesses manage orders, products, customers, and transactions efficiently.

## 📝 Overview

Rush POS is a full-stack application designed to streamline restaurant and retail operations. The platform provides tools for managing products, processing sales, tracking orders, and maintaining business data through an intuitive interface.

## 🛠️ Features

- User authentication and authorization
- Product management
- Order creation and tracking
- PostgreSQL database integration
- Responsive user interface
- Real-time data updates
- Planned Features
- Customer management
- Inventory tracking
- Sales analytics and reporting
- Employee role management
- Receipt generation
- Payment processing integration

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Backend
- Node.js
- Bun

### Database

- PostgreSQL
- Drizzle ORM
- Development Tools
- Docker
- Drizzle Kit
- ESLint
- Git

## 🧩 Project Structure

```
/wireframes/
rush-pos/
├── packages/
│   ├── client/
│   ├── server/
│   └── shared/
├── drizzle/
├── docker/
└── README.md
```

## 🔌 Getting Started

### Prerequisites

Before running the project, ensure you have:
Node.js
Bun
Docker Desktop
PostgreSQL (if not using Docker)
Installation

### 🪛 Clone the repository:

git clone [<repository-url>](https://github.com/ManoloEsS/Rush-POS.git)
cd rush-pos

Install dependencies:

bun install
Environment Variables

Create a .env.development file:

DATABASE_URL=postgres://postgres:postgres@localhost:5432/rush-pos

Add any additional environment variables required by the project.

Running the Application

Start the database:

bun run db:start

Run migrations:

bun run db:migrate

Start development servers:

bun dev:full
Database

This project uses PostgreSQL with Drizzle ORM.

Generate migrations:

bun run db:generate

Run migrations:

bun run db:migrate

Open Drizzle Studio:

bun run db:studio
Team

## Built by:

Manolo Estrada
Kiana Mills

### Future Improvements

- Advanced reporting dashboard
- Multi-location support
- Customer loyalty program
- Payment gateway integrations
- Inventory forecasting
- Mobile application support
