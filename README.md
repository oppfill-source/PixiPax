# Pixipax Cleaning Services – Next.js Site

## Local Setup
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel
1. Create a new GitHub repo (e.g., `pixipax-site`) and push this folder.
2. Go to https://vercel.com → New Project → Import your repo → Deploy.
3. In Project → Settings → **Domains**, add `pixipax.com`.
4. Copy the DNS records Vercel shows.
5. Go to **GoDaddy → Domain → DNS** and update A/CNAME per Vercel.
6. HTTPS is automatic.

## Notes
- TailwindCSS is already configured (see `tailwind.config.ts` and `app/globals.css`).
- Forms are front‑end only. Connect to Jobber, Square, Launch27, or your own API for production.
