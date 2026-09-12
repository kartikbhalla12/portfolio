This is a [Next.js](https://nextjs.org/) App Router portfolio with an embedded [Sanity](https://www.sanity.io/) Studio at `/studio`.

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Without Sanity env vars the site still renders from local fallback copy.

The homepage lives at `src/app/page.tsx`.

## Sanity CMS

1. Log in: `npx sanity login`
2. Create a free project (dataset `production`) in [sanity.io/manage](https://www.sanity.io/manage) or with `npx sanity projects create`
3. Add the values to `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-01
SANITY_API_WRITE_TOKEN=yourWriteToken
```

4. Create a token with Editor access at `https://www.sanity.io/manage/personal/project/<id>/api`
5. Seed today's copy and images: `npm run seed:sanity`
6. Open [http://localhost:3000/studio](http://localhost:3000/studio) to edit published content

Published queries use `revalidate: 60` plus cache tags (`sanity`, `home`, `settings`, `skills`, `experience`, `projects`). The resume stays at `/public/kartik-bhalla-resume.pdf`.

To add a skill, create a **Skill** document in Studio and upload an SVG or PNG icon. No code change is required. Turn on **Fill mode** for monochrome logos that should follow the light/dark theme.

Header nav lives in **Header**. Social icons live in **Footer** (sidebar uses the same list). To add a social link, edit **Footer → Social links**: name, URL (`https://…` or `mailto:…`), sidebar icon, and optional footer icon.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out the [Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
