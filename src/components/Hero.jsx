import { useState, useRef } from 'react';
import { Play, Sparkles, Volume2, VolumeX, ArrowDown, TrendingUp, CheckCircle, Flame } from 'lucide-react';

export default function Hero({ onOpenReel, onOpenContact }) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollToWork = () => {
    const el = document.querySelector('#work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-black">
      {/* Subtle Monochrome Ambient Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-neutral-300 mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Retention-Engineered Video Editing & Motion FX</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-display font-extrabold tracking-tight leading-[1.06] mb-6 text-white">
              We Turn Raw Footage Into{' '}
              <span className="text-gradient-white">Addictive Visuals.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl font-normal leading-relaxed mb-8">
              High-converting SaaS product walkthroughs, viral short-form retention reels, and podcast micro-content. We combine ruthless pacing, kinetic motion graphics, and studio sound design to turn passive viewers into loyal customers.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={scrollToWork}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]"
              >
                <span>Explore 20+ Edits</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenReel}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2.5 backdrop-blur-md hover:border-white/40"
              >
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </div>
                <span>Watch Studio Reel</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-white" />
                DaVinci Film Color Science
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-white" />
                Studio Sound Design & SFX
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-white" />
                24-48h Delivery Available
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Video Preview Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative group mx-auto max-w-md lg:max-w-none">
              {/* Glass Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl">
                {/* Header Bar */}
                <div className="px-4 py-3 bg-[#111111] border-b border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30 inline-block" />
                    <span className="text-neutral-400 ml-2 font-medium">dzyen_showreel_2026.mp4</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/10 text-white text-[10px]">
                    <Flame className="w-3 h-3 text-white" />
                    <span>FEATURED</span>
                  </div>
                </div>

                {/* Video Container */}
                <div className="relative aspect-[16/10] bg-black overflow-hidden flex items-center justify-center">
                  <video
                    ref={videoRef}
                    src="/videos/sample-jellyfish.mp4"
                    poster="/hero-poster.jpg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Play & Audio Controls Floating on Video */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="px-3 py-1.5 rounded-lg bg-black/70 hover:bg-black border border-white/20 text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-md transition-all"
                    >
                      {isPlaying ? (
                        <>
                          <span className="w-2 h-2 rounded-sm bg-white inline-block" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3 text-white fill-white" />
                          <span>Play</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={toggleSound}
                        className="p-1.5 rounded-lg bg-black/70 hover:bg-black border border-white/20 text-white backdrop-blur-md transition-all"
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 text-neutral-400" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-white" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={onOpenReel}
                        className="px-3 py-1.5 rounded-lg bg-white text-black hover:bg-neutral-200 text-xs font-semibold flex items-center gap-1 transition-all"
                      >
                        <Play className="w-3 h-3 fill-black" />
                        <span>Full HD</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Footer Details */}
                <div className="p-4 bg-[#0A0A0A] border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <div className="text-white font-medium">Flagship Studio Reel</div>
                    <div className="text-neutral-400 font-mono text-[11px]">4K ProRes • 60 FPS • Master Mix</div>
                  </div>
                  <div className="text-right font-mono">
                    <div className="text-white font-semibold flex items-center gap-1 justify-end">
                      <TrendingUp className="w-3.5 h-3.5 text-white" />
                      <span>96% Retention</span>
                    </div>
                    <div className="text-neutral-500 text-[11px]">Tested On 500K+ Viewers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Metric Stats Strip */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-card p-5 rounded-2xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-display font-black text-white mb-1 tracking-tight">
              50M<span className="text-neutral-400">+</span>
            </div>
            <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">Total Views Generated</div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-display font-black text-white mb-1 tracking-tight">
              88<span className="text-neutral-400">%</span>
            </div>
            <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">Average Watch Retention</div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-display font-black text-white mb-1 tracking-tight">
              3.4<span className="text-neutral-400">x</span>
            </div>
            <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">SaaS Conversion Lift</div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-display font-black text-white mb-1 tracking-tight">
              24<span className="text-neutral-400">h</span>
            </div>
            <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">Rush Turnaround Option</div>
          </div>
        </div>
      </div>
    </section>
  );
}
