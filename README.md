# UniqGro — Build Companies. Not Alone.

Production-oriented Vite + React + TypeScript website for UniqGro, a founder-first startup growth ecosystem built in India for idea-stage and early-stage founders.

## Stack
- Vite, React, TypeScript
- React Router
- Tailwind CSS + custom editorial CSS system
- Framer Motion
- Supabase adapter for applications/forum
- Zod validation
- Vitest
- GitHub Pages workflow

## Local setup
```bash
npm install
cp .env.example .env
npm run dev
```

## Environment variables
See `.env.example`. Never commit private service-role keys. The Supabase anonymous key is client-side only and must be protected by correct Row Level Security.

## Supabase setup
1. Create a Supabase project.
2. Run `supabase/migrations/001_init.sql` in the SQL editor or via the Supabase CLI.
3. Optionally run `supabase/seed.sql`.
4. Enable email magic-link or OTP authentication.
5. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
6. Review every RLS policy before production. Founder applications are never publicly readable.
7. Production moderation must use secure server-side/admin workflows. Do not rely only on client-side hiding.
8. Add rate limiting / abuse prevention for application, posting, commenting and reporting flows.

Without Supabase credentials, the site remains fully viewable in demo mode. Forum reads local demo data and application submission returns a demo/configuration state.

## Founder photo
The supplied photo is stored at `public/images/gourav-saini-founder.jpg`. Replace it with a higher-resolution approved portrait using the same filename to avoid changing code.

## Editing content
Core company copy lives in `src/content/site.ts`. Resource cards live in `src/data/resources.ts`. Forum demo data lives in `src/data/forum.ts`.

## Run checks
```bash
npm run lint
npm run test
npm run build
```

## GitHub Pages deployment
The workflow is `.github/workflows/deploy.yml` and deploys `dist/` from `main`.

Before connecting the domain:
1. Push to a new repository such as `uniqgro-website`.
2. Enable **Settings → Pages → Source: GitHub Actions**.
3. Verify the GitHub Pages preview completely.
4. Only then connect `www.uniqgro.com`.

`public/CNAME` already contains `www.uniqgro.com`.

### Custom domain DNS
For `www`, create a CNAME to your GitHub Pages user domain, e.g. `YOUR-USERNAME.github.io`.
For the apex/root domain, follow GitHub Pages' current documented DNS instructions. Do not switch DNS until the preview passes testing.

## Router refresh fallback
`public/404.html` redirects direct route requests back into the SPA. Test direct refreshes on every route after deployment.

## Rollback
Revert the last Git commit or redeploy the previous known-good commit. Keep the existing Google Site active until this build is verified.

## Privacy / launch safety
- Do not collect production founder data until privacy copy and Supabase RLS are reviewed.
- Do not make the forum writable before authentication, reporting and moderation are working.
- Do not publish private phone numbers in source.
- Legal pages are placeholders and require professional review.

## Launch checklist / TODO
- Configure contact email, WhatsApp and verified social URLs.
- Add final privacy policy and terms after legal review.
- Configure Supabase auth and email templates.
- Build secure moderation/admin workflow.
- Add final Open Graph image.
- Replace any demo forum content before public launch.
- Confirm exact commercial copy and application response-time expectation.
- Run Lighthouse on mobile and desktop after deployment.
- Test 320, 375, 390, 430, 768, 1024, 1440 and 1920 widths.
- Test keyboard-only navigation, 200% zoom and reduced-motion mode.
