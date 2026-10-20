import { useState, useRef, useEffect } from 'react';
import { Play, Eye, Flame, Clock } from 'lucide-react';

export default function VideoCard({ project, onSelect }) {
  const [isHovered, setIsHovered]     = useState(false);
  const [isInView, setIsInView]       = useState(false); // true once card enters viewport
  const [videoReady, setVideoReady]   = useState(false);
  const videoRef  = useRef(null);
  const cardRef   = useRef(null);

  // ── Lazy-load: set src only when card scrolls into viewport ──────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // load once, never unload
        }
      },
      { rootMargin: '200px' } // start loading 200px before visible
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // ── Play / pause on hover ─────────────────────────────────────────────────
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && isInView) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const isVertical = project.aspect === '9/16';

  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-2xl overflow-hidden glass-card glass-card-hover cursor-pointer border border-white/10 hover:border-white/30 flex flex-col ${
        isVertical ? 'row-span-2' : ''
      }`}
    >
      {/* Aspect Ratio Video Container */}
      <div
        className={`relative w-full overflow-hidden bg-black flex items-center justify-center ${
          isVertical ? 'aspect-[9/16]' : 'aspect-video'
        }`}
      >
        {/* Skeleton placeholder shown before video is ready */}
        {!videoReady && (
          <div className="absolute inset-0 bg-neutral-900 animate-pulse flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
          </div>
        )}

        {/* High-res Google Drive Thumbnail Poster */}
        <img
          src={project.poster || '/hero-poster.jpg'}
          alt={project.title}
          loading="lazy"
          onLoad={() => setVideoReady(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Ambient Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium border backdrop-blur-md bg-white/10 text-white border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            {project.categoryLabel}
          </span>

          <div className="flex items-center gap-1.5">
            {project.featured && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-mono border border-white/20 backdrop-blur-md">
                <Flame className="w-3 h-3 text-white" />
                TOP PICK
              </span>
            )}
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/70 text-neutral-300 text-[11px] font-mono border border-white/15 backdrop-blur-md">
              <Clock className="w-3 h-3 text-neutral-400" />
              {project.duration}
            </span>
          </div>
        </div>

        {/* Center Hover Play Button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none z-10 ${
            isHovered ? 'scale-110 opacity-100' : 'scale-95 opacity-80 group-hover:opacity-100'
          }`}
        >
          <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
            <Play className="w-6 h-6 fill-black ml-0.5" />
          </div>
        </div>

        {/* Hover Hint Banner */}
        <div
          className={`absolute bottom-3 left-3 right-3 text-center transition-all duration-300 z-10 pointer-events-none ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-black/80 text-white text-[11px] font-mono backdrop-blur-md border border-white/20">
            Click to open Cinema Player
          </span>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-black/90 border-t border-white/10">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              {project.client}
            </span>
            <span className="text-xs font-mono text-white font-semibold flex items-center gap-1">
              <Eye className="w-3 h-3 text-neutral-400" />
              {project.views}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-neutral-300 transition-colors line-clamp-1 mb-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed mb-4">
            {project.tagline || project.description}
          </p>
        </div>

        {/* Deliverables / Feature Tags */}
        <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
          {project.deliverables?.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-neutral-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
          {project.deliverables?.length > 3 && (
            <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-neutral-400 border border-white/10">
              +{project.deliverables.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
