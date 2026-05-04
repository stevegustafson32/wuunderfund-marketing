# WuunderFund

## Overview

WuunderFund is an employee retention platform powered by employer-matched travel savings. The application serves as a waitlist landing page targeting three personas: employers, employees, and partners (payroll providers, benefits brokers, PEOs, HR consultants, and travel partners). The platform positions itself as "the benefit that pays for itself" by helping companies reduce turnover through travel savings incentives.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with custom design system (Cobalt Blue primary, Soft Purple accent, Soft Ivory background)
- **UI Components**: shadcn/ui component library (New York style variant) with Radix UI primitives
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Fonts**: Inter (body text) and Outfit (headings) via Google Fonts

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Build Tool**: Vite for frontend, esbuild for server bundling

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Tables**: Users table and waitlist_entries table for capturing leads

### Project Structure
- `client/` - React frontend application
- `server/` - Express backend with API routes
- `shared/` - Shared types and database schema
- `migrations/` - Drizzle database migrations

### Key Design Decisions
1. **Monorepo Structure**: Client and server share types through `shared/` directory, ensuring type safety across the stack
2. **Persona-Based UI**: The homepage dynamically changes content based on selected persona (employer/employee/partner)
3. **Component Architecture**: Sections are modular components in `client/src/components/sections/`
4. **Path Aliases**: `@/` maps to client source, `@shared/` maps to shared code

## External Dependencies

### Database
- PostgreSQL via `DATABASE_URL` environment variable
- Connection pooling through node-postgres (`pg`)
- Session storage via `connect-pg-simple`

### UI/Component Libraries
- Radix UI primitives (dialogs, dropdowns, forms, etc.)
- Lucide React for icons
- Embla Carousel for carousels
- class-variance-authority for component variants

### Build & Development
- Vite with React plugin
- Tailwind CSS v4 with `@tailwindcss/vite` plugin
- Custom Replit plugins for development (cartographer, dev-banner, runtime-error-modal)

### Form Handling
- React Hook Form with `@hookform/resolvers`
- Zod for validation schemas