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
const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

function updateMeta(html, attribute, key, value) {
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`;
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*\\/?>`);
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace('</head>', `  ${tag}\\n  </head>`);
}

function localizedPath(language, page) {
  const prefix = language === 'ru' ? '/ru' : language === 'fa' ? '/fa-af' : '';
  if (page === 'home') return prefix ? `${prefix}/` : '/';
  return `${prefix}/${page}/`;
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
      const entry = Object.values(manifest).find((item) => item.src?.endsWith(filename));
      if (!entry?.file) throw new Error(`Built asset missing from manifest: ${filename}`);
      return `/${entry.file}`;
    };

    for (const [pathname, language] of routes) {
      const route = pathname === '/' ? 'home' : pathname.includes('products') ? 'products' : pathname.includes('logistics') ? 'logistics' : 'home';
      const t = TRANSLATIONS[language];
      const pageTitle = route === 'home' ? t.hero.headline : route === 'products' ? t.productsPage.title : t.logisticsPage.title;
      const description = route === 'home' ? t.hero.subheadline : route === 'products' ? t.productsPage.subtitle : t.logisticsPage.subtitle;
      const title = `${pageTitle} | LLC Eurasia Technology`;
      const canonical = `${SITE_URL}${localizedPath(language, route)}`;
      const markup = renderToString(createElement(App, { initialPath: pathname }));
      const renderedMarkup = Object.values(ASSETS).reduce(
        (html, source) => html.replaceAll(path.basename(source), path.basename(assetPath(source))),
        markup,
      );
      const localeLinks = [
        ['en', localizedPath('en', route)],
        ['ru', localizedPath('ru', route)],
        ['fa-AF', localizedPath('fa', route)],
        ['x-default', localizedPath('en', route)],
      ].map(([locale, url]) => `<link rel="alternate" hreflang="${locale}" href="${SITE_URL}${url}" data-seo-hreflang="true" />`).join('\\n    ');
      let html = template
        .replace(/<html lang="[^"]*">/, `<html lang="${language === 'fa' ? 'fa-AF' : language}" dir="${t.dir}">`)
        .replace(/<title>[^<]*<\\/title>/, `<title>${escapeHtml(title)}</title>`)
        .replace(/<div id="root"><\\/div>/, `<div id="root">${renderedMarkup}</div>`);
      html = updateMeta(html, 'name', 'description', description);
      html = updateMeta(html, 'property', 'og:title', title);
      html = updateMeta(html, 'property', 'og:description', description);
      html = updateMeta(html, 'property', 'og:url', canonical);
      html = updateMeta(html, 'property', 'og:locale', language === 'fa' ? 'fa_AF' : language === 'ru' ? 'ru_RU' : 'en_US');
      html = updateMeta(html, 'property', 'og:image', `${SITE_URL}${assetPath(ASSETS.heroLogistics)}`);
      html = updateMeta(html, 'name', 'twitter:title', title);
      html = updateMeta(html, 'name', 'twitter:description', description);
      html = updateMeta(html, 'name', 'twitter:image', `${SITE_URL}${assetPath(ASSETS.heroLogistics)}`);
      html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);
      html = html.replace(/\\s*<link rel="alternate" hreflang="[^"]+" href="[^"]*" data-seo-hreflang="true" \/>/g, '');
      html = html.replace('</head>', `    ${localeLinks}\\n  </head>`);

      const logo = `${SITE_URL}${assetPath(ASSETS.logoEmblem)}`;
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
        logo,
      };
      const safeJson = JSON.stringify(organization).replaceAll('<', '\\u003c');
      html = html.replace('</head>', `    <script id="organization-jsonld" type="application/ld+json">${safeJson}</script>\\n  </head>`);

      const relative = pathname.replace(/^\\/+|\\/+$/g, '');
      const outputPath = relative ? path.join(DIST, relative, 'index.html') : path.join(DIST, 'index.html');
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
