## Portfolio Mailer Server (SMTP)

This server receives contact form submissions from the React app and sends them to your inbox via SMTP (Gmail/Outlook).

### 1) Setup

1. Copy env file:
   - `server/.env.example` → `server/.env`

2. Fill these values in `server/.env`:
   - `TO_EMAIL` = where you want to receive messages
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`
   - `SMTP_USER`, `SMTP_PASS`

### Gmail (recommended)

- Turn on 2‑step verification on your Google account.
- Create an **App Password** (Google Account → Security → App passwords).
- Put that app password into `SMTP_PASS`.

### Outlook / Microsoft 365

- Use:
  - `SMTP_HOST=smtp.office365.com`
  - `SMTP_PORT=587`
  - `SMTP_SECURE=false`
- Use your account email as `SMTP_USER` and your password (or app password if required) as `SMTP_PASS`.

### 2) Run locally

In one terminal:
- `cd server`
- `npm install`
- `npm run dev`

In another terminal:
- `cd client`
- `npm run dev`

The client uses a dev proxy so `/api/contact` goes to `http://localhost:3001/api/contact`.

### 3) Deploy

If you deploy the server separately, set in `client/.env`:
- `VITE_CONTACT_API_URL=https://your-server-domain.com/api/contact`

