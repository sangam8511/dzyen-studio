import { useEffect, useRef, useState } from 'react';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  Layers
} from 'lucide-react';
import { PROJECTS } from '../data/projects';

export default function VideoModal({ project, onClose, onSelectProject, onRequestProject }) {
  const dialogRef = useRef(null);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef(null);

  // Sync dialog visibility using native HTML5 showModal()
  useEffect(() => {
    const dialog = dialogRef.current;
    if (project && dialog) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog && dialog.open) {
      dialog.close();
    }
  }, [project]);

  // Handle ESC key and light dismiss
  const handleDialogClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  // Keyboard navigation & spacebar play/pause
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!project) return;
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'ArrowRight') {
        goToNext();
      } else if (e.code === 'ArrowLeft') {
        goToPrev();
      } else if (e.code === 'KeyM') {
        toggleMute();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, isPlaying, isMuted]);

  // Current project index for Next/Prev
  const currentIndex = PROJECTS.findIndex((p) => p.id === project?.id);
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

  // Reset and start video playback when project changes
  useEffect(() => {
    if (videoRef.current && project) {
      videoRef.current.currentTime = 0;
      videoRef.current.volume = volume;
      videoRef.current.muted = isMuted;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If browser blocked unmuted playback, fallback to muted autoplay so video starts immediately
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          }
        });
    }
  }, [project]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleScrub = (e) => {
    if (!videoRef.current || !progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = Math.max(0, Math.min(pos * (videoRef.current.duration || 0), videoRef.current.duration));
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleFullscreen = () => {
    const container = dialogRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const formatTime = (secs) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!project) return null;

  const isVertical = project.aspect === '9/16';
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <dialog
      ref={dialogRef}
      onClick={handleDialogClick}
      onCancel={handleCancel}
      className="fixed inset-0 m-0 w-screen h-screen max-w-none max-h-none bg-transparent p-0 flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Modal Main Frame */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full ${
          isVertical ? 'max-w-4xl' : 'max-w-6xl'
        } max-h-[96vh] sm:max-h-[92vh] bg-[#0A0A0E] border border-white/15 rounded-2xl sm:rounded-3xl overflow-y-auto lg:overflow-hidden shadow-2xl flex flex-col lg:flex-row mx-2 sm:mx-4 my-auto animate-in fade-in zoom-in-95 duration-200`}
      >
        {/* Close Button Header */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-40 p-2 sm:p-2.5 rounded-full bg-black/80 hover:bg-black text-neutral-300 hover:text-white border border-white/20 backdrop-blur-md transition-all shadow-xl"
          aria-label="Close video player modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Previous / Next Arrow Quick Navigation */}
        <button
          type="button"
          onClick={goToPrev}
          title="Previous Video (Left Arrow)"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 hidden sm:flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          title="Next Video (Right Arrow)"
          className="absolute right-3 lg:right-[390px] top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 hidden sm:flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Video Screen Area with Google Drive Preview Player */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden group p-2 sm:p-4 shrink-0">
          {project.driveId ? (
            <div
              className={`flex items-center justify-center ${
                isVertical
                  ? 'h-[52vh] sm:h-[62vh] lg:h-[78vh] aspect-[9/16] max-w-full mx-auto'
                  : 'w-full max-w-5xl aspect-video mx-auto'
              }`}
            >
              <iframe
                key={project.driveId}
                src={`https://drive.google.com/file/d/${project.driveId}/preview`}
                title={project.title}
                className="w-full h-full rounded-xl sm:rounded-2xl border border-white/15 shadow-2xl bg-black"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
          ) : (
            <video
              ref={videoRef}
              src={project.videoSrc}
              controls
              playsInline
              className={`w-full max-h-[82vh] object-contain ${
                isVertical ? 'max-w-[380px]' : 'max-w-4xl'
              }`}
            />
          )}
        </div>

        {/* Project Details Sidebar / Drawer */}
        <div className="w-full lg:w-[380px] p-4 sm:p-6 lg:p-7 bg-[#0A0A0A] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between overflow-y-visible lg:overflow-y-auto lg:max-h-[82vh] shrink-0">
          <div>
            {/* Category & Status */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-white/10 text-white border border-white/15">
                <Sparkles className="w-3 h-3 text-white" />
                {project.categoryLabel}
              </span>
              <span className="text-xs font-mono text-neutral-400">
                {currentIndex + 1} of {PROJECTS.length}
              </span>
            </div>

            {/* Title & Client */}
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white leading-tight mb-2">
              {project.title}
            </h2>
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-4">
              Client: <span className="text-white font-medium">{project.client}</span>
            </div>

            {/* Performance Stats Pill */}
            <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/5 border border-white/10 font-mono text-xs mb-5">
              <div>
                <div className="text-neutral-400 text-[10px] uppercase">Performance</div>
                <div className="text-white font-bold text-sm flex items-center gap-1 mt-0.5">
                  <TrendingUp className="w-3.5 h-3.5 text-neutral-400" />
                  {project.views}
                </div>
              </div>
              <div>
                <div className="text-neutral-400 text-[10px] uppercase">Watch-Through</div>
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

          {/* Action CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            {project.driveId && (
              <a
                href={`https://drive.google.com/file/d/${project.driveId}/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs flex items-center justify-center gap-2 border border-white/15 transition-all"
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
              className="w-full py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02]"
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
    </dialog>
  );
}
