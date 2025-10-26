# Contributing to Nexus Board

Thank you for your interest in contributing to Nexus Board! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm 8 or higher
- Docker and Docker Compose (optional but recommended)
- Git

### Setup

1. Fork the repository on GitHub
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/nexus-board.git
   cd nexus-board
   ```

3. Add the upstream remote:
   ```bash
   git remote add upstream https://github.com/OladipoOmotosho/nexus-board.git
   ```

4. Install dependencies:
   ```bash
   pnpm install
   ```

5. Set up environment variables:
   ```bash
   cp apps/frontend/.env.example apps/frontend/.env.local
   cp apps/backend/.env.example apps/backend/.env
   ```

6. Generate Prisma Client:
   ```bash
   cd apps/backend
   pnpm prisma generate
   ```

7. Run the verification script:
   ```bash
   bash scripts/verify-setup.sh
   ```

## Development Workflow

### Starting Development

1. Start the development environment:
   ```bash
   # Using Docker (recommended)
   pnpm docker:dev

   # Or manually (requires PostgreSQL and Redis running)
   pnpm dev
   ```

2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes

4. Test your changes:
   ```bash
   pnpm lint
   pnpm build
   pnpm test
   ```

### Keeping Your Fork Updated

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Avoid `any` types when possible
- Use interfaces for object shapes
- Use type aliases for unions and complex types

### Frontend (Next.js)

- Use the App Router for routing
- Keep components small and focused
- Use React Server Components where appropriate
- Follow the shadcn/ui component patterns
- Use Tailwind CSS for styling
- Store client state in Zustand
- Use React Query for server state

### Backend (NestJS)

- Follow NestJS module structure
- Use DTOs for request/response validation
- Use Zod for schema validation
- Keep services thin and focused
- Use dependency injection
- Write meaningful error messages

### Code Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas
- Use semicolons
- Run `pnpm lint` before committing

### Naming Conventions

- **Files**: kebab-case (e.g., `user-service.ts`)
- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Functions/Variables**: camelCase (e.g., `getUserById`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_RETRIES`)
- **Interfaces**: PascalCase with descriptive names (e.g., `UserInterface`)
- **Types**: PascalCase ending with Type (e.g., `UserType`)

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```
feat(auth): add password reset functionality

Implement password reset flow with email verification
- Add reset token generation
- Create email template
- Update auth service

Closes #123
```

```
fix(frontend): resolve navigation menu mobile responsiveness

The navigation menu was not properly collapsing on mobile devices.
Updated breakpoints and added touch event handlers.
```

## Pull Request Process

1. **Update your branch** with the latest changes from main:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Test thoroughly**:
   ```bash
   pnpm lint
   pnpm build
   pnpm test
   ```

3. **Update documentation** if you've made changes to:
   - API endpoints
   - Configuration options
   - Environment variables
   - User-facing features

4. **Create a Pull Request**:
   - Use a clear, descriptive title
   - Reference any related issues
   - Describe what changes you made and why
   - Include screenshots for UI changes
   - List any breaking changes

5. **Respond to feedback**:
   - Address all review comments
   - Make requested changes
   - Re-request review after updates

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] All tests pass
- [ ] New tests added for new features
- [ ] Documentation updated
- [ ] No console errors or warnings
- [ ] Tested on different screen sizes (for frontend)
- [ ] Backward compatible or breaking changes documented

## Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests for specific package
pnpm --filter=frontend test
pnpm --filter=backend test

# Run tests in watch mode
pnpm --filter=frontend test:watch
```

### Writing Tests

- Write unit tests for utilities and services
- Write integration tests for API endpoints
- Write component tests for React components
- Aim for good coverage, but focus on critical paths

### Test Organization

```
src/
├── component/
│   ├── Button.tsx
│   └── Button.test.tsx
├── services/
│   ├── user.service.ts
│   └── user.service.spec.ts
```

## Documentation

### Code Comments

- Use JSDoc comments for functions and classes
- Explain "why" not "what"
- Keep comments up to date

### README Updates

Update the README when:
- Adding new features
- Changing setup instructions
- Updating dependencies
- Modifying configuration

### Architecture Documentation

Update `ARCHITECTURE.md` when:
- Adding new modules or services
- Changing data models
- Modifying system architecture
- Introducing new patterns

## Questions?

If you have questions:
1. Check existing issues and discussions
2. Review the documentation
3. Ask in a new issue with the "question" label

## Recognition

Contributors will be recognized in:
- GitHub contributors page
- Release notes for significant contributions

Thank you for contributing to Nexus Board! 🚀
