# NAT ONE Properties — handover

This is an adaptation of the attached UltraMax 7 Pro static starter's visual and interaction principles, not a verbatim port of its seven pages. The 10 fictional listings and stock photos are demonstration content only, not verified South African property photographs or offers. Do not index before the client replaces the stock images and approves content. No real reviews or fabricated credentials are included.

## Shared listings activation
A dedicated Neon project and properties table were created. In Vercel Project Settings → Environment Variables, add DATABASE_URL from the dedicated Neon project's Connect dialog, and ADMIN_PASSWORD (choose a unique password of at least 16 characters). Use encrypted variables in Production and Preview; never commit them. Redeploy. The public API returns approved listings only. Owner access is available through the footer dashboard. Local demo is explicitly browser-only. Public contact details are private to admin. Add production rate limiting, image storage, audit log, and authenticated owner sessions/MFA before a broad launch. Do not use the example prices as valuation advice. The main website is deliberately noindex during review.

## QA
Check search, tabs, mobile layout, details, submission, admin sign-in, create, edit, approve, reject, delete, cross-device persistence, installation and offline fallback. The live client domain has not been configured.