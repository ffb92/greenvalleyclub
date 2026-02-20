# Green Valley Club Frontend

Frontend application for the Green Valley Club website, built with React, TypeScript, and Vite.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Radix UI / shadcn-style UI components

## Project Location

All app code lives in `app/`.

## Prerequisites

- Node.js 20+ (recommended)
- npm 10+

## Install

Run from `app/`:

```bash
npm install
```

## Development

Run from `app/`:

```bash
npm run dev
```

This starts the Vite dev server with HMR.

## Build

Run from `app/`:

```bash
npm run build
```

This runs TypeScript build checks and creates a production build in `app/dist/`.

## Preview Production Build

Run from `app/`:

```bash
npm run preview
```

## Lint

Run from `app/`:

```bash
npm run lint
```

## Folder Structure

```text
app/
  src/
    sections/        # Page sections (Hero, FAQ, Pricing, etc.)
    components/ui/   # Shared UI primitives
    hooks/           # Reusable hooks
    lib/             # Utilities
  public/images/     # Static assets
```

## Lockfile Note

Use `app/package-lock.json` as the source of truth for dependencies.