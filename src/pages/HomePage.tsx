import { ArrowRight, ArrowLeft, Mail, MessageSquare, Phone } from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../data/assets';
import { TranslationSchema } from '../i18n/translations';
import { PageRoute } from '../types';
import { QuoteForm } from '../components/QuoteForm';
import { ResilientImage } from '../components/ResilientImage';

interface HomePageProps {
  t: TranslationSchema;
  onNavigate: (page: PageRoute) => void;
  onRequestQuote: (productId?: string) => void;
}

const HOME_TO_FORM_ID: Record<string, string> = {
  'sunflower-oil': 'refined-sunflower-oil',
  'wheat-grains': 'milling-wheat',
  'pulses-legumes': 'calibrated-chickpeas',
  'halal-dairy': 'halal-smp-wmp',
  'custom-sourcing': 'turnkey-custom-sourcing',
};

export function HomePage({ t, onNavigate, onRequestQuote }: HomePageProps) {
  const isRtl = t.dir === 'rtl';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;
  const whatsappUrl = `${CONTACT_INFO.whatsappBase}?text=${encodeURIComponent(t.whatsappDefaultMsg)}`;

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#16426B]">
        <div className="absolute inset-0">
          <ResilientImage
            src={ASSETS.heroLogistics}
            alt={t.hero.headline}
            className="w-full h-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(22, 66, 107, 0.90) 0%, rgba(16, 48, 80, 0.82) 55%, rgba(11, 30, 51, 0.88) 100%)',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#F28C00]">
              {t.hero.originMarker}
            </p>

            <h1
              className="font-display font-bold text-white leading-[1.12] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.15rem, 4.1vw, 3.65rem)' }}
            >
              {t.hero.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl">
              {t.hero.subheadline}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => onRequestQuote('refined-sunflower-oil')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] rounded-lg bg-[#F28C00] hover:bg-[#D97706] text-[#0B1E33] text-sm sm:text-base font-bold transition-colors duration-150 whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#16426B]"
              >
                <span>{t.hero.primaryCta}</span>
                <DirectionalArrow className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] rounded-lg border border-white/35 bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold backdrop-blur-xs transition-colors duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageSquare className="w-4 h-4 shrink-0 text-[#F28C00]" aria-hidden="true" />
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>
          </div>

          {/* Key Badge Bar (Clean hairline-separated strip, zero pill clutter) */}
          <div className="mt-12 pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            {t.hero.badges.map((badge, idx) => (
              <div
                key={badge}
                className="flex items-center gap-3 text-sm font-medium text-white/95"
              >
                <span className="font-mono-tabular text-xs font-bold text-[#F28C00] shrink-0">
                  0{idx + 1}
                </span>
                <span className="leading-snug">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CORE EXPORT CATEGORIES (5-CARD BALANCED GRID) */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div className="max-w-2xl space-y-2.5">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#16426B] tracking-tight text-balance">
                {t.homeCategories.sectionTitle}
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                {t.homeCategories.sectionSubtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#16426B] hover:text-[#F28C00] transition-colors whitespace-nowrap shrink-0 self-start md:self-auto cursor-pointer"
            >
              <span>{t.homeCategories.viewFullCatalog}</span>
              <DirectionalArrow className="w-4 h-4 shrink-0" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {t.homeCategories.items.map((item, index) => {
              const spanClass = index < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
              const formProductId = HOME_TO_FORM_ID[item.id] || 'turnkey-custom-sourcing';

              return (
                <article
                  key={item.id}
                  className={`${spanClass} flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden transition-shadow duration-200 hover:shadow-md`}
                >
                  <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                    <ResilientImage
                      src={ASSETS[item.imageKey]}
                      alt={item.title}
                      fallbackTitle={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold text-[#F28C00]">
                        {item.subtitle}
                      </p>
                      <h3 className="font-display text-xl font-bold text-[#16426B] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#475569] leading-relaxed">
                        {item.specs}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <dl className="space-y-2 text-xs">
                        <div className="flex items-baseline justify-between gap-4">
                          <dt className="text-slate-500 shrink-0">
                            {t.homeCategories.packagingLabel}
                          </dt>
                          <dd className="text-slate-800 font-medium text-end">
                            {item.packaging}
                          </dd>
                        </div>
                        <div className="flex items-baseline justify-between gap-4">
                          <dt className="text-slate-500 shrink-0">
                            {t.homeCategories.moqLabel}
                          </dt>
                          <dd className="text-[#16426B] font-semibold font-mono-tabular text-end">
                            {item.moq}
                          </dd>
                        </div>
                      </dl>

                      <button
                        type="button"
                        onClick={() => onRequestQuote(formProductId)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[42px] rounded-lg bg-[#16426B] hover:bg-[#103252] text-white text-sm font-semibold transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C00]"
                      >
                        <span>{item.ctaLabel}</span>
                        <DirectionalArrow className="w-4 h-4 shrink-0" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. KEY ADVANTAGES (4 PILLARS) */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2.5 mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#16426B] tracking-tight text-balance">
              {t.advantages.sectionTitle}
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              {t.advantages.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.advantages.items.map((adv) => (
              <div
                key={adv.number}
                className="p-6 rounded-xl bg-[#F8FAFC] border border-slate-200/90 space-y-3"
              >
                <div className="font-mono-tabular text-sm font-bold text-[#F28C00]">
                  {adv.number}
                </div>
                <h3 className="font-display text-lg font-bold text-[#16426B] leading-snug">
                  {adv.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EMBEDDED QUICK QUOTE SECTION + DIRECT CONTACT CARD */}
      <section id="quick-quote" className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left / Form Column */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-2 mb-6">
                <h2 className="font-display text-2xl font-bold text-[#16426B] tracking-tight">
                  {t.quickQuote.sectionTitle}
                </h2>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {t.quickQuote.sectionSubtitle}
                </p>
              </div>
              <QuoteForm t={t} compact />
            </div>

            {/* Right / Direct Contact Card */}
            <aside className="lg:col-span-5 bg-[#16426B] text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {t.quickQuote.directCardTitle}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {t.quickQuote.directCardSubtitle}
                  </p>
                </div>

                <div className="space-y-5 pt-4 border-t border-white/15">
                  <div>
                    <div className="text-xs font-medium text-slate-300 mb-1">
                      {t.quickQuote.emailLabel}
                    </div>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="inline-flex items-center gap-2.5 text-base font-semibold text-white hover:text-[#F28C00] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#F28C00] shrink-0" aria-hidden="true" />
                      <span>{CONTACT_INFO.email}</span>
                    </a>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-slate-300 mb-1">
                      {t.quickQuote.whatsappLabel}
                    </div>
                    <a
                      href={CONTACT_INFO.phoneHref}
                      dir="ltr"
                      className="inline-flex items-center gap-2.5 text-base font-semibold font-mono-tabular text-white hover:text-[#F28C00] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#F28C00] shrink-0" aria-hidden="true" />
                      <span>{CONTACT_INFO.phoneDisplay}</span>
                    </a>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-slate-300 mb-1">
                      {t.quickQuote.officeLabel}
                    </div>
                    <p className="text-sm font-medium text-slate-100">
                      {t.quickQuote.officeValue}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/15 space-y-4">
                <div>
                  <div className="text-xs font-medium text-[#F28C00] mb-1">
                    {t.quickQuote.moqNoteLabel}
                  </div>
                  <p className="text-sm text-slate-100 leading-relaxed">
                    {t.quickQuote.moqNoteValue}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-lg bg-[#F28C00] hover:bg-[#D97706] text-[#0B1E33] text-sm font-bold transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{t.hero.secondaryCta}</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
