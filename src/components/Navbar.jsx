import { useState, useEffect } from 'react';
import { Play, Sparkles, Menu, X, ArrowUpRight, Film } from 'lucide-react';

export default function Navbar({ onOpenReel, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'The Craft', href: '#craft' },
    { label: 'Impact', href: '#stats' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 border ${
          scrolled
            ? 'bg-[#0E0E12]/80 backdrop-blur-xl border-white/10 shadow-2xl py-3 px-5 sm:px-6'
            : 'bg-[#0E0E12]/40 backdrop-blur-md border-white/5 py-4 px-5 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo & Status Badge */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex items-center group transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Dzyen Studio Home"
            >
              <img
                src="/logo.png"
                alt="Dzyen Studio"
                className="h-7 sm:h-8 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </a>

            {/* Live Availability Badge */}
            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/15 text-neutral-300 text-xs font-mono font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span>Accepting Projects</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3.5 py-2 text-sm text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenReel}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wide uppercase text-neutral-300 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
            >
              <Play className="w-3.5 h-3.5 text-white fill-white" />
              <span>Showreel</span>
            </button>

            <button
              type="button"
              onClick={onOpenContact}
              className="group flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-black rounded-xl bg-white hover:bg-neutral-200 transition-all duration-200 hover:scale-[1.02]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenContact}
              className="px-3 py-1.5 text-xs font-semibold text-black rounded-lg bg-white"
            >
              Let's Talk
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-2 pb-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReel();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold uppercase rounded-lg bg-white/5 border border-white/10 text-neutral-200"
              >
                <Play className="w-3.5 h-3.5 text-white fill-white" />
                Showreel
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="flex-1 py-2 text-xs font-semibold uppercase rounded-lg bg-white text-black font-bold"
              >
                Book a Call
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
