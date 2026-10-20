import { SERVICES } from '../data/projects';
import { Monitor, Smartphone, Mic, Sparkles, CheckCircle, ArrowUpRight, Clock } from 'lucide-react';

export default function ServicesSection({ onSelectService }) {
  const iconMap = {
    Monitor: Monitor,
    Smartphone: Smartphone,
    Mic: Mic,
    Sparkles: Sparkles,
  };

  return (
    <section id="services" className="py-24 relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-neutral-300 text-xs font-mono mb-3 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>PRODUCTION CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white mb-4">
            Specialized Video Pipelines.{' '}
            <span className="text-gradient-white">Zero Fluff.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            We don't offer generic, cookie-cutter templates. Every video is custom-architected for your audience, conversion goals, and distribution platform.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((srv, idx) => {
            const Icon = iconMap[srv.icon] || Monitor;
            return (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-white group-hover:scale-105 group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                      {srv.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 mb-8">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle className="w-4 h-4 text-white shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Turnaround: <strong className="text-white">{srv.turnaround}</strong></span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectService(srv.title)}
                    className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
