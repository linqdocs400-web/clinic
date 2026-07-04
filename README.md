# Siri & Koushik's Skin Hair STD Clinic

Marketing website for the dermatology clinic in Dilsukhnagar, Hyderabad.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion & Embla Carousel

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

This project is a static Vite SPA and deploys to Vercel with zero configuration.

### Option 1: Vercel Dashboard (recommended)

1. Push this repo to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite. Confirm these settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**.

No environment variables are required.

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. For production:

```bash
vercel --prod
```

## Scripts

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start dev server on port 3000    |
| `npm run build`     | Production build to `dist/`      |
| `npm run preview`   | Preview production build locally |
| `npm run typecheck` | Run TypeScript checks            |
| `npm run lint`      | Run ESLint                       |
| `npm run format`    | Format code with Prettier        |
