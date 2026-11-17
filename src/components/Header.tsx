import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { TranslationSchema } from '../i18n/translations';
import { Language, PageRoute } from '../types';
import { routePath } from '../routing';

interface HeaderProps {
  t: TranslationSchema;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

const LANGUAGES: Array<{ code: Language; label: string }> = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'fa', label: 'دری' },
];

export function Header({
  t,
  language,
  onLanguageChange,
  currentPage,
  onNavigate,
  onOpenQuoteModal,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: Array<{ id: PageRoute; label: string }> = [
    { id: 'home', label: t.nav.home },
    { id: 'products', label: t.nav.products },
    { id: 'logistics', label: t.nav.logistics },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand Lockup (single clean line with mix-blend-multiply logo) */}
        <a
          href={routePath(language, 'home')}
          onClick={(event) => { event.preventDefault(); handleNavClick('home'); }}
          className="flex items-center gap-2.5 text-start shrink-0 whitespace-nowrap rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16426B]"
        >
          <img
            src={ASSETS.logoEmblem}
            alt={t.brandName}
            referrerPolicy="no-referrer"
            className="h-10 w-10 object-contain mix-blend-multiply shrink-0"
          />
          <span className="font-display text-base sm:text-lg font-bold tracking-tight text-[#16426B] whitespace-nowrap">
            {t.brandName}
          </span>
        </a>

        {/* Zone 2: Clean Single-Line Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <a key={item.id} href={routePath(language, item.id)} onClick={(event) => { event.preventDefault(); handleNavClick(item.id); }}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16426B] rounded ${
                  isActive
                    ? 'text-[#16426B] font-semibold'
                    : 'text-[#475569] hover:text-[#16426B]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-[#F28C00]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Switcher + Primary Action */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <div
            className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200/80 shrink-0"
            role="group"
            aria-label="Language selector"
          >
            {LANGUAGES.map((lang) => {
              const active = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => onLanguageChange(lang.code)}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16426B] ${
                    active
                      ? 'bg-[#16426B] text-white shadow-xs'
                      : 'text-[#475569] hover:text-[#16426B]'
                  }`}
                >
                  {lang.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 min-h-[40px] text-sm font-semibold rounded-lg bg-[#F28C00] hover:bg-[#D97706] text-[#0B1E33] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16426B] focus-visible:ring-offset-2"
          >
            {t.nav.requestQuote}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#16426B] hover:bg-slate-100 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16426B]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <a href={routePath(language, item.id)} onClick={(event) => { event.preventDefault(); handleNavClick(item.id); }}
                className={`w-full text-start px-3 py-2.5 min-h-[44px] rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#16426B]/8 text-[#16426B] font-semibold'
                    : 'text-[#475569] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full px-4 py-2.5 min-h-[44px] text-sm font-semibold rounded-lg bg-[#F28C00] hover:bg-[#D97706] text-[#0B1E33] transition-colors"
            >
              {t.nav.requestQuote}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
