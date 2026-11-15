import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { TranslationSchema } from '../i18n/translations';
import { ProductCategoryKey } from '../types';
import { ResilientImage } from '../components/ResilientImage';

interface ProductsPageProps {
  t: TranslationSchema;
  onRequestQuote: (productId: string) => void;
}

const TAB_ORDER: ProductCategoryKey[] = [
  'all',
  'oils',
  'grains_pulses',
  'halal_dairy',
  'custom_sourcing',
];

export function ProductsPage({ t, onRequestQuote }: ProductsPageProps) {
  const [activeTab, setActiveTab] = useState<ProductCategoryKey>('all');
  const isRtl = t.dir === 'rtl';
  const DirectionalArrow = isRtl ? ArrowLeft : ArrowRight;

  const filteredItems =
    activeTab === 'all'
      ? t.productsPage.items
      : t.productsPage.items.filter((item) => item.category === activeTab);

  return (
    <div className="bg-[#F8FAFC]">
      {/* Page Header */}
      <section className="bg-[#16426B] text-white py-12 sm:py-16 border-b border-[#103252]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs sm:text-sm font-semibold text-[#F28C00]">
            {t.productsPage.eyebrow}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance max-w-3xl">
            {t.productsPage.title}
          </h1>
          <p className="text-base text-slate-200 max-w-2xl leading-relaxed">
            {t.productsPage.subtitle}
          </p>
        </div>
      </section>

      {/* Filter Tabs + Specification Cards */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white border border-slate-200 rounded-xl w-fit max-w-full overflow-x-auto">
            {TAB_ORDER.map((tabKey) => {
              const active = activeTab === tabKey;
              return (
                <button
                  key={tabKey}
                  type="button"
                  onClick={() => setActiveTab(tabKey)}
                  className={`px-4 py-2 min-h-[40px] text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16426B] ${
                    active
                      ? 'bg-[#16426B] text-white'
                      : 'text-[#475569] hover:text-[#16426B] hover:bg-slate-50'
                  }`}
                >
                  {t.productsPage.tabs[tabKey]}
                </button>
              );
            })}
          </div>

          {/* Detailed B2B Specification Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-12 border-b border-slate-100">
                    <div className="sm:col-span-5 aspect-[4/3] sm:aspect-auto sm:h-full bg-slate-100">
                      <ResilientImage
                        src={ASSETS[item.imageKey]}
                        alt={item.name}
                        fallbackTitle={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="sm:col-span-7 p-6 space-y-2.5 flex flex-col justify-center">
                      <div className="text-xs font-semibold text-[#F28C00]">
                        {t.productsPage.tabs[item.category]}
                      </div>
                      <h2 className="font-display text-lg sm:text-xl font-bold text-[#16426B] leading-snug">
                        {item.name}
                      </h2>
                      <div className="text-xs text-slate-600 pt-1">
                        <span className="font-semibold text-slate-800">
                          {item.gradeLabel}:{' '}
                        </span>
                        <span>{item.gradeValue}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Specifications Table */}
                  <div className="p-6 space-y-5">
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs pb-5 border-b border-slate-100">
                      {item.specs.map((spec) => (
                        <div key={spec.label} className="space-y-0.5">
                          <dt className="text-slate-500">{spec.label}</dt>
                          <dd className="text-slate-900 font-semibold font-mono-tabular">
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <dl className="space-y-2.5 text-xs">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                        <dt className="text-slate-500 shrink-0">
                          {t.productsPage.packagingTitle}
                        </dt>
                        <dd className="text-slate-800 font-medium sm:text-end">
                          {item.packaging}
                        </dd>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                        <dt className="text-slate-500 shrink-0">
                          {t.productsPage.moqTitle}
                        </dt>
                        <dd className="text-[#16426B] font-semibold font-mono-tabular sm:text-end">
                          {item.moq}
                        </dd>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                        <dt className="text-slate-500 shrink-0">
                          {t.productsPage.incotermsTitle}
                        </dt>
                        <dd className="text-slate-800 font-medium font-mono-tabular sm:text-end">
                          {item.incoterms}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button
                    type="button"
                    onClick={() => onRequestQuote(item.id)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] rounded-lg bg-[#F28C00] hover:bg-[#D97706] text-[#0B1E33] text-sm font-bold transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16426B]"
                  >
                    <span>{t.productsPage.requestSpecBtn}</span>
                    <DirectionalArrow className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Banner Section: Turnkey Procurement Agent in Russia */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-[#16426B] text-white p-8 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs sm:text-sm font-semibold text-[#F28C00]">
                {t.productsPage.procurementBanner.eyebrow}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-balance">
                {t.productsPage.procurementBanner.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                {t.productsPage.procurementBanner.description}
              </p>

              <ul className="pt-2 space-y-2">
                {t.productsPage.procurementBanner.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-2.5 text-sm text-slate-100"
                  >
                    <Check className="w-4 h-4 text-[#F28C00] shrink-0" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                type="button"
                onClick={() => onRequestQuote('turnkey-custom-sourcing')}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] rounded-lg bg-[#F28C00] hover:bg-[#D97706] text-[#0B1E33] text-sm sm:text-base font-bold transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>{t.productsPage.procurementBanner.cta}</span>
                <DirectionalArrow className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
