import { PRICING_PACKAGES } from '../data/projects';
import { Check, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

export default function PricingSection({ onSelectPackage }) {
  return (
    <section id="pricing" className="py-24 relative bg-black border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-neutral-300 text-xs font-mono mb-3 border border-white/15">
            <Zap className="w-3.5 h-3.5 text-white" />
            <span>TRANSPARENT INVESTMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white mb-4">
            Simple Pricing.{' '}
            <span className="text-gradient-white">Massive ROI.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            No surprise fees or hidden licensing costs. Choose a flat-rate project package or lock in ongoing monthly capacity.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {PRICING_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#111111] border-2 border-white shadow-2xl scale-[1.02] z-10'
                    : 'bg-[#0A0A0A] border border-white/15 hover:border-white/30'
                }`}
              >
                {/* Popular Pill Tag */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-black text-[11px] font-mono font-bold tracking-wider uppercase shadow-xl">
                    ★ MOST POPULAR FOR FOUNDERS
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {pkg.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2 mb-1.5">
                      <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">/{pkg.period}</span>
                    </div>
                    {pkg.perVideo && (
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="px-2 py-0.5 rounded bg-white/10 border border-white/20 text-white font-semibold">
                          {pkg.perVideo}
                        </span>
                        <span className="text-neutral-400 text-[11px]">• Under 1 min each</span>
                      </div>
                    )}
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-xs sm:text-sm text-neutral-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Package Button CTA */}
                <button
                  type="button"
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    isPopular
                      ? 'bg-white text-black hover:bg-neutral-200 shadow-xl hover:scale-[1.02]'
                      : 'bg-white/10 hover:bg-white hover:text-black text-white border border-white/20'
                  }`}
                >
                  <span>{pkg.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Enterprise / Custom Scope Box */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-display font-bold text-base sm:text-lg">
                Need enterprise volume or a custom multi-brand pipeline?
              </div>
              <div className="text-neutral-400 text-xs sm:text-sm mt-0.5">
                We handle 30+ videos per month with custom SLA guarantees, dedicated editors, and direct Slack integration.
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectPackage({ name: 'Enterprise / Custom Scope' })}
            className="px-6 py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors whitespace-nowrap"
          >
            Custom Inquiry
          </button>
        </div>
      </div>
    </section>
  );
}
