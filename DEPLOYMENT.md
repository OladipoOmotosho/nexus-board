# Deployment Guide

## Railway Deployment

### Backend Deployment

1. Install Railway CLI:
   ```bash
   npm i -g @railway/cli
   ```

2. Login to Railway:
   ```bash
   railway login
   ```

3. Initialize Railway project:
   ```bash
   railway init
   ```

4. Add PostgreSQL service:
   ```bash
   railway add --service postgresql
   ```

5. Add Redis service:
   ```bash
   railway add --service redis
   ```

6. Set environment variables:
   ```bash
   railway variables set JWT_SECRET=your-secret-here
   railway variables set FRONTEND_URL=https://your-frontend.railway.app
   ```

7. Deploy backend:
   ```bash
   cd apps/backend
   railway up
   ```

### Frontend Deployment

1. Create new Railway service for frontend
2. Set environment variables:
   ```bash
   railway variables set NEXT_PUBLIC_API_URL=https://your-backend.railway.app
   railway variables set NEXT_PUBLIC_WS_URL=https://your-backend.railway.app
   railway variables set NEXTAUTH_URL=https://your-frontend.railway.app
   railway variables set NEXTAUTH_SECRET=your-nextauth-secret
   ```

3. Deploy frontend:
   ```bash
   cd apps/frontend
   railway up
   ```

## Render Deployment

### Backend Deployment

1. Go to Render Dashboard
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: nexus-backend
   - **Root Directory**: apps/backend
   - **Build Command**: `pnpm install && pnpm prisma generate && pnpm build`
   - **Start Command**: `pnpm start:prod`

5. Add PostgreSQL database:
   - Click "New +" and select "PostgreSQL"
   - Connect to your web service

6. Add Redis:
   - Click "New +" and select "Redis"
   - Connect to your web service

7. Set environment variables in Render dashboard:
   - `DATABASE_URL` (auto-filled by Render)
   - `JWT_SECRET`
   - `FRONTEND_URL`
   - `REDIS_HOST` (auto-filled by Render)
   - `REDIS_PORT` (auto-filled by Render)

### Frontend Deployment

1. Click "New +" and select "Web Service"
2. Connect your GitHub repository
3. Configure:
   - **Name**: nexus-frontend
   - **Root Directory**: apps/frontend
   - **Build Command**: `pnpm install && pnpm build`
   - **Start Command**: `pnpm start`

4. Set environment variables:
   - `NEXT_PUBLIC_API_URL` (your backend URL)
   - `NEXT_PUBLIC_WS_URL` (your backend URL)
   - `NEXTAUTH_URL` (your frontend URL)
   - `NEXTAUTH_SECRET`

## Environment Variables Checklist

### Backend Required Variables
- [ ] `DATABASE_URL` - PostgreSQL connection string
- [ ] `JWT_SECRET` - Secret for JWT tokens
- [ ] `FRONTEND_URL` - Frontend URL for CORS
- [ ] `REDIS_HOST` - Redis hostname
- [ ] `REDIS_PORT` - Redis port

### Frontend Required Variables
- [ ] `NEXT_PUBLIC_API_URL` - Backend API URL
- [ ] `NEXT_PUBLIC_WS_URL` - WebSocket server URL
- [ ] `NEXTAUTH_URL` - Your frontend URL
- [ ] `NEXTAUTH_SECRET` - Secret for NextAuth

## Post-Deployment

1. Run database migrations:
   ```bash
   cd apps/backend
   pnpm prisma migrate deploy
   ```

2. Verify health check:
   - Backend: `https://your-backend-url/health`
   - Frontend: `https://your-frontend-url`

3. Test WebSocket connection
4. Test authentication flow
