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

## Markdown for Agents ✅

**Implemented:** Vercel Edge Middleware (`middleware.ts`)

When a request includes `Accept: text/markdown`, the middleware:
1. Fetches the HTML content
2. Converts it to markdown
3. Returns with `Content-Type: text/markdown; charset=utf-8`

**Test:**
```bash
curl -H "Accept: text/markdown" https://mavoradigital.my/
```

**Files:**
- `middleware.ts` - Edge middleware for markdown conversion

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