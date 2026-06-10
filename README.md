# Immigration Consultancy Static Website

A modern, accessible, and fast static website built with **Astro** and designed for deployment to **GitHub Pages**.

## Prerequisites

- **Node.js** (v18.14.1 or higher recommended)
- **npm** (v9.0.0 or higher recommended)

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   This will start a local server, usually at `http://localhost:4321`.

3. **Build for Production (GitHub Pages)**:
   ```bash
   npm run build
   ```
   This will generate static HTML/CSS/JS files in the `dist/` directory.

4. **Preview the Build**:
   ```bash
   npm run preview
   ```

## Folder Structure

- `public/` - Static assets (logos, images, robots.txt)
- `src/components/` - Reusable Astro UI components
- `src/layouts/` - Page layouts (`BaseLayout.astro`, `ServiceLayout.astro`)
- `src/pages/` - Site routing and page templates
- `src/data/` - Config and JSON database files for content
- `src/styles/` - Global styling (`global.css`)

## GitHub Pages Deployment

The project is configured for automated deployment to GitHub Pages via GitHub Actions:
- The workflow configuration is located in [.github/workflows/deploy.yml](file:///.github/workflows/deploy.yml).
- It runs on pushes to `main` or `master`.
- It dynamically reads the repository's origin and base paths to handle username pages (e.g. `username.github.io`) or project sites (e.g. `username.github.io/project-name`) seamlessly.
- An empty `.nojekyll` file is located in `public/.nojekyll` to disable Jekyll processing on GitHub Pages, ensuring static assets load correctly.

