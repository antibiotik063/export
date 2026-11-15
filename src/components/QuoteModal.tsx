import { useEffect } from 'react';
import { X } from 'lucide-react';
import { TranslationSchema } from '../i18n/translations';
import { QuoteForm } from './QuoteForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: TranslationSchema;
  selectedProductId: string;
}

export function QuoteModal({
  isOpen,
  onClose,
  t,
  selectedProductId,
}: QuoteModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#16426B] text-white px-6 py-5 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 id="quote-modal-title" className="font-display text-xl font-bold">
              {t.form.modalTitle}
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              {t.form.modalSubtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.form.closeModal}
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          <QuoteForm t={t} initialProductId={selectedProductId} compact />
        </div>
      </div>
    </div>
  );
}
