# SoulConnect — Basic Astrology Relationship Starter App

This is a small frontend-only Next.js 16 TypeScript app focused on gentle, emotion-first UX. It provides simple zodiac-based relationship insights and a lightweight SoulMatch compatibility view.

Quick start (Windows PowerShell):

```powershell
cd d:\SoulConnect
npm install
npm run dev
```

Pages:
- `/` — Landing
- `/onboarding` — Onboarding form
- `/dashboard` — Personalized dashboard (expects `name` and `dob` query params)
- `/soulmatch` — Partner compatibility checker

Notes:
- No backend or AI is used. All state is passed via query params between pages for this demo.
- Tailwind CSS is configured in `tailwind.config.cjs` and styles are in `styles/globals.css`.
