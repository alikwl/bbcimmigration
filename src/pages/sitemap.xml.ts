import servicesData from '../data/services.json';
import { siteConfig } from '../data/site';

export async function GET() {
  const pages = [
    '',
    'services/',
    'immigration/',
    'about-us/',
    'contact-us/',
    'book-consultation/',
    'privacy-policy/',
    'terms-and-conditions/',
    'disclaimer/',
    'cookie-policy/',
    'accessibility/'
  ];

  servicesData.forEach(service => {
    pages.push(`services/${service.slug}/`);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${siteConfig.siteUrl}/${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : (page.startsWith('services/') && page !== 'services/') ? '0.8' : '0.5'}</priority>
  </url>`).join('').trim()}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
