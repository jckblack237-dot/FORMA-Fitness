# FORMA Fitness — Version 1.0 starter

A responsive Midnight Minimal Next.js / TypeScript app with five-tab navigation, a daily briefing preview, manual meal and workout logging, weight check-ins, recovery notes, a coach chat mock, and JSON data export.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What works

- Responsive Home, Coach, Nutrition, Train, Progress navigation
- Manual meal tracking with calories and protein
- Workout session logs
- Weight check-ins and history
- Recovery note journal and visible movement restrictions
- Local browser persistence via localStorage and JSON export

## What is NOT implemented yet

This is a **development starter**, not the complete Version 1.0 product. The coach uses a static placeholder response, not AI. There is no AI food-photo recognition, live voice, authentication, Supabase/cloud synchronization, encrypted cloud backup, biometric login, wearable integration, or advanced AI reporting yet. Data lives **only in the current browser** and can be lost if browser data is cleared. Do not use it for sensitive medical records or private progress photos.

## Next milestones

1. Supabase schema, row-level security, allowlisted authentication, server-side secrets and cloud sync.
2. AI coaching API and structured nutrition estimation with user correction.
3. Adaptive workouts with explicit clinician-clearance gates.
4. Voice coaching and cost metering / spending caps.
5. Advanced reports, photo storage, backups, PWA offline sync, tests and deployment.

## Privacy and safety

Keep the GitHub repository free of credentials and user data. Exercise restrictions are shown as guardrails; the prototype does not prescribe or approve rehabilitation exercises.
