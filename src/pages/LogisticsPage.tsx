import { Mail, MessageSquare, Phone } from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../data/assets';
import { TranslationSchema } from '../i18n/translations';
import { QuoteForm } from '../components/QuoteForm';
import { ResilientImage } from '../components/ResilientImage';

interface LogisticsPageProps {
  t: TranslationSchema;
}

export function LogisticsPage({ t }: LogisticsPageProps) {
  const whatsappUrl = `${CONTACT_INFO.whatsappBase}?text=${encodeURIComponent(t.whatsappDefaultMsg)}`;

  return (
    <div className="bg-[#F8FAFC]">
      {/* Logistics Hero Header with Freight Port Photo */}
      <section className="relative bg-[#16426B] text-white overflow-hidden">
        <div className="absolute inset-0">
          <ResilientImage
            src={ASSETS.freightPort}
            alt={t.logisticsPage.title}
            className="w-full h-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(22, 66, 107, 0.92) 0%, rgba(16, 48, 80, 0.85) 60%, rgba(11, 30, 51, 0.90) 100%)',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs sm:text-sm font-semibold text-[#F28C00]">
              {t.logisticsPage.eyebrow}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              {t.logisticsPage.title}
            </h1>
            <p className="text-base text-slate-200 leading-relaxed max-w-2xl">
              {t.logisticsPage.subtitle}
            </p>
          </div>

          <div className="pt-5 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-semibold text-[#F28C00]">
              {t.logisticsPage.moqBannerLabel}
            </span>
            <span className="text-sm sm:text-base font-bold text-white font-mono-tabular">
              {t.logisticsPage.moqBannerValue}
            </span>
          </div>
        </div>
      </section>

      {/* Delivery Corridors & Incoterms */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2.5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#16426B] tracking-tight">
              {t.logisticsPage.corridorsTitle}
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              {t.logisticsPage.corridorsSubtitle}
            </p>
          </div>

          {/* 3 Highlighted Hubs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.logisticsPage.hubs.map((hub) => (
              <article
                key={hub.code}
                className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="font-mono-tabular text-xs font-bold text-[#F28C00]">
                    {hub.code}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#16426B]">
                    {hub.hubName}
                  </h3>
                  <div className="text-xs font-semibold text-slate-700">
                    {hub.region} · {hub.mode}
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed pt-1">
                    {hub.details}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Supported Incoterms 2020 Strip */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-5">
            <h3 className="font-display text-base font-bold text-[#16426B]">
              {t.logisticsPage.incotermsLabel}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2 border-t border-slate-100">
              {t.logisticsPage.incotermsList.map((term) => (
                <div key={term.code} className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono-tabular text-base font-bold text-[#16426B]">
                      {term.code}
                    </span>
                    <span className="text-xs font-semibold text-[#F28C00]">
                      {term.name}
                    </span>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {term.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Highlighted Block: Flexible Payment Solutions via UAE & CIS Banking Hubs */}
      <section className="py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-[#16426B] text-white p-8 sm:p-10 space-y-8">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs sm:text-sm font-semibold text-[#F28C00]">
                {t.logisticsPage.paymentsBlock.eyebrow}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-balance">
                {t.logisticsPage.paymentsBlock.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {t.logisticsPage.paymentsBlock.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/15">
              {t.logisticsPage.paymentsBlock.methods.map((method) => (
                <div
                  key={method.title}
                  className="bg-white/8 border border-white/15 rounded-lg p-5 space-y-2"
                >
                  <h3 className="font-display text-base font-bold text-white">
                    {method.title}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {method.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Export Workflow */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2.5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#16426B] tracking-tight">
              {t.logisticsPage.workflowTitle}
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              {t.logisticsPage.workflowSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.logisticsPage.workflowSteps.map((wf) => (
              <div
                key={wf.step}
                className="bg-white rounded-xl border border-slate-200 p-6 space-y-3"
              >
                <div className="font-mono-tabular text-lg font-bold text-[#F28C00]">
                  {wf.step}
                </div>
                <h3 className="font-display text-lg font-bold text-[#16426B]">
                  {wf.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {wf.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Company Details & Full Interactive Contact Us Form */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2.5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#16426B] tracking-tight">
              {t.logisticsPage.contactsTitle}
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              {t.logisticsPage.contactsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Company Details Card */}
            <aside className="lg:col-span-5 bg-[#F8FAFC] rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between gap-8">
              <div className="space-y-6">
                <h3 className="font-display text-xl font-bold text-[#16426B]">
                  {t.logisticsPage.companyDetailsTitle}
                </h3>

                <dl className="space-y-4 text-sm border-t border-slate-200 pt-5">
                  <div>
                    <dt className="text-xs text-slate-500 mb-0.5">
                      {t.logisticsPage.companyNameLabel}
                    </dt>
                    <dd className="font-semibold text-slate-900">
                      {t.logisticsPage.companyNameValue}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs text-slate-500 mb-0.5">
                      {t.logisticsPage.jurisdictionLabel}
                    </dt>
                    <dd className="font-semibold text-slate-900">
                      {t.logisticsPage.jurisdictionValue}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs text-slate-500 mb-0.5">
                      {t.logisticsPage.emailLabel}
                    </dt>
                    <dd>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="inline-flex items-center gap-2 font-semibold text-[#16426B] hover:text-[#F28C00] transition-colors"
                      >
                        <Mail className="w-4 h-4 text-[#F28C00] shrink-0" aria-hidden="true" />
                        <span>{CONTACT_INFO.email}</span>
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs text-slate-500 mb-0.5">
                      {t.logisticsPage.phoneLabel}
                    </dt>
                    <dd>
                      <a
                        href={CONTACT_INFO.phoneHref}
                        dir="ltr"
                        className="inline-flex items-center gap-2 font-semibold font-mono-tabular text-[#16426B] hover:text-[#F28C00] transition-colors"
                      >
                        <Phone className="w-4 h-4 text-[#F28C00] shrink-0" aria-hidden="true" />
                        <span>{CONTACT_INFO.phoneDisplay}</span>
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-lg bg-[#16426B] hover:bg-[#103252] text-white text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4 text-[#F28C00] shrink-0" aria-hidden="true" />
                  <span>{t.logisticsPage.whatsappBtn}</span>
                </a>
              </div>
            </aside>

            {/* Interactive Contact Us Form */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-xl border border-slate-200 p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-[#16426B] mb-5">
                {t.logisticsPage.contactFormTitle}
              </h3>
              <QuoteForm t={t} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
