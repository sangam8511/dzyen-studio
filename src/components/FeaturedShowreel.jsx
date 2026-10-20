import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';

export default function FeaturedShowreel({ onSelectProject }) {
  const [isMuted, setIsMuted]     = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView]   = useState(false);
  const videoRef  = useRef(null);
  const sectionRef = useRef(null);

  // Lazy-load: only assign src when section scrolls into viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const featuredItem = {
    id: 'saas-latest',
    title: 'NextGen Cloud Platform Walkthrough',
    category: 'saas',
    categoryLabel: 'Flagship SaaS Walkthrough',
    aspect: '16/9',
    videoSrc: '/videos/saas/latest-saas.mp4',
    duration: '1:15',
    client: 'CloudFlow Tech',
    views: '3.4x Conversion',
    retention: '84% Avg Retention',
    featured: true,
    tagline: 'High-converting interactive SaaS product tour with kinetic UI zooms & cursor physics.',
    description: 'Engineered an immersive product overview that transforms complex cloud architecture into an intuitive, high-energy visual experience. Featured dynamic zooms, realistic mockups, layered interface animations, and sound effects for click actions.',
    deliverables: ['Custom UI Mockups', 'Cursor Physics Motion', 'Sound SFX Layering', 'DaVinci Color Balance'],
    tools: ['After Effects', 'Premiere Pro', 'Figma', 'DaVinci Resolve']
  };

  return (
    <section ref={sectionRef} className="py-20 relative bg-black overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 glass-card border border-white/15 relative overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-neutral-300 text-xs font-mono mb-4 border border-white/15">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span>FLAGSHIP CASE STUDY</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-display font-black text-white leading-tight mb-4">
                  Transforming Boring Software Into{' '}
                  <span className="text-gradient-white">Must-Have Tech.</span>
                </h3>

                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
                  {featuredItem.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  {featuredItem.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-white shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Impact Metric</div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-1">
                    <TrendingUp className="w-5 h-5 text-white" />
                    <span>+240% Demo Requests</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProject(featuredItem)}
                  className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>Open Cinema Player</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Widescreen Player Preview */}
            <div
              onClick={() => onSelectProject(featuredItem)}
              className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-white/20 bg-black cursor-pointer aspect-video shadow-2xl group/player"
            >
              <img
                src={featuredItem.poster || '/hero-poster.jpg'}
                alt={featuredItem.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/player:scale-105"
              />

              {/* Overlay Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Center Play/Pause Button */}
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center transition-all duration-300"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center backdrop-blur-md border border-white/40 shadow-2xl transition-all duration-300 group-hover/player:scale-110">
                  {isPlaying
                    ? <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
                    : <Play  className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />}
                </div>
              </div>

              {/* Top Banner on Video */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-black/70 text-white text-xs font-mono backdrop-blur-md border border-white/20">
                  CloudFlow Tech • 1:15
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/10 text-white text-xs font-mono border border-white/20">
                  4K Master Cut
                </span>
              </div>

              {/* Bottom Mute Button */}
              <div className="absolute bottom-4 right-4 z-10">
                <button
                  type="button"
                  onClick={toggleSound}
                  className="p-2 rounded-xl bg-black/70 hover:bg-black text-white border border-white/20 backdrop-blur-md transition-colors"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-neutral-400" /> : <Volume2 className="w-4 h-4 text-white" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
