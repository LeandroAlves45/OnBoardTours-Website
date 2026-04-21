# On Nautic Tour Website

A premium, responsive website for On Nautic Tour, designed to showcase private and shared Douro River experiences in Porto. The project is built with React, Vite, Tailwind CSS, and Motion, with a strong focus on elegant visual presentation, smooth interactions, and conversion-oriented calls to action.

## Overview

This website presents the main customer journey for a boat tour business:

- Immersive hero section with booking-oriented calls to action
- Private and shared tour cards with interactive carousel behavior
- Process section explaining how the experience works
- Review and platform-rating sections for social proof
- Contact section with direct action buttons
- Floating WhatsApp access for quick enquiries
- Responsive navigation with mobile menu support
- Scroll reveal animations across key sections

The original visual direction comes from a Figma-generated code bundle, then refined into a production-ready React/Vite project.

## Tech Stack

- **React 18**
- **Vite 6**
- **TypeScript**
- **Tailwind CSS 4**
- **Motion** for transitions and scroll reveal animations
- **Lucide React** for icons
- **Radix UI / shadcn-style components** available under `src/app/components/ui`

## Project Structure

```text
.
|-- public/
|-- src/
|   |-- app/
|   |   |-- components/
|   |   |   |-- Contact.tsx
|   |   |   |-- Experience.tsx
|   |   |   |-- FloatingWhatsApp.tsx
|   |   |   |-- Footer.tsx
|   |   |   |-- Hero.tsx
|   |   |   |-- Navigation.tsx
|   |   |   |-- Reviews.tsx
|   |   |   |-- Tours.tsx
|   |   |   `-- ui/
|   |   `-- App.tsx
|   `-- styles/
|       `-- fonts.css
|-- index.html
|-- package.json
|-- package-lock.json
|-- postcss.config.mjs
`-- vite.config.ts
```

## Getting Started

### Prerequisites

Use a recent Node.js version. Node 18 or newer is recommended.

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Vite will start the local development server and print the local URL in the terminal.

### Production Build

```bash
npm run build
```

The optimized production files are generated in the `dist/` directory.

## Main Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

## Key Components

### `Hero.tsx`

Main landing section with the primary brand message and tour discovery call to action.

### `Tours.tsx`

Tour listing section with private/shared tabs, carousel navigation, animated cards, and detailed tour modal.

### `Experience.tsx`

Explains the booking and boarding flow with animated steps and a route-style visual panel.

### `Reviews.tsx`

Displays review highlights and platform ratings with scroll reveal animations.

### `Contact.tsx`

Final conversion section with location, opening hours, email, WhatsApp, maps, and booking actions.

### `Navigation.tsx`

Fixed responsive navigation with smooth section scrolling and animated mobile menu.

## Styling Notes

The project uses a highly customized visual style with:

- Dark nautical gradients
- Cyan and gold accent colors
- Premium editorial typography
- Card-based interaction states
- Motion-based reveal transitions
- Responsive layouts for mobile, tablet, and desktop

Global font styles are managed in:

```text
src/styles/fonts.css
```

## Deployment

This project can be deployed to any static hosting platform that supports Vite builds, such as:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

Typical deployment settings:

```text
Build command: npm run build
Output directory: dist
```

## Git Notes

The `.gitignore` is configured to exclude generated and local-only files such as:

- `node_modules/`
- `dist/`
- `.env`
- local editor folders
- cache and test output

Keep `package-lock.json` committed to ensure consistent dependency installs.

## Attribution

This project began as a Figma code export for the On Nautic Tour website concept and was adapted into a React/Vite implementation.
