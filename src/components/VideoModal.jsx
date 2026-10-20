import { useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  Eye,
  Clock
} from 'lucide-react';
import { PROJECTS } from '../data/projects';

export default function VideoModal({ project, onClose, onSelectProject, onRequestProject }) {
  // Lock body scroll on mobile and desktop while modal is open
  useEffect(() => {
    if (project) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [project]);

  // Keyboard navigation (ESC, Left, Right)
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const goToNext = () => {
    if (currentIndex >= 0) {
      const nextIdx = (currentIndex + 1) % PROJECTS.length;
      onSelectProject(PROJECTS[nextIdx]);
    }
  };
  const goToPrev = () => {
    if (currentIndex >= 0) {
      const prevIdx = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
      onSelectProject(PROJECTS[prevIdx]);
    }
  };

  const isVertical = project.aspect === '9/16';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-0 sm:p-4 overflow-y-auto overscroll-contain animate-in fade-in duration-200"
    >
      {/* Modal Main Frame */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full ${
          isVertical ? 'max-w-4xl' : 'max-w-6xl'
        } bg-[#0A0A0E] sm:border border-white/15 sm:rounded-3xl shadow-2xl flex flex-col lg:flex-row min-h-screen sm:min-h-0 sm:max-h-[92vh] overflow-y-auto lg:overflow-hidden my-auto`}
      >
        {/* Floating Top Header on Mobile & Desktop */}
        <div className="absolute top-0 inset-x-0 z-40 p-3 sm:p-4 flex items-center justify-between pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/80 text-white border border-white/20 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-white" />
              {project.categoryLabel}
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-neutral-400 bg-black/70 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
              {currentIndex + 1} of {PROJECTS.length}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="pointer-events-auto p-2.5 rounded-full bg-black/80 hover:bg-white text-white hover:text-black border border-white/20 backdrop-blur-md transition-all shadow-xl hover:scale-105"
            aria-label="Close video player modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous / Next Arrows (Desktop) */}
        <button
          type="button"
          onClick={goToPrev}
          title="Previous Video (Left Arrow)"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 hover:bg-white hover:text-black text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 hidden lg:flex items-center justify-center shadow-2xl"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          title="Next Video (Right Arrow)"
          className="absolute right-4 lg:right-[395px] top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 hover:bg-white hover:text-black text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 hidden lg:flex items-center justify-center shadow-2xl"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Video Player Display Area */}
        <div className="relative flex-1 bg-black flex items-center justify-center pt-16 pb-4 px-3 sm:p-6 lg:p-8 shrink-0">
          <div
            className={`w-full flex items-center justify-center ${
              isVertical
                ? 'max-w-[320px] xs:max-w-[350px] sm:max-w-[380px] lg:max-w-[400px] aspect-[9/16] max-h-[62vh] sm:max-h-[75vh]'
                : 'max-w-4xl aspect-video'
            }`}
          >
            {project.driveId ? (
              <iframe
                key={project.driveId}
                src={`https://drive.google.com/file/d/${project.driveId}/preview`}
                title={project.title}
                className="w-full h-full rounded-2xl border border-white/15 shadow-2xl bg-black"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            ) : (
              <video
                src={project.videoSrc}
                controls
                playsInline
                className="w-full h-full rounded-2xl object-contain bg-black"
              />
            )}
          </div>
        </div>

        {/* Project Details Sidebar / Drawer */}
        <div className="w-full lg:w-[380px] p-5 sm:p-6 lg:p-7 bg-[#0A0A0A] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between overflow-y-visible lg:overflow-y-auto lg:max-h-[92vh]">
          <div>
            {/* Title & Client */}
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white leading-tight mb-2">
              {project.title}
            </h2>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-5">
              <span>CLIENT:</span>
              <span className="text-white font-medium">{project.client}</span>
              <span className="text-neutral-600">•</span>
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>{project.duration}</span>
            </div>

            {/* Performance Metrics */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 grid grid-cols-2 gap-3 mb-5">
              <div>
                <div className="text-neutral-400 text-[10px] uppercase font-mono">Performance</div>
                <div className="text-white font-bold text-sm mt-0.5 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-white" />
                  <span>{project.views}</span>
                </div>
              </div>
              <div>
                <div className="text-neutral-400 text-[10px] uppercase font-mono">Watch-Through</div>
                <div className="text-white font-bold text-sm mt-0.5">
                  {project.retention || '88% Retention'}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-5">
              <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-2">
                Production Breakdown
              </h4>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Deliverables */}
            <div className="mb-5">
              <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-2">
                Techniques & Deliverables
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.deliverables?.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-lg bg-white/5 text-xs font-mono text-neutral-200 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Used */}
            <div className="mb-6">
              <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-2">
                Software Pipeline
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tools?.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono text-white bg-white/10 border border-white/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            {project.driveId && (
              <a
                href={`https://drive.google.com/file/d/${project.driveId}/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs flex items-center justify-center gap-2 border border-white/15 transition-all shadow-md active:scale-98"
              >
                <span>Watch Full Quality in Google Drive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestProject(project);
              }}
              className="w-full py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.01] active:scale-98"
            >
              <span>Request Similar Video</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-center text-[11px] text-neutral-400 font-mono">
              Fast 24-48h turnaround available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
