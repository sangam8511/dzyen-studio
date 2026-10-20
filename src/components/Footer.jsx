import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <a
              href="#"
              className="inline-block mb-4 transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Dzyen Studio Home"
            >
              <img
                src="/logo.png"
                alt="Dzyen Studio"
                className="h-8 sm:h-9 w-auto object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity"
              />
            </a>

            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed mb-6">
              A boutique post-production and retention video editing studio. We architect high-converting visual stories for category-defining SaaS tools, creators, and modern brands.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span>Available for Q2/Q3 Collaborations</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Featured Work (21+)
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-white transition-colors">
                  The Retention Formula
                </a>
              </li>
              <li>
                <a href="#stats" className="hover:text-white transition-colors">
                  Performance Metrics
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Production Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing & Retainers
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Collaboration Box */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-4">
              Direct Contact
            </h4>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div className="mb-4">
                <div className="text-white font-medium text-sm mb-1">
                  Have an upcoming launch or video campaign?
                </div>
                <div className="text-neutral-400 text-xs">
                  Send us your raw footage link or brief.
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenContact}
                className="w-full py-3 rounded-xl bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider transition-colors text-center shadow-lg"
              >
                Inquire With Creative Director
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} Dzyen Studio. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>DaVinci Resolve • Premiere Pro • After Effects</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
