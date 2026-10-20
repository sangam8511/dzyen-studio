import { TrendingUp, Award, Zap, Clock, Eye } from 'lucide-react';

export default function StatsSection() {
  const metrics = [
    {
      value: '50M+',
      label: 'Organic Views Delivered',
      sub: 'Across Instagram Reels, YouTube Shorts & TikTok',
      icon: Eye,
    },
    {
      value: '88%',
      label: 'Average Watch-Through',
      sub: 'Compared to the 22% social industry average',
      icon: TrendingUp,
    },
    {
      value: '3.4x',
      label: 'SaaS Demo & Sign-Up Lift',
      sub: 'Proven conversion optimization for tech founders',
      icon: Zap,
    },
    {
      value: '48h',
      label: 'Average Delivery Window',
      sub: 'Fast, reliable turnaround without compromising craft',
      icon: Clock,
    },
  ];

  const clientTypes = [
    'SaaS & B2B Startups',
    'Tech Founders & CEOs',
    'Fintech & Trading Apps',
    'Top 1% Podcast Hosts',
    'AI & Developer Tooling',
    'Health & MedTech Leaders',
  ];

  return (
    <section id="stats" className="py-20 relative border-y border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-neutral-300 text-xs font-mono mb-3 border border-white/15">
            <Award className="w-3.5 h-3.5 text-white" />
            <span>MEASURED PERFORMANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Numbers That Speak For Themselves.
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            We judge our editing not just by aesthetic beauty, but by cold, hard retention metrics and client revenue growth.
          </p>
        </div>

        {/* 4 Large Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card border border-white/10 relative overflow-hidden group hover:border-white/25 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    VERIFIED
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-display font-black tracking-tight mb-2 text-white">
                  {m.value}
                </div>
                <div className="text-white font-medium text-sm mb-1">{m.label}</div>
                <div className="text-neutral-400 text-xs leading-relaxed">{m.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Client Focus Marquee Strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 whitespace-nowrap">
            Trusted By Innovators Across:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {clientTypes.map((type, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full bg-white/5 text-xs font-mono text-neutral-300 border border-white/10 hover:border-white/25 transition-colors"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
