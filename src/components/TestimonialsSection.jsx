import { TESTIMONIALS } from '../data/projects';
import { Star, TrendingUp } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-neutral-300 text-xs font-mono mb-3 border border-white/15">
            <Star className="w-3.5 h-3.5 fill-white text-white" />
            <span>CLIENT ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white mb-4">
            Trusted By High-Growth{' '}
            <span className="text-gradient-white">Founders & Creators.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Here is what leaders say about partnering with Dzyen Studio on their flagship videos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl glass-card border border-white/10 flex flex-col justify-between group hover:border-white/25 transition-all duration-300"
            >
              <div>
                {/* 5 Stars in pure white */}
                <div className="flex items-center gap-1 mb-6 text-white">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Verified Metric */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-white font-display font-bold text-sm sm:text-base">
                    {t.author}
                  </div>
                  <div className="text-xs font-mono text-neutral-400">{t.role}</div>
                </div>

                <div className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 text-white text-xs font-mono font-medium flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-neutral-400" />
                  <span>{t.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
