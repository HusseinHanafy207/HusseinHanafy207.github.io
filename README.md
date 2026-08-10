# Hussein Hamouda — Personal Website

Light portfolio for research, projects, education, and experience.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Static export (GitHub Pages / any static host)

## Content

Edit `src/content/site.ts` to update copy, links, and project write-ups.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static files are written to `out/`.

## Deploy (GitHub Pages)

1. Push this repo to GitHub.
2. Enable Pages from the `out` folder (or use an Action that runs `npm run build` and publishes `out`).
3. If the site is served from `https://<user>.github.io/<repo>/`, set `basePath` and `assetPrefix` in `next.config.ts` to `/<repo>`.
