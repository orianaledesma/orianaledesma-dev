# orianaledesma.dev

![CI Status](https://github.com/orianaledesma/orianaledesma-dev/actions/workflows/deploy.yml/badge.svg)

Personal site and portfolio — Angular 19, Zafiro design system, deployed to Netlify.

**Stack:** Angular 19 · TypeScript strict · SCSS + CSS custom properties · EmailJS · GitHub Actions → Netlify

---

## Getting started

```bash
git clone https://github.com/orianaledesma/orianaledesma-dev.git
cd orianaledesma-dev
npm install
cp .env.example .env
# Fill in .env with your values (see Environment variables section below)
ng serve
```

Open `http://localhost:4200`. The dev toggle (top-right) lets you switch between copy variants.

---

## Environment variables

The contact form uses [EmailJS](https://emailjs.com) to send emails without a backend.
All three variables are required for the form to work.

| Variable | Where to find it |
|---|---|
| `EMAILJS_SERVICE_ID` | EmailJS dashboard → Email Services → your service ID |
| `EMAILJS_TEMPLATE_ID` | EmailJS dashboard → Email Templates → your template ID |
| `EMAILJS_PUBLIC_KEY` | EmailJS dashboard → Account → General → Public Key |

Set them in `.env` for local development. For production, they go in GitHub Secrets — **never in the repo**.

**EmailJS template variables** — your template must use these exact names:

| Template variable | Value |
|---|---|
| `{{from_name}}` | Sender's name |
| `{{reply_to}}` | Sender's email address |
| `{{message}}` | Message body |

---

## Running tests

```bash
# Single run (CI mode)
ng test --watch=false --browsers=ChromeHeadless

# Watch mode (development)
ng test

# With coverage report — output written to /coverage
ng test --watch=false --browsers=ChromeHeadless --code-coverage
```

Coverage target: 90%+. Tests cover `ContactService`, `ContactComponent` validation,
honeypot field, and rate limiting logic.

---

## Deploy

### Netlify setup

1. Connect this repo to Netlify
2. Build command: `ng build --configuration production`
3. Publish directory: `dist/orianaledesma-dev/browser`

### GitHub Secrets required

Go to **GitHub repo → Settings → Secrets and variables → Actions** and add:

| Secret | Value |
|---|---|
| `EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |
| `EMAILJS_PUBLIC_KEY` | Your EmailJS public key |
| `NETLIFY_AUTH_TOKEN` | Netlify → User settings → Personal access tokens |
| `NETLIFY_SITE_ID` | Netlify → Site settings → General → Site ID |

The CI pipeline (`.github/workflows/deploy.yml`) runs tests on every PR.
If any test fails, the deploy is blocked. On push to `main`, secrets are injected
into `environment.prod.ts` via `sed` before the production build.

---

## Project structure

```
src/
├── app/
│   ├── components/
│   │   ├── nav/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── work/
│   │   ├── about/
│   │   ├── process/
│   │   ├── testimonials/
│   │   ├── faq/
│   │   └── contact/
│   ├── models/
│   │   └── contact.model.ts
│   └── services/
│       └── contact.service.ts
├── environments/
│   ├── environment.ts         # Dev — empty values, safe to commit
│   └── environment.prod.ts    # Prod — NOT committed (.gitignore)
└── styles.scss                # Zafiro global theme tokens
```
