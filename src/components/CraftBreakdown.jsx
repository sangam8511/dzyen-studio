import { useState } from 'react';
import { EDITING_BREAKDOWNS } from '../data/projects';
import { CheckCircle2, Sparkles, Layers, Sliders, Volume2, Zap } from 'lucide-react';

export default function CraftBreakdown() {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [Zap, Layers, Volume2, Sliders];

  return (
    <section id="craft" className="py-24 relative overflow-hidden bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-neutral-300 mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>THE 4-PILLAR RETENTION SYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white mb-4">
            How We Turn Scrolling Feeders Into{' '}
            <span className="text-gradient-white">Addicted Watchers.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Most video editors just cut dead air. We dissect viewer drop-off psychology, craft auditory hooks, and animate UI interactions to maximize algorithmic distribution.
          </p>
        </div>

        {/* Tab Navigation for Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {EDITING_BREAKDOWNS.map((item, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            const isActive = activeStep === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-white text-black border-white shadow-xl'
                    : 'bg-[#0E0E0E] border-white/10 hover:border-white/20 text-neutral-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-xs px-2 py-0.5 rounded font-bold ${
                      isActive ? 'bg-black text-white' : 'bg-white/10 text-neutral-400'
                    }`}
                  >
                    STEP {item.step}
                  </span>
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? 'text-black' : 'text-neutral-500'
                    }`}
                  />
                </div>
                <div className={`font-display font-bold text-sm sm:text-base ${isActive ? 'text-black' : 'text-white'}`}>
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Breakdown Deep-Dive Showcase */}
        {(() => {
          const current = EDITING_BREAKDOWNS[activeStep];
          return (
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/15 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Details Column */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-neutral-300 text-xs font-mono mb-4 border border-white/15">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span>{current.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white mb-4">
                    {current.headline}
                  </h3>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                    {current.description}
                  </p>

                  {/* Checklist Points */}
                  <div className="space-y-3 mb-8">
                    {current.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-300">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlight Metric */}
                  <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 font-mono text-xs">
                    <span className="text-neutral-400">Measured Impact:</span>
                    <span className="text-white font-bold text-sm">{current.metric}</span>
                  </div>
                </div>

                {/* Right Interactive Visual Card */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-black border border-white/15 relative overflow-hidden">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono text-neutral-400">
                      <span className="text-white font-medium">Timeline & Spectral Inspector</span>
                      <span className="text-neutral-300">ProRes 4444</span>
                    </div>

                    {/* Simulated Timeline Waveform & Track Layers */}
                    <div className="space-y-3 font-mono text-xs">
                      {/* Video Track 01 */}
                      <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-between">
                        <span className="text-white">V1: A-Roll Main Vocal</span>
                        <span className="text-neutral-400 text-[10px]">Punch-In 115%</span>
                      </div>

                      {/* Video Track 02 */}
                      <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-between">
                        <span className="text-white">V2: Figma UI Kinetic Track</span>
                        <span className="text-neutral-400 text-[10px]">Bezier Smooth</span>
                      </div>

                      {/* Video Track 03 */}
                      <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-between">
                        <span className="text-white">V3: Word-by-Word Captions</span>
                        <span className="text-neutral-400 text-[10px]">Shadow Shader</span>
                      </div>

                      {/* Audio Track 01 */}
                      <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-between">
                        <span className="text-white">A1: Master Dialogue (De-Essed)</span>
                        <span className="text-neutral-400 text-[10px]">-14 LUFS</span>
                      </div>

                      {/* Audio Track 02 */}
                      <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-between">
                        <span className="text-white">A2: Layered Risers & Whooshes</span>
                        <span className="text-neutral-400 text-[10px]">Audio Ducking 80%</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                      <span>FPS: 60.00</span>
                      <span className="text-white font-semibold">Zero Frame Drops</span>
                      <span>Render: GPU Cuda</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
