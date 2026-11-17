import { Mail, MessageSquare, Phone } from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../data/assets';
import { TranslationSchema } from '../i18n/translations';
import { Language, PageRoute } from '../types';

interface FooterProps {
  t: TranslationSchema;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (page: PageRoute) => void;
}

export function Footer({
  t,
  language,
  onLanguageChange,
  onNavigate,
}: FooterProps) {
  const whatsappUrl = `${CONTACT_INFO.whatsappBase}?text=${encodeURIComponent(t.whatsappDefaultMsg)}`;

  return (
    <footer className="bg-[#0F2C47] text-slate-300 border-t border-[#16426B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-lg shrink-0">
                <img
                  src={ASSETS.logoEmblem}
                  alt={t.brandName}
                  referrerPolicy="no-referrer"
                  className="h-8 w-8 object-contain mix-blend-multiply"
                />
              </div>
              <div>
                <div className="font-display text-base font-bold text-white">
                  {t.brandName}
                </div>
                <div className="text-xs text-slate-300">{t.brandLegal}</div>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold text-white">
              {t.footer.navTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.products}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('logistics')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.logistics}
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold text-white">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#F28C00] shrink-0" aria-hidden="true" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-mono-tabular"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4 text-[#F28C00] shrink-0" aria-hidden="true" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.additionalPhoneHref}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-mono-tabular"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4 text-[#F28C00] shrink-0" aria-hidden="true" />
                  <span>{CONTACT_INFO.additionalPhoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#F28C00] hover:text-amber-300 font-medium transition-colors"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{t.hero.secondaryCta}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Corridors & Language Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-display text-sm font-semibold text-white">
                {t.footer.corridorsTitle}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.footer.corridorsSummary}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              {(
                [
                  { code: 'en', label: 'EN' },
                  { code: 'ru', label: 'RU' },
                  { code: 'fa', label: 'دری' },
                ] as const
              ).map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => onLanguageChange(item.code)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    language === item.code
                      ? 'bg-[#F28C00] text-[#0B1E33]'
                      : 'bg-white/10 text-slate-200 hover:bg-white/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-xs text-slate-400">
          <div className="space-y-2">
            <p>{t.footer.copyright}</p>
            <p dir="ltr">
              ИНН: 1800048733 · КПП: 180001001 · ОГРН: 1261800003365
            </p>
          </div>
          <p className="sm:text-end">{t.footer.jurisdiction}</p>
        </div>
      </div>
    </footer>
  );
}
