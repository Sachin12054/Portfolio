# Portfolio

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Overview

This project is a modern portfolio site with reusable UI components, project showcases, category filtering, and contact/about sections.

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- shadcn/ui (Radix-based UI primitives)
- React Router DOM
- TanStack Query

## Prerequisites

- Node.js 18 or newer
- npm 9 or newer

## Local Development

1. Install dependencies:

```sh
npm install
```

2. Start the development server:

```sh
npm run dev
```

3. Open the local URL shown in the terminal (usually http://localhost:8080).

## Available Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` creates a production build in `dist/`
- `npm run build:dev` creates a development-mode build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## Project Structure

```text
.
├── public/
├── src/
│   ├── components/        # Page sections and shared UI
│   ├── constants/         # Static constants (categories, etc.)
│   ├── data/              # Portfolio project data
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility helpers
│   ├── pages/             # Route-level pages
│   ├── styles/            # Styling constants
│   └── types/             # TypeScript types
├── index.html
├── vite.config.ts
└── tailwind.config.ts
```

## Build and Deployment

### Production Build

```sh
npm run build
```

The production files are generated in `dist/`.

### Vercel Deployment

This repo includes `vercel.json` configured for Vite:

- Build command: `npm run build`
- Output directory: `dist`

Deploy via Vercel CLI:

```sh
vercel --prod
```

## Customization Guide

- Update portfolio entries in `src/data/projects.ts`
- Update category definitions in `src/constants/categories.ts`
- Edit section content in components under `src/components/`
- Update global styles in `src/index.css` and `src/App.css`

## Linting

Run lint checks before pushing changes:

```sh
npm run lint
```

## License

This project is for personal portfolio use.
