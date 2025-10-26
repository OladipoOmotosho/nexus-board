#!/bin/bash

# Nexus Board - Development Setup Verification Script

echo "🔍 Nexus Board Setup Verification"
echo "=================================="
echo ""

# Check Node.js version
echo "📦 Checking Node.js version..."
node_version=$(node -v)
echo "   Node.js: $node_version"

# Check pnpm version
echo "📦 Checking pnpm version..."
pnpm_version=$(pnpm -v)
echo "   pnpm: $pnpm_version"

# Check if dependencies are installed
echo ""
echo "📦 Checking dependencies..."
if [ -d "node_modules" ]; then
    echo "   ✅ Root dependencies installed"
else
    echo "   ❌ Root dependencies not installed"
    echo "   Run: pnpm install"
    exit 1
fi

if [ -d "apps/frontend/node_modules" ]; then
    echo "   ✅ Frontend dependencies installed"
else
    echo "   ❌ Frontend dependencies not installed"
fi

if [ -d "apps/backend/node_modules" ]; then
    echo "   ✅ Backend dependencies installed"
else
    echo "   ❌ Backend dependencies not installed"
fi

# Check Prisma Client
echo ""
echo "🔧 Checking Prisma Client..."
if [ -d "node_modules/.pnpm/@prisma+client"* ]; then
    echo "   ✅ Prisma Client generated"
else
    echo "   ⚠️  Prisma Client not generated"
    echo "   Run: cd apps/backend && pnpm prisma generate"
fi

# Try building
echo ""
echo "🏗️  Testing builds..."
echo "   Building frontend..."
cd apps/frontend && pnpm build > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "   ✅ Frontend builds successfully"
else
    echo "   ❌ Frontend build failed"
    exit 1
fi

cd ../..
echo "   Building backend..."
cd apps/backend && pnpm build > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "   ✅ Backend builds successfully"
else
    echo "   ❌ Backend build failed"
    exit 1
fi

cd ../..

# Check environment files
echo ""
echo "📝 Checking environment configuration..."
if [ -f "apps/frontend/.env.local" ] || [ -f "apps/frontend/.env" ]; then
    echo "   ✅ Frontend environment configured"
else
    echo "   ⚠️  Frontend environment not configured"
    echo "   Copy apps/frontend/.env.example to apps/frontend/.env.local"
fi

if [ -f "apps/backend/.env" ]; then
    echo "   ✅ Backend environment configured"
else
    echo "   ⚠️  Backend environment not configured"
    echo "   Copy apps/backend/.env.example to apps/backend/.env"
fi

echo ""
echo "=================================="
echo "✅ Setup verification complete!"
echo ""
echo "Next steps:"
echo "1. Configure environment variables (see .env.example files)"
echo "2. Start PostgreSQL and Redis (or use Docker: pnpm docker:dev)"
echo "3. Run database migrations: pnpm prisma:migrate"
echo "4. Start development: pnpm dev"
echo ""
