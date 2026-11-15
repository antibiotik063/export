import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { QuoteModal } from './components/QuoteModal';
import { TRANSLATIONS } from './i18n/translations';
import { HomePage } from './pages/HomePage';
import { LogisticsPage } from './pages/LogisticsPage';
import { ProductsPage } from './pages/ProductsPage';
import { Language, PageRoute } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState('refined-sunflower-oil');

  const t = TRANSLATIONS[language];

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = t.langCode;
  }, [t.dir, t.langCode]);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (productId?: string) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    setQuoteModalOpen(true);
  };

  return (
    <div dir={t.dir} className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#475569]">
      <Header
        t={t}
        language={language}
        onLanguageChange={setLanguage}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            t={t}
            onNavigate={handleNavigate}
            onRequestQuote={handleOpenQuoteModal}
          />
        )}
        {currentPage === 'products' && (
          <ProductsPage
            t={t}
            onRequestQuote={handleOpenQuoteModal}
          />
        )}
        {currentPage === 'logistics' && <LogisticsPage t={t} />}
      </main>

      <Footer
        t={t}
        language={language}
        onLanguageChange={setLanguage}
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
