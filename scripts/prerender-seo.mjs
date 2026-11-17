import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const SITE_URL = 'https://www.export-eur.com';
const DIST = path.resolve('dist');
const routes = [
  ['/', 'en'], ['/products/', 'en'], ['/logistics/', 'en'],
  ['/ru/', 'ru'], ['/ru/products/', 'ru'], ['/ru/logistics/', 'ru'],
  ['/fa-af/', 'fa'], ['/fa-af/products/', 'fa'], ['/fa-af/logistics/', 'fa'],
];

function replaceInside(html, opening, closing, replacement) {
  const start = html.indexOf(opening);
  const end = html.indexOf(closing, start + opening.length);
  if (start < 0 || end < 0) throw new Error('Expected HTML marker not found: ' + opening);
  return html.slice(0, start + opening.length) + replacement + html.slice(end);
}

function escapeHtml(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
}

function updateMeta(html, attribute, key, value) {
  const marker = '<meta ' + attribute + '="' + key + '"';
  const start = html.indexOf(marker);
  const tag = '<meta ' + attribute + '="' + key + '" content="' + escapeHtml(value) + '" />';
  if (start < 0) return html.replace('</head>', '  ' + tag + '\n  </head>');
  const end = html.indexOf('/>', start);
  if (end < 0) throw new Error('Malformed meta tag: ' + marker);
  return html.slice(0, start) + tag + html.slice(end + 2);
}

function localizedPath(language, page) {
  const prefix = language === 'ru' ? '/ru' : language === 'fa' ? '/fa-af' : '';
  if (page === 'home') return prefix ? prefix + '/' : '/';
  return prefix + '/' + page + '/';
}

try {
  const template = await readFile(path.join(DIST, 'index.html'), 'utf8');
  const manifest = JSON.parse(await readFile(path.join(DIST, '.vite/manifest.json'), 'utf8'));
  const vite = await createServer({
    configFile: path.resolve('vite.config.ts'),
    mode: 'production',
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
  });

  try {
    const [{ default: App }, { TRANSLATIONS }, { ASSETS, CONTACT_INFO }] = await Promise.all([
      vite.ssrLoadModule('/src/App.tsx'),
      vite.ssrLoadModule('/src/i18n/translations.ts'),
      vite.ssrLoadModule('/src/data/assets.ts'),
    ]);
    const assetPath = (source) => {
      const filename = path.basename(source);
      const entry = Object.values(manifest).find((item) => item.src && item.src.endsWith(filename));
      if (!entry || !entry.file) throw new Error('Built asset missing from manifest: ' + filename);
      return '/' + entry.file;
    };

    for (const [pathname, language] of routes) {
      const page = pathname === '/' || pathname === '/ru/' || pathname === '/fa-af/'
        ? 'home'
        : pathname.includes('products') ? 'products' : 'logistics';
      const t = TRANSLATIONS[language];
      const pageTitle = page === 'home' ? t.hero.headline : page === 'products' ? t.productsPage.title : t.logisticsPage.title;
      const description = page === 'home' ? t.hero.subheadline : page === 'products' ? t.productsPage.subtitle : t.logisticsPage.subtitle;
      const title = pageTitle + ' | LLC Eurasia Technology';
      const canonical = SITE_URL + localizedPath(language, page);
      const markup = renderToString(createElement(App, { initialPath: pathname }));
      const renderedMarkup = Object.values(ASSETS).reduce(
        (html, source) => html.replaceAll(source, assetPath(source)),
        markup,
      );
      const alternates = [
        ['en', localizedPath('en', page)],
        ['ru', localizedPath('ru', page)],
        ['fa-AF', localizedPath('fa', page)],
        ['x-default', localizedPath('en', page)],
      ];
      const localeLinks = alternates.map(([locale, url]) =>
        '<link rel="alternate" hreflang="' + locale + '" href="' + SITE_URL + url + '" data-seo-hreflang="true" />',
      ).join('\n    ');

      let html = template.replace(
        '<html lang="en">',
        '<html lang="' + (language === 'fa' ? 'fa-AF' : language) + '" dir="' + t.dir + '">',
      );
      html = replaceInside(html, '<title>', '</title>', escapeHtml(title));
      html = replaceInside(html, '<div id="root">', '</div>', renderedMarkup);
      html = updateMeta(html, 'name', 'description', description);
      html = updateMeta(html, 'property', 'og:title', title);
      html = updateMeta(html, 'property', 'og:description', description);
      html = updateMeta(html, 'property', 'og:url', canonical);
      html = updateMeta(html, 'property', 'og:locale', language === 'fa' ? 'fa_AF' : language === 'ru' ? 'ru_RU' : 'en_US');
      html = updateMeta(html, 'property', 'og:image', SITE_URL + assetPath(ASSETS.heroLogistics));
      html = updateMeta(html, 'name', 'twitter:title', title);
      html = updateMeta(html, 'name', 'twitter:description', description);
      html = updateMeta(html, 'name', 'twitter:image', SITE_URL + assetPath(ASSETS.heroLogistics));
      const canonicalStart = html.indexOf('<link rel="canonical"');
      const canonicalEnd = html.indexOf('/>', canonicalStart);
      if (canonicalStart < 0 || canonicalEnd < 0) throw new Error('Canonical link missing in HTML template');
      html = html.slice(0, canonicalStart) + '<link rel="canonical" href="' + canonical + '" />' + html.slice(canonicalEnd + 2);
      html = html.split('\n').filter((line) => !line.includes('data-seo-hreflang="true"')).join('\n');
      html = html.replace('</head>', '    ' + localeLinks + '\n  </head>');

      const organization = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'LLC Eurasia Technology',
        alternateName: 'ООО «Евразия Технолоджи»',
        url: SITE_URL,
        email: CONTACT_INFO.email,
        telephone: CONTACT_INFO.phoneHref.replace('tel:', ''),
        taxID: '1800048733',
        identifier: { '@type': 'PropertyValue', propertyID: 'OGRN', value: '1261800003365' },
        contactPoint: [
          { '@type': 'ContactPoint', telephone: CONTACT_INFO.phoneHref.replace('tel:', ''), contactType: 'sales', availableLanguage: ['en', 'ru', 'fa-AF'] },
          { '@type': 'ContactPoint', telephone: CONTACT_INFO.additionalPhoneHref.replace('tel:', ''), contactType: 'sales', availableLanguage: ['en', 'ru', 'fa-AF'] },
        ],
        logo: SITE_URL + assetPath(ASSETS.logoEmblem),
      };
      const safeJson = JSON.stringify(organization).replaceAll('<', '\\u003c');
      html = html.replace('</head>', '    <script id="organization-jsonld" type="application/ld+json">' + safeJson + '</script>\n  </head>');

      const relative = pathname.split('/').filter(Boolean);
      const outputPath = relative.length
        ? path.join(DIST, ...relative, 'index.html')
        : path.join(DIST, 'index.html');
      await mkdir(path.dirname(outputPath), { recursive: true });
      await writeFile(outputPath, html, 'utf8');
    }
  } finally {
    await vite.close();
  }
} catch (error) {
  console.error('SEO prerender failed:', error);
  process.exitCode = 1;
}
