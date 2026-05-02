# Izzat Farhan Portfolio

A modern React portfolio for an Electrical & Automation Engineer focused on AI Automation, IT-OT integration, industrial systems, and intelligent workflow automation.

The site is built with React, Vite, Tailwind CSS, and Framer Motion. Content is data-driven through a single JSON file so the portfolio can be updated without changing UI components.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Project Structure

```text
src/
├── assets/             Static source assets
├── components/         Reusable UI components
├── constants/          Navigation and shared constants
├── data/               Portfolio content JSON
├── pages/              Page-level composition
├── sections/           Homepage sections
├── utils/              Shared helpers and animation config
├── App.jsx             Main app shell
├── main.jsx            React entry point
└── styles.css          Global theme and design-system styles
```

Project media such as screenshots and videos should be stored in:

```text
public/media/projects/
```

## Main Content File

Most portfolio content lives in:

```text
src/data/portfolio.json
```

This file controls:

- Hero content
- About section
- Skills
- Projects
- Experience
- Certifications
- Contact links

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173/
```

## Build For Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Add A New Project

Add a new item inside the `projects` array in `src/data/portfolio.json`:

```json
{
  "title": "New Project Title",
  "summary": "Short description of what the project does.",
  "impact": "Clear outcome, improvement, award, or value created.",
  "stack": ["Python", "n8n", "LLM APIs"],
  "media": {
    "type": "image",
    "src": "/media/projects/new-project/screenshot.png",
    "alt": "New project screenshot"
  },
  "githubUrl": "https://github.com/your-username/new-project",
  "demoUrl": "#new-project-demo"
}
```

Then place the image or video in:

```text
public/media/projects/new-project/
```

For video media, use:

```json
"media": {
  "type": "video",
  "src": "/media/projects/new-project/demo.mp4",
  "poster": "/media/projects/new-project/poster.png",
  "alt": "New project demo video"
}
```

## Design System

The visual direction is documented in:

```text
DESIGN_SYSTEM.md
```

Codename: `CIRCUIT BLUEPRINT`

The design uses a warm engineering-paper background, copper amber accents, electric teal highlights, monospaced technical labels, and schematic-inspired UI patterns.

## Deployment

This project is configured for GitHub Pages deployment using the `gh-pages` package.

Build the production site:

```bash
npm run build
```

Deploy the `dist` folder to the `gh-pages` branch:

```bash
npm run deploy
```

For GitHub Pages, make sure the repository settings use:

```text
Settings -> Pages -> Source: Deploy from a branch
Branch: gh-pages
Folder: /root
```

The Vite base path is configured in `vite.config.js`:

```js
base: "/izzat-portfolio/"
```

This is required because the site is served from:

```text
https://izzatfarhan.github.io/izzat-portfolio/
```

## Future Improvements

- Add a blog page for AI automation and engineering notes
- Add individual project case study pages
- Add a downloadable resume file
- Add light/dark theme switching
- Move content to Markdown or a CMS
- Add filtering for project categories
