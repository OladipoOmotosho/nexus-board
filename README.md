# Nexus Board

Team collaboration platform built with Next.js and NestJS in a monorepo setup.

## 🏗️ Project Structure

```
nexus-board/
├── apps/
│   ├── web/                    # Next.js frontend (App Router)
│   └── api/                    # NestJS backend
├── packages/
│   ├── ui/                     # Shared UI components
│   └── types/                  # Shared TypeScript types & Zod schemas
├── .github/
│   └── workflows/              # CI/CD pipelines
├── package.json                # Root package.json with workspaces
├── pnpm-workspace.yaml         # pnpm workspace configuration
├── turbo.json                  # Turborepo configuration
└── .env.example                # Environment variables template
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env
```

### Development

```bash
# Run all apps in development mode
pnpm dev

# Run specific app
pnpm --filter @nexus-board/web dev
pnpm --filter @nexus-board/api dev
```

### Building

```bash
# Build all apps
pnpm build

# Build specific app
pnpm --filter @nexus-board/web build
pnpm --filter @nexus-board/api build
```

### Testing

```bash
# Run all tests
pnpm test

# Run specific app tests
pnpm --filter @nexus-board/web test
pnpm --filter @nexus-board/api test
```

## 📦 Workspaces

### apps/web
Next.js 14 application with App Router featuring:
- Authentication pages (`/sign-in`)
- Dashboard interface (`/dashboard`)
- API routes for edge functions
- Shared components and utilities

### apps/api
NestJS application with:
- RESTful API endpoints
- WebSocket support (Socket.IO)
- Prisma ORM for database management
- JWT & OAuth authentication (Google)
- Modular architecture (users, teams, boards, tasks, etc.)

### packages/ui
Shared UI component library with:
- Reusable React components
- Consistent styling

### packages/types
Shared TypeScript definitions with:
- Zod schemas for validation
- Type definitions used across apps

## 🗄️ Database

The project uses PostgreSQL with Prisma ORM.

```bash
# Generate Prisma client
pnpm --filter @nexus-board/api prisma:generate

# Run migrations
pnpm --filter @nexus-board/api prisma:migrate

# Seed database
pnpm --filter @nexus-board/api prisma:seed
```

## 🔧 Environment Variables

See `.env.example` for required environment variables:
- Database connection
- JWT secrets
- OAuth credentials (Google)
- API URLs

## 🧪 CI/CD

GitHub Actions workflow runs on push/PR to main/develop:
- Linting
- Type checking
- Build verification
- Tests

## 📝 License

See [LICENSE](./LICENSE) file for details.
