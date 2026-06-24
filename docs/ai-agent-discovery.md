# AI Agent Discovery Setup

This document covers the AI agent discovery features implemented for Mavora Digital.

## Implemented Features

### 1. Link Headers (RFC 8288) ✅

Link headers are now served on all pages via `vercel.json`:

```
Link: </.well-known/agent-catalog>; rel="api-catalog", </sitemap.xml>; rel="sitemap", </robots.txt>; rel="robots"
```

**Files:**
- `vercel.json` - Contains header configuration
- `public/.well-known/agent-catalog` - Agent catalog JSON

**Verification:**
```bash
curl -I https://mavoradigital.my/
# Look for Link header in response
```

### 2. Agent Catalog ✅

The agent catalog is available at:
- `https://mavoradigital.my/.well-known/agent-catalog`

Contains:
- Site metadata
- Available endpoints (sitemap, robots.txt)
- Service descriptions

### 3. Sitemap & Robots.txt ✅

- Sitemap: `https://mavoradigital.my/sitemap.xml`
- Robots.txt: `https://mavoradigital.my/robots.txt`

## DNS-AID Records (Requires DNS Configuration)

DNS for AI Discovery (DNS-AID) requires adding DNS records through your DNS provider.

### Required DNS Records

Add the following SVCB/HTTPS records to your DNS zone for `mavoradigital.my`:

```dns
; Index service discovery
_index._agents.mavoradigital.my. IN SVCB 1 . alpn="https" endpoint="https://mavoradigital.my/"

; A2A (Agent-to-Agent) service discovery  
_a2a._agents.mavoradigital.my. IN SVCB 1 . alpn="https" endpoint="https://mavoradigital.my/.well-known/agent-catalog"
```

### How to Add DNS Records

1. Log in to your DNS provider (Cloudflare, Route53, etc.)
2. Navigate to DNS management for `mavoradigital.my`
3. Add the SVCB records above
4. Enable DNSSEC signing on your zone

### DNSSEC Signing

For validating resolvers to return authenticated data:
1. Generate DNSSEC keys (or use your provider's auto-DNSSEC)
2. Publish DS records at your registrar
3. Verify with: `dig +dnssec mavoradigital.my`

## Markdown for Agents

To enable `Accept: text/markdown` responses:

### Option A: Vercel Edge Middleware

Create `middleware.ts`:

```typescript
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') || '';
  if (accept.includes('text/markdown')) {
    // Handle markdown conversion
    // Note: Requires serverless function or edge function
  }
}
```

### Option B: Cloudflare (if using Cloudflare Pages/Workers)

Enable Cloudflare's "Markdown for Agents" feature in your dashboard.

### Current Status

⚠️ **Not implemented** - Requires serverless functions or edge middleware. The static site serves HTML only.

## Testing Agent Readiness

1. **Is It Agent Ready Checker**: https://isitagentready.com/
2. **Manual Header Check**:
   ```bash
   curl -I https://mavoradigital.my/ | grep -i link
   ```

## References

- RFC 8288 (Web Linking): https://www.rfc-editor.org/rfc/rfc8288
- DNS-AID Draft: https://datatracker.ietf.org/doc/draft-mozleywilliams-dnsop-dnsaid/
- SVCB/HTTPS Records: https://www.rfc-editor.org/rfc/rfc9460
- Cloudflare Markdown for Agents: https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/