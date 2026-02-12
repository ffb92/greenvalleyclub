# Repository Guidelines

## Project Structure & Module Organization
This repository is centered on the frontend app in `app/`.
- `app/src/sections/`: page sections (for example `Hero.tsx`, `Pricing.tsx`, `FAQ.tsx`).
- `app/src/components/ui/`: shared UI primitives (shadcn/Radix-based components).
- `app/src/hooks/`: reusable React hooks.
- `app/src/lib/`: utilities (for example `utils.ts`).
- `app/public/images/`: static assets.
Top-level docs like `tech-spec.md` describe intended architecture and design direction.

## Build, Test, and Development Commands
Run commands from `app/`:
- `npm install`: install dependencies.
- `npm run dev`: start Vite dev server with HMR.
- `npm run build`: type-check and create production build (`tsc -b && vite build`).
- `npm run preview`: serve the built app locally.
- `npm run lint`: run ESLint across TypeScript/React files.

## Coding Style & Naming Conventions
- Language: TypeScript + React functional components.
- Indentation: 2 spaces; keep imports grouped and sorted logically.
- Components/hooks: `PascalCase` for components (`Team.tsx`), `camelCase` with `use` prefix for hooks (`use-mobile.ts`).
- Utility files: lowercase names in `src/lib/`.
- Styling: Tailwind utility classes in JSX; shared theme/config in `tailwind.config.js`.
- Linting: follow rules in `app/eslint.config.js` (`typescript-eslint`, `react-hooks`, `react-refresh`).

## Testing Guidelines
No test framework is currently configured in `app/package.json`. When adding tests, prefer Vitest + React Testing Library and place files as `*.test.ts(x)` near source files or under `app/src/__tests__/`. Prioritize coverage for section rendering, interaction behavior, and utility logic.

## Commit & Pull Request Guidelines
Git history is minimal (`start`), so use clear, imperative commit messages moving forward.
- Suggested format: `feat: add timeline animation`, `fix: correct mobile nav spacing`.
- Keep commits focused and small.
PRs should include:
- concise summary of what changed and why,
- linked issue/task when available,
- screenshots or short recordings for UI changes,
- confirmation that `npm run lint` and `npm run build` pass.

## Security & Configuration Tips
- Do not commit secrets; use `.env` files (ignored by git) for environment-specific values.
- Optimize large assets before committing to `app/public/images/`.
