import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { QuoteModal } from './components/QuoteModal';
import { TRANSLATIONS } from './i18n/translations';
import { HomePage } from './pages/HomePage';
import { LogisticsPage } from './pages/LogisticsPage';
import { ProductsPage } from './pages/ProductsPage';
import { routeFromPath, routePath } from './routing';
import { Language, PageRoute } from './types';
import { ASSETS, CONTACT_INFO } from './data/assets';

const SITE_URL = 'https://www.export-eur.com';

interface AppProps {
  initialPath?: string;
}

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function App({ initialPath }: AppProps) {
  const startPath = initialPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
  const initialRoute = routeFromPath(startPath);
  const [language, setLanguage] = useState<Language>(initialRoute.language);
  const [currentPage, setCurrentPage] = useState<PageRoute>(initialRoute.page);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState('refined-sunflower-oil');

  const t = TRANSLATIONS[language];

  useEffect(() => {
    const syncRoute = () => {
      const route = routeFromPath(window.location.pathname);
      setLanguage(route.language);
      setCurrentPage(route.page);
    };
    window.addEventListener('popstate', syncRoute);
    return () => window.removeEventListener('popstate', syncRoute);
  }, []);

  useEffect(() => {
    const pageTitle = currentPage === 'home'
      ? t.hero.headline
      : currentPage === 'products' ? t.productsPage.title : t.logisticsPage.title;
    const pageDescription = currentPage === 'home'
      ? t.hero.subheadline
      : currentPage === 'products' ? t.productsPage.subtitle : t.logisticsPage.subtitle;
    const title = `${pageTitle} | LLC Eurasia Technology`;
    const canonical = `${SITE_URL}${routePath(language, currentPage)}`;
    const languageCodes: Array<[Language, string]> = [['en', 'en'], ['ru', 'ru'], ['fa', 'fa-AF']];

    document.title = title;
    document.documentElement.lang = language === 'fa' ? 'fa-AF' : language;
    document.documentElement.dir = t.dir;
    setMeta('meta[name="description"]', 'name', 'description', pageDescription);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', pageDescription);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', language === 'fa' ? 'fa_AF' : language === 'ru' ? 'ru_RU' : 'en_US');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', pageDescription);

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    document.head.querySelectorAll('link[data-seo-hreflang]').forEach((link) => link.remove());
    for (const [locale, hreflang] of languageCodes) {
      const alternate = document.createElement('link');
      alternate.rel = 'alternate';
      alternate.hreflang = hreflang;
      alternate.href = `${SITE_URL}${routePath(locale, currentPage)}`;
      alternate.dataset.seoHreflang = 'true';
      document.head.appendChild(alternate);
    }
    const fallback = document.createElement('link');
    fallback.rel = 'alternate';
    fallback.hreflang = 'x-default';
    fallback.href = `${SITE_URL}${routePath('en', currentPage)}`;
    fallback.dataset.seoHreflang = 'true';
    document.head.appendChild(fallback);

    const organization = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'LLC Eurasia Technology',
      url: SITE_URL,
      email: CONTACT_INFO.email,
      telephone: CONTACT_INFO.phoneDisplay,
      contactPoint: [
        { '@type': 'ContactPoint', telephone: CONTACT_INFO.phoneHref.replace('tel:', ''), contactType: 'sales', availableLanguage: ['English', 'Russian', 'Dari'] },
        { '@type': 'ContactPoint', telephone: CONTACT_INFO.additionalPhoneHref.replace('tel:', ''), contactType: 'sales', availableLanguage: ['English', 'Russian', 'Dari'] },
      ],
      logo: new URL(ASSETS.logoEmblem, SITE_URL).href,
    };
    let jsonLd = document.head.querySelector<HTMLScriptElement>('#organization-jsonld');
    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.id = 'organization-jsonld';
      jsonLd.type = 'application/ld+json';
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(organization);
  }, [currentPage, language, t]);

  const handleNavigate = (page: PageRoute, nextLanguage: Language = language) => {
    window.history.pushState({}, '', routePath(nextLanguage, page));
    setLanguage(nextLanguage);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (productId?: string) => {
    if (productId) setSelectedProductId(productId);
    setQuoteModalOpen(true);
  };

  return (
    <div dir={t.dir} className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#475569]">
      <Header
        t={t}
        language={language}
        onLanguageChange={(nextLanguage) => handleNavigate(currentPage, nextLanguage)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      <main className="flex-1">
        {currentPage === 'home' && <HomePage t={t} onNavigate={handleNavigate} onRequestQuote={handleOpenQuoteModal} />}
        {currentPage === 'products' && <ProductsPage t={t} onRequestQuote={handleOpenQuoteModal} />}
        {currentPage === 'logistics' && <LogisticsPage t={t} />}
      </main>

      <Footer
        t={t}
        language={language}
        onLanguageChange={(nextLanguage) => handleNavigate(currentPage, nextLanguage)}
        onNavigate={handleNavigate}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        t={t}
        selectedProductId={selectedProductId}
      />
    </div>
  );
}
