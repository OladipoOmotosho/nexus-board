# Nexus Board - Architecture Documentation

## Overview

Nexus Board is a full-stack team collaboration platform built with a modern monorepo architecture. This document provides a comprehensive overview of the system architecture, design decisions, and technical implementation.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │   Next.js 15 (App Router) + React + TypeScript      │   │
│  │   - Tailwind CSS + shadcn/ui (UI Components)        │   │
│  │   - Zustand (Client State Management)               │   │
│  │   - React Query (Server State Management)           │   │
│  │   - Auth.js/NextAuth (Authentication)               │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ↕ HTTP/WebSocket
┌─────────────────────────────────────────────────────────────┐
│                        API Layer                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │   NestJS + TypeScript                               │   │
│  │   - RESTful API (Controllers + Services)            │   │
│  │   - Socket.IO Gateway (Real-time Communication)     │   │
│  │   - JWT Authentication (Passport.js)                │   │
│  │   - Zod Validation                                   │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────┐
│                     Data Access Layer                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │   Prisma ORM                                         │   │
│  │   - Type-safe database queries                       │   │
│  │   - Migration management                             │   │
│  │   - Schema validation                                │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ↕
┌──────────────────┐   ┌────────────────────────────────────┐
│   PostgreSQL     │   │           Redis                     │
│   (Primary DB)   │   │   - WebSocket scaling (Adapter)    │
│                  │   │   - Session storage                 │
│                  │   │   - Caching layer                   │
└──────────────────┘   └────────────────────────────────────┘
```

## Technology Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: 
  - Zustand (client-side state)
  - React Query (server state & caching)
- **Authentication**: Auth.js (NextAuth v5)
- **Real-time**: Socket.IO Client

### Backend
- **Framework**: NestJS
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Caching/PubSub**: Redis
- **Real-time**: Socket.IO
- **Validation**: Zod
- **Authentication**: Passport.js + JWT

### Infrastructure
- **Monorepo**: pnpm workspaces
- **Containerization**: Docker + Docker Compose
- **CI/CD**: GitHub Actions
- **Hosting**: Railway / Render

## Directory Structure

```
nexus-board/
├── apps/
│   ├── frontend/              # Next.js application
│   │   ├── src/
│   │   │   ├── app/          # App Router pages and layouts
│   │   │   │   ├── api/      # API routes (NextAuth)
│   │   │   │   └── globals.css
│   │   │   ├── components/   # React components
│   │   │   │   └── ui/       # shadcn/ui components
│   │   │   ├── lib/          # Utilities and configurations
│   │   │   │   ├── auth.ts   # NextAuth configuration
│   │   │   │   └── utils.ts  # Utility functions
│   │   │   └── store/        # Zustand stores
│   │   ├── public/           # Static assets
│   │   └── [config files]    # next.config.js, tsconfig.json, etc.
│   │
│   └── backend/              # NestJS application
│       ├── src/
│       │   ├── auth/         # Authentication module
│       │   │   ├── auth.controller.ts
│       │   │   ├── auth.service.ts
│       │   │   ├── auth.module.ts
│       │   │   └── jwt.strategy.ts
│       │   ├── users/        # Users module
│       │   │   ├── users.controller.ts
│       │   │   ├── users.service.ts
│       │   │   └── users.module.ts
│       │   ├── websocket/    # WebSocket module
│       │   │   ├── events.gateway.ts
│       │   │   └── websocket.module.ts
│       │   ├── prisma/       # Prisma module
│       │   │   ├── prisma.service.ts
│       │   │   └── prisma.module.ts
│       │   ├── app.module.ts # Root module
│       │   └── main.ts       # Application entry point
│       ├── prisma/           # Database schema
│       │   └── schema.prisma
│       └── [config files]    # nest-cli.json, tsconfig.json, etc.
│
├── packages/                 # Shared packages (optional)
├── scripts/                  # Utility scripts
├── .github/workflows/        # CI/CD pipelines
├── docker-compose.yml        # Docker orchestration
├── pnpm-workspace.yaml       # pnpm workspace config
└── package.json              # Root package.json
```

## Data Model

### Database Schema

```prisma
User
├── id: String (CUID)
├── email: String (unique)
├── name: String?
├── password: String (hashed)
├── boards: Board[]
├── tasks: Task[]
├── comments: Comment[]
├── createdAt: DateTime
└── updatedAt: DateTime

Board
├── id: String (CUID)
├── title: String
├── description: String?
├── owner: User
├── tasks: Task[]
├── createdAt: DateTime
└── updatedAt: DateTime

Task
├── id: String (CUID)
├── title: String
├── description: String?
├── status: String (todo/in-progress/done)
├── priority: String (low/medium/high)
├── board: Board
├── assignee: User?
├── comments: Comment[]
├── createdAt: DateTime
└── updatedAt: DateTime

Comment
├── id: String (CUID)
├── content: String
├── task: Task
├── author: User
├── createdAt: DateTime
└── updatedAt: DateTime
```

## API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user

### Users
- `GET /users` - Get all users (authenticated)

### Health Check
- `GET /health` - API health check
- `GET /` - API root

## Real-time Communication

### WebSocket Events

**Client → Server**
- `joinBoard(boardId)` - Join a board room
- `leaveBoard(boardId)` - Leave a board room
- `message(data)` - Send a message

**Server → Client**
- `joinedBoard(boardId)` - Confirmation of joining
- `leftBoard(boardId)` - Confirmation of leaving
- `message(data)` - Receive a message
- Custom events for board updates

## Authentication Flow

1. **Registration/Login**
   - Client sends credentials to `/auth/login` or `/auth/register`
   - Server validates and returns JWT token + user data
   - Client stores token in Zustand store

2. **API Requests**
   - Client includes JWT in Authorization header
   - Server validates JWT using Passport.js
   - Request proceeds if valid

3. **NextAuth Session**
   - NextAuth manages session on frontend
   - Syncs with backend JWT for API calls

## State Management

### Client State (Zustand)
- User authentication state
- UI state (modals, sidebars, etc.)
- Temporary form data

### Server State (React Query)
- API data fetching
- Caching and revalidation
- Optimistic updates
- Pagination and infinite queries

## Caching Strategy

### Redis Usage
1. **Session Storage** - User sessions and tokens
2. **WebSocket Scaling** - Socket.IO Redis adapter for multi-instance support
3. **API Response Caching** - Frequently accessed data
4. **Rate Limiting** - API rate limit tracking

## Security Considerations

1. **Authentication**
   - JWT tokens with expiration
   - Bcrypt password hashing (10 rounds)
   - Secure session management

2. **Authorization**
   - Role-based access control (planned)
   - Resource ownership validation

3. **Data Validation**
   - Zod schemas for input validation
   - Prisma type safety
   - XSS protection via sanitization

4. **CORS**
   - Configured for specific origins
   - Credential support enabled

## Deployment Architecture

### Development
```
Docker Compose
├── PostgreSQL (port 5432)
├── Redis (port 6379)
├── Backend (port 3001)
└── Frontend (port 3000)
```

### Production
```
Cloud Platform (Railway/Render)
├── Frontend (Next.js)
├── Backend (NestJS)
├── PostgreSQL (Managed)
└── Redis (Managed)
```

## Scalability Considerations

1. **Horizontal Scaling**
   - Stateless API design
   - Redis for shared state
   - Socket.IO Redis adapter for WebSocket scaling

2. **Database**
   - Connection pooling via Prisma
   - Indexed queries
   - Migration strategy

3. **Caching**
   - Redis caching layer
   - React Query client-side caching
   - CDN for static assets

## Monitoring and Observability

1. **Health Checks**
   - `/health` endpoint for uptime monitoring
   - Database connection validation
   - Redis connection validation

2. **Logging**
   - Structured logging with NestJS logger
   - Request/response logging
   - Error tracking

3. **Metrics** (To be implemented)
   - API response times
   - Database query performance
   - WebSocket connection metrics

## Development Workflow

1. **Local Development**
   ```bash
   pnpm install          # Install dependencies
   pnpm docker:dev       # Start services
   pnpm prisma:migrate   # Run migrations
   pnpm dev              # Start dev servers
   ```

2. **Code Quality**
   ```bash
   pnpm lint             # Lint all packages
   pnpm type-check       # TypeScript checks
   pnpm test             # Run tests
   ```

3. **Building**
   ```bash
   pnpm build            # Build all packages
   ```

## Future Enhancements

1. **Features**
   - File attachments
   - Real-time notifications
   - Team management
   - Activity logs
   - Search functionality

2. **Technical**
   - GraphQL API option
   - E2E testing with Playwright
   - Microservices architecture
   - Message queue (RabbitMQ/Kafka)
   - Kubernetes deployment

3. **Observability**
   - OpenTelemetry integration
   - APM (Application Performance Monitoring)
   - Distributed tracing
   - Custom dashboards

## Contributing

See the main README.md for contribution guidelines.

## License

MIT License - see LICENSE file for details.
