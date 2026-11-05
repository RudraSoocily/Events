# Hapenin

Pan-India entertainment talent booking marketplace MVP, built with Next.js, Prisma and NextAuth.

## Setup

Install dependencies with `npm install`. Configure `DATABASE_URL`, `NEXTAUTH_SECRET`, and `NEXTAUTH_URL` from `.env.example`. Run `npx prisma db push`, then `npm run dev`.

## Scope

Artist discovery, account registration/login, listing moderation, booking inquiries and role dashboards. No payments, tickets, notifications, identity verification, or escrow. Production requires managed PostgreSQL, email verification, rate limiting and operational security review.
