# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- **Development server**: `npm run dev` - Starts Vite dev server with hot reload
- **Build**: `npm run build` - Creates production build using Vite
- **Lint**: `npm run lint` - Runs ESLint on all TypeScript/React files
- **Preview**: `npm run preview` - Preview production build locally

## Architecture Overview

This is a React + TypeScript + Vite + Tailwind CSS single-page application for a hippie/earth-conscious lifestyle website called "HippiStuff".

### Key Technologies
- **React 18** with TypeScript for UI components and type safety
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **Lucide React** for consistent iconography
- **ESLint** with TypeScript and React hooks rules

### Application Structure
- Single-page application with smooth scrolling navigation
- Responsive design with mobile-first approach
- Uses gradient backgrounds and glassmorphism effects
- Heavy use of Tailwind utility classes for styling

### Main Component (`src/App.tsx`)
The entire application is contained in a single large component with these sections:
- Navigation with mobile menu
- Hero section with call-to-action buttons
- Content hub with tabbed interface
- Community platform section
- Educational resources
- Newsletter signup
- Footer with social links

### Styling Patterns
- Consistent use of green/emerald color scheme
- Glassmorphism with `backdrop-blur-sm` and semi-transparent backgrounds
- Rounded corners (`rounded-2xl`, `rounded-full`)
- Hover effects with `transform hover:scale-105` and `transition-all`
- Gradient backgrounds using `bg-gradient-to-*` classes

### State Management
Uses React's built-in useState for:
- Mobile menu toggle
- Scroll position tracking
- Email input for newsletter
- Active tab selection

The application emphasizes peaceful, earth-conscious aesthetics with nature-inspired icons and soft color transitions.