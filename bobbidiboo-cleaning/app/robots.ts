import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = process.env.SITE_BASE_URL || 'https://www.bobbidiboocleaning.com';
  return {
    rules: [{ userAgent: '*' }],
    sitemap: `${base.replace(/\/$/, '')}/sitemap.xml`
  };
}

