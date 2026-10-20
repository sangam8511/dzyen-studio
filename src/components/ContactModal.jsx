import { useState, useEffect, useRef } from 'react';
import {
  X,
  Send,
  CheckCircle,
  MessageSquare,
  Sparkles,
  Mail,
  Copy,
  Calendar,
  PhoneCall,
  ExternalLink
} from 'lucide-react';

export default function ContactModal({ isOpen, initialData, onClose, onShowToast }) {
  const dialogRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'SaaS Launch Film',
    volume: '1-3 Videos',
    footageLink: '',
    budget: '$1,000 - $2,500',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData?.service) {
      setFormData((prev) => ({ ...prev, service: initialData.service }));
    } else if (initialData?.packageName) {
      setFormData((prev) => ({ ...prev, service: initialData.packageName }));
    }
  }, [initialData]);

  // Sync with HTML5 <dialog>
  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && dialog) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const handleDialogClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast('Project brief received! We will reply within 4 hours.');
      }
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@dzyenstudio.com');
    if (onShowToast) {
      onShowToast('Copied email (hello@dzyenstudio.com) to clipboard!');
    }
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      onClick={handleDialogClick}
      onCancel={handleCancel}
      className="fixed inset-0 m-0 w-screen h-screen max-w-none max-h-none bg-transparent p-0 flex items-center justify-center z-50 overflow-hidden"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[92vh] bg-[#0E0E14] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col mx-4 my-auto animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-white/10 flex items-center justify-between bg-[#12121A]">
          <div className="flex items-center gap-3.5">
            <img
              src="/logo.png"
              alt="Dzyen Studio"
              className="h-7 w-auto object-contain brightness-0 invert opacity-95"
            />
            <div className="h-6 w-[1px] bg-white/10 hidden sm:block" />
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Start Your Project
              </h3>
              <p className="text-xs font-mono text-neutral-400">
                Direct response within 4 hours • 100% Confidential
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[75vh]">
          {submitted ? (
            <div className="text-center py-10 px-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-5 shadow-glow-brand">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-display font-bold text-white mb-2">
                Inquiry Successfully Sent!
              </h4>
              <p className="text-neutral-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <strong className="text-white">{formData.name || 'there'}</strong>. Our creative director is reviewing your project details right now. We will respond to <span className="text-indigo-400 underline">{formData.email}</span> within 4 hours with tailored pacing recommendations and timeline.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Vance"
                    className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              {/* Service & Volume Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    Project Type
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="10 Video Growth Pack (₹13,999)">10 Video Growth Pack — ₹13,999 (Under 1 min each)</option>
                    <option value="20 Video Scale Pack (₹27,999)">20 Video Scale Pack — ₹27,999 (Under 1 min each)</option>
                    <option value="SaaS Launch Film">SaaS Launch Film (16:9)</option>
                    <option value="Podcast Repurposing">Podcast Repurposing</option>
                    <option value="AI & Motion Graphics">AI & Motion FX</option>
                    <option value="Full Studio Retainer">Full Studio Retainer (Monthly)</option>
                    <option value="Custom Scope">Custom Scope / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    Estimated Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="₹13,999 (10 Videos Pack)">₹13,999 (10 Videos Pack)</option>
                    <option value="₹27,999 (20 Videos Pack)">₹27,999 (20 Videos Pack)</option>
                    <option value="₹30,000 - ₹50,000">₹30,000 – ₹50,000</option>
                    <option value="₹50,000+ (Monthly Retainer)">₹50,000+ (Monthly Retainer)</option>
                    <option value="Custom / Let's Discuss">Custom / Let's Discuss</option>
                  </select>
                </div>
              </div>

              {/* Footage or Reference Link */}
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                  Raw Footage / Reference Link (Optional)
                </label>
                <input
                  type="url"
                  name="footageLink"
                  value={formData.footageLink}
                  onChange={handleChange}
                  placeholder="https://drive.google.com/... or loom.com/..."
                  className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Project Details Message */}
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                  Project Vision & Goals
                </label>
                <textarea
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your brand, audience, deadline, or desired hook style..."
                  className="w-full bg-[#161622] border border-white/10 rounded-xl p-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending Brief...</span>
                ) : (
                  <>
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Quick Direct Contacts */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
              Or Connect Directly:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white flex items-center justify-between transition-colors text-left"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white" />
                  <span>hello@dzyenstudio.com</span>
                </span>
                <Copy className="w-3.5 h-3.5 text-neutral-400" />
              </button>

              <a
                href="https://wa.me/?text=Hi%20Dzyen%20Studio,%20I'd%20like%20to%20discuss%20a%20video%20editing%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
