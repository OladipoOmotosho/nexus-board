# Nexus Board

A modern full-stack team collaboration platform built with cutting-edge technologies.

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Zustand** - Lightweight state management
- **React Query** - Server state management
- **Auth.js (NextAuth)** - Authentication solution

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe backend development
- **Prisma ORM** - Type-safe database access
- **PostgreSQL** - Robust relational database
- **Socket.IO** - Real-time bidirectional communication
- **Zod** - Schema validation

### Infrastructure
- **Docker & Docker Compose** - Containerization
- **Redis** - WebSocket scaling and caching
- **GitHub Actions** - CI/CD pipeline
- **Railway/Render** - Cloud hosting platforms

## 📋 Prerequisites

- Node.js 18+ 
- pnpm 8+
- Docker and Docker Compose (for local development)
- PostgreSQL (if not using Docker)
- Redis (if not using Docker)

## 🛠️ Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/OladipoOmotosho/nexus-board.git
   cd nexus-board
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   For the frontend:
   ```bash
   cp apps/frontend/.env.example apps/frontend/.env.local
   ```
   
   For the backend:
   ```bash
   cp apps/backend/.env.example apps/backend/.env
   ```
   
   Update the values in both `.env` files as needed.

4. **Start the development environment with Docker**
   ```bash
   pnpm docker:dev
   ```
   
   This will start:
   - PostgreSQL on port 5432
   - Redis on port 6379
   - Backend API on port 3001
   - Frontend on port 3000

### Alternative: Manual Setup (without Docker)

1. **Start PostgreSQL and Redis locally**

2. **Set up the database**
   ```bash
   cd apps/backend
   pnpm prisma generate
   pnpm prisma migrate dev
   ```

3. **Start the backend**
   ```bash
   cd apps/backend
   pnpm dev
   ```

4. **Start the frontend** (in a new terminal)
   ```bash
   cd apps/frontend
   pnpm dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - API Health Check: http://localhost:3001/health

## 📁 Project Structure

```
nexus-board/
├── apps/
│   ├── frontend/          # Next.js application
│   │   ├── src/
│   │   │   ├── app/       # App Router pages
│   │   │   ├── components/# React components
│   │   │   ├── lib/       # Utilities and helpers
│   │   │   └── store/     # Zustand stores
│   │   └── public/        # Static assets
│   │
│   └── backend/           # NestJS application
│       ├── src/
│       │   ├── auth/      # Authentication module
│       │   ├── users/     # Users module
│       │   ├── websocket/ # Socket.IO gateway
│       │   └── prisma/    # Prisma service
│       └── prisma/        # Database schema
│
├── packages/              # Shared packages (optional)
├── .github/
│   └── workflows/         # CI/CD pipelines
├── docker-compose.yml     # Docker orchestration
├── pnpm-workspace.yaml    # pnpm workspace config
└── package.json           # Root package.json
```

## 🧪 Development

### Available Scripts

From the root directory:

- `pnpm dev` - Start both frontend and backend in development mode
- `pnpm build` - Build both applications
- `pnpm lint` - Lint all packages
- `pnpm test` - Run tests for all packages
- `pnpm docker:dev` - Start development environment with Docker
- `pnpm docker:down` - Stop Docker containers

### Database Commands

```bash
# Generate Prisma Client
pnpm prisma:generate

# Create and apply migrations
pnpm prisma:migrate

# Open Prisma Studio
cd apps/backend && pnpm prisma:studio
```

## 🔒 Authentication

The application uses Auth.js (NextAuth) for authentication on the frontend and JWT-based authentication on the backend. 

To register a new user, send a POST request to `/auth/register` with:
```json
{
  "email": "user@example.com",
  "password": "yourpassword",
  "name": "Your Name"
}
```

## 🔌 WebSocket/Real-time Features

Socket.IO is configured for real-time features. Connect to the WebSocket server at `http://localhost:3001`:

- `joinBoard` - Join a board room
- `leaveBoard` - Leave a board room
- `message` - Send a message

## 🚢 Deployment

### Using Railway

1. Install Railway CLI
2. Link your project: `railway link`
3. Deploy: `railway up`

### Using Render

1. Connect your GitHub repository to Render
2. Configure environment variables
3. Deploy from the Render dashboard

### Environment Variables for Production

Make sure to set these in your hosting platform:

**Backend:**
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT
- `REDIS_HOST` - Redis host
- `REDIS_PORT` - Redis port
- `FRONTEND_URL` - Frontend URL for CORS

**Frontend:**
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXT_PUBLIC_WS_URL` - WebSocket URL
- `NEXTAUTH_URL` - Your frontend URL
- `NEXTAUTH_SECRET` - Secret for NextAuth

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern best practices
- Inspired by leading collaboration platforms
- Powered by open-source technologies
