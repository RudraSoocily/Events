# Hapenin — Entertainment Marketplace MVP

A responsive Next.js 15, PostgreSQL, Prisma and NextAuth credentials marketplace starter for pan-India talent discovery and booking inquiries.

## Local setup

1. Install Node.js 20+ and PostgreSQL.
2. Run `npm install`.
3. Copy `.env.example` to `.env`; configure `DATABASE_URL`, `NEXTAUTH_SECRET` (strong random secret), and `NEXTAUTH_URL` (site origin).
4. Run `npm run db:push`, then `npm run dev`.
5. To create an admin, provision a user with the ADMIN role securely via a trusted database administration process; public registration cannot create admin accounts.

## Implemented

- Responsive landing page and performer search by city and category.
- Registration/login with bcrypt-hashed passwords and signed JWT sessions.
- Customer, artist, organizer and admin dashboards (organizer is placeholder).
- Artist listing submission and admin approval.
- Booking inquiries, quotes, artist confirmation and status changes.
- PostgreSQL schema for users, listings, bookings, events and tickets (event/ticket models preparatory).

## Not implemented

- Payment collection, refunds, escrow, commission accounting or settlements.
- Ticket purchases, event publishing, QR entry and organizer event management.
- Email, SMS, WhatsApp, KYC, media uploads, availability calendar.
- Production safeguards: email verification, password reset, admin MFA, throttling, monitoring, audit logs, backup, consent flows and tested booking concurrency.

**Important:** A confirmed inquiry is NOT a paid or guaranteed reservation. Artists can confirm quotes without customer acceptance in this prototype.

## Vercel deployment

Connect this repository to a Vercel Next.js project. Provision a managed PostgreSQL database, configure `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL` in Vercel's encrypted environment variables. Apply Prisma schema to the database with `npx prisma db push` for a prototype; use reviewed migrations before production. Build command is `npm run build` (includes `prisma generate`).

Do not add real user data or accept payments before security and transactional workflows are hardened.
