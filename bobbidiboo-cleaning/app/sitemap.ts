import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.SITE_BASE_URL || 'https://www.bobbidiboocleaning.com').replace(/\/$/, '');
  const routes = ['', '/residential', '/commercial', '/industrial', '/contact'];
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r || '/'}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: r === '' ? 1 : 0.7
  }));
}

