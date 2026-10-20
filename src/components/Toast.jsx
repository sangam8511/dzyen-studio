import { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0F0F0F] border border-white/20 text-white text-xs sm:text-sm shadow-2xl backdrop-blur-xl">
        <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
        <span className="font-medium">{message}</span>
        <button
          type="button"
          onClick={onClose}
          className="p-1 hover:text-white text-neutral-400 transition-colors ml-2"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
