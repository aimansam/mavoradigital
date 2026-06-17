# Deployment Guide — Mavora Labs Website

> **Stack:** Astro 5 · static output · React + Three.js · pnpm

---

## ✅ Option A — Cloudflare Pages (Recommended)

Fastest for Malaysian visitors (edge nodes in KL + Singapore), free tier, auto-deploy on push.

### 1. Push to GitHub

Push the `products/mavora-labs/website/` folder to its own GitHub repo:

```bash
cd products/mavora-labs/website
git init
git remote add origin https://github.com/YOUR_ORG/mavora-labs-website.git
git add .
git commit -m "initial"
git push -u origin main
```

### 2. Connect to Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. **Create a project** → Connect to Git → select the repo
3. Set build configuration:

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `pnpm install && pnpm build` |
| Build output directory | `dist` |
| Node.js version | `22` |

4. Under **Environment variables**, add:

| Variable | Value |
|---|---|
| `PUBLIC_WHATSAPP_NUMBER` | `60123456789` ← your number |

5. Click **Save and Deploy**.

### 3. Connect custom domain

1. Cloudflare Pages → your project → **Custom domains**
2. Add `mavoralabs.com`
3. Cloudflare auto-provisions SSL — done in ~2 minutes

### 4. Every future deploy

Just `git push`. Cloudflare rebuilds and deploys automatically.

---

## Option B — VPS + Docker (nginx)

Use this if you want a self-hosted VPS (Contabo, DigitalOcean, Hetzner).

### Prerequisites

- VPS running Ubuntu 22.04+
- Docker + Docker Compose installed
- Domain DNS A record pointing to VPS IP

### 1. Clone / copy the project to VPS

```bash
scp -r ./products/mavora-labs/website user@YOUR_VPS_IP:/app/website
# or clone from GitHub
ssh user@YOUR_VPS_IP
cd /app/website
```

### 2. Create .env

```bash
cp .env.example .env
nano .env
# Set: PUBLIC_WHATSAPP_NUMBER=60123456789
```

### 3. Build and run

```bash
# Build the production image and start
PUBLIC_WHATSAPP_NUMBER=60123456789 docker compose -f compose.prod.yaml up -d --build
```

This builds the static site and serves it via nginx on port 80.

### 4. HTTPS with Certbot (recommended)

Install nginx + Certbot on the host, or use a Cloudflare proxy in front of the VPS for free SSL:

```bash
# Using Cloudflare proxy (simplest):
# Set DNS A record → VPS IP, with Cloudflare proxy (orange cloud) enabled
# Cloudflare handles SSL termination — VPS runs HTTP on port 80
```

### 5. Redeploy after changes

```bash
git pull
PUBLIC_WHATSAPP_NUMBER=60123456789 docker compose -f compose.prod.yaml up -d --build
```

---

## Build scripts reference

| Command | What it does |
|---|---|
| `pnpm build` | Build static site → `dist/` |
| `pnpm check` | TypeScript + Astro type check |
| `pnpm dev` | Local dev server (port 4321) |
| `pnpm preview` | Preview production build locally |

---

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `PUBLIC_WHATSAPP_NUMBER` | Yes (for form) | WhatsApp number in international format, no `+` sign. Example: `60123456789` |

---

## Notes

- `PUBLIC_WHATSAPP_NUMBER` is baked into the static build at build time (Astro `import.meta.env`). If you change it, you must **rebuild and redeploy**.
- The `dist/` folder is 100% static HTML/CSS/JS — no server-side runtime needed.
- `_astro/` assets are content-hashed and cached for 1 year by nginx.
