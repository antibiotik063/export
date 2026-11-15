import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, Loader2, MessageSquare, Send, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/assets';
import { TranslationSchema } from '../i18n/translations';

interface QuoteFormProps {
  t: TranslationSchema;
  initialProductId?: string;
  compact?: boolean;
  onSuccess?: () => void;
}

export function QuoteForm({
  t,
  initialProductId = '',
  compact = false,
}: QuoteFormProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [contact, setContact] = useState('');
  const [productId, setProductId] = useState(initialProductId);
  const [volume, setVolume] = useState('');
  const [destination, setDestination] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProductId) {
      setProductId(initialProductId);
    }
  }, [initialProductId]);

  const selectedProductLabel =
    t.form.selectOptions.find((opt) => opt.id === productId)?.label || productId || t.form.selectOptions[0]?.label;

  const buildWhatsAppUrl = () => {
    const lines = [
      `LLC Eurasia Technology — Export Inquiry`,
      `Name: ${name || '-'}`,
      `Company: ${company || '-'}`,
      `Contact: ${contact || '-'}`,
      `Commodity: ${selectedProductLabel}`,
      `Quantity: ${volume || 'Min. 20 MT'}`,
      `Destination/Incoterm: ${destination || '-'}`,
      notes ? `Notes: ${notes}` : '',
    ].filter(Boolean);
    return `${CONTACT_INFO.whatsappBase}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !productId.trim()) {
      setError(t.form.validationError);
      return;
    }

    setError('');
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 550);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setCompany('');
    setContact('');
    setVolume('');
    setDestination('');
    setNotes('');
    setError('');
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8 space-y-5">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1.5">
            <h4 className="font-display text-lg font-bold text-slate-900">
              {t.form.successTitle}
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {t.form.successMessage}
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-[#16426B] hover:bg-[#103252] text-white text-sm font-semibold transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t.form.sendWhatsAppBtn}</span>
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center px-4 py-2.5 min-h-[44px] rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer"
          >
            {t.form.newInquiryBtn}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {error && (
        <div
          role="alert"
          className="flex items-start gap-2.5 p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}

      <div className={`grid grid-cols-1 ${compact ? 'sm:grid-cols-2' : 'md:grid-cols-2'} gap-4`}>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            {t.form.nameLabel} *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.form.namePlaceholder}
            required
            className="w-full px-3.5 py-2.5 min-h-[42px] rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#16426B] focus:ring-2 focus:ring-[#16426B]/15"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            {t.form.companyLabel}
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder={t.form.companyPlaceholder}
            className="w-full px-3.5 py-2.5 min-h-[42px] rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#16426B] focus:ring-2 focus:ring-[#16426B]/15"
          />
        </div>
      </div>

      <div className={`grid grid-cols-1 ${compact ? 'sm:grid-cols-2' : 'md:grid-cols-2'} gap-4`}>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            {t.form.contactLabel} *
          </label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder={t.form.contactPlaceholder}
            required
            className="w-full px-3.5 py-2.5 min-h-[42px] rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#16426B] focus:ring-2 focus:ring-[#16426B]/15"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            {t.form.productLabel} *
          </label>
          <select
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
            className="w-full px-3.5 py-2.5 min-h-[42px] rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-[#16426B] focus:ring-2 focus:ring-[#16426B]/15"
          >
            <option value="">{t.form.productPlaceholder}</option>
            {t.form.selectOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={`grid grid-cols-1 ${compact ? 'sm:grid-cols-2' : 'md:grid-cols-2'} gap-4`}>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            {t.form.volumeLabel}
          </label>
          <input
            type="text"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            placeholder={t.form.volumePlaceholder}
            className="w-full px-3.5 py-2.5 min-h-[42px] rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#16426B] focus:ring-2 focus:ring-[#16426B]/15"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            {t.form.destinationLabel}
          </label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder={t.form.destinationPlaceholder}
            className="w-full px-3.5 py-2.5 min-h-[42px] rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#16426B] focus:ring-2 focus:ring-[#16426B]/15"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          {t.form.notesLabel}
        </label>
        <textarea
          rows={compact ? 3 : 4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={t.form.notesPlaceholder}
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#16426B] focus:ring-2 focus:ring-[#16426B]/15 resize-y"
        />
      </div>

      <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-lg bg-[#F28C00] hover:bg-[#D97706] disabled:opacity-70 text-[#0B1E33] text-sm font-semibold transition-colors duration-150 whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16426B] focus-visible:ring-offset-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
              <span>{t.form.submittingBtn}</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{t.form.submitBtn}</span>
            </>
          )}
        </button>

        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-[#16426B] text-sm font-semibold transition-colors whitespace-nowrap"
        >
          <MessageSquare className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>{t.hero.secondaryCta}</span>
        </a>
      </div>
    </form>
  );
}
