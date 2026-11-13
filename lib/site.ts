/**
 * The public address of the deployed site, used for canonical links, the
 * sitemap, robots and social-card metadata.
 *
 * Set NEXT_PUBLIC_SITE_URL (e.g. https://your-domain.com) in your hosting
 * dashboard. On Vercel the production domain is picked up automatically.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
  "http://localhost:3000"
).replace(/\/$/, "");
