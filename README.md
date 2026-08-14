# Aditi Sharma Digital Marketing Specialist

A Next.js (App Router, TypeScript, Tailwind CSS) website for Aditi Sharma Digital Marketing Specialist, built for deployment on Vercel.

## Pages

- `/` — Home
- `/about` — About
- `/blog` — Blog
- `/contact` — Contact

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy: GitHub to Vercel

1. Push this folder to a new GitHub repository (keep the folder structure exactly as is, including `app/`, `components/`, and the config files at the root).
2. Go to https://vercel.com and sign in (you can sign in directly with your GitHub account).
3. Click **Add New... -> Project**.
4. Select the GitHub repository you just created.
5. Vercel automatically detects this is a Next.js project. Leave the default build settings as they are.
6. Click **Deploy**.

Vercel will build and give you a live URL such as `your-project.vercel.app`. Every time you push a new commit to the `main` branch on GitHub, Vercel automatically rebuilds and redeploys the site.

## Notes

- Replace `hello@aditisharmadigitalmarketing.com` in `app/contact/page.tsx` if a different contact email should be used, and wire the form up to an email service or API route since it is currently a static form.
- To use a custom domain, add it under the project's Settings -> Domains in the Vercel dashboard.
