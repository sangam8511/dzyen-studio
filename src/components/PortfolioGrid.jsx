import { useState, useMemo } from 'react';
import { CATEGORIES, PROJECTS } from '../data/projects';
import VideoCard from './VideoCard';
import { Search, SlidersHorizontal, Sparkles, Film, ArrowRight } from 'lucide-react';

export default function PortfolioGrid({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [aspectFilter, setAspectFilter] = useState('all'); // 'all' | '9/16' | '16/9'

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((item) => {
      // Category filter
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;

      // Aspect filter
      const matchesAspect = aspectFilter === 'all' || item.aspect === aspectFilter;

      // Search query
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.client.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.deliverables?.some((d) => d.toLowerCase().includes(q)) ||
        item.tools?.some((t) => t.toLowerCase().includes(q));

      return matchesCat && matchesAspect && matchesSearch;
    });
  }, [activeCategory, aspectFilter, searchQuery]);

  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 mb-3 backdrop-blur-md">
              <Film className="w-3.5 h-3.5 text-white" />
              <span>SELECTED ARCHIVE 2025–2026</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white">
              Proven Works.{' '}
              <span className="text-gradient-white">Real Results.</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Every project below was edited, graded, and engineered for maximum audience retention and conversion.
            </p>
          </div>

          {/* Quick Aspect Filter Buttons */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono">
            <button
              type="button"
              onClick={() => setAspectFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                aspectFilter === 'all'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Formats
            </button>
            <button
              type="button"
              onClick={() => setAspectFilter('9/16')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                aspectFilter === '9/16'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              9:16 Vertical
            </button>
            <button
              type="button"
              onClick={() => setAspectFilter('16/9')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                aspectFilter === '16/9'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              16:9 Landscape
            </button>
          </div>
        </div>

        {/* Filter Navigation Bar & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-2 border ${
                    isActive
                      ? 'bg-white text-black border-white shadow-lg font-bold'
                      : 'bg-white/5 hover:bg-white/10 text-neutral-300 border-white/10 hover:border-white/20'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-md text-[11px] font-mono ${
                      isActive ? 'bg-black text-white' : 'bg-white/10 text-neutral-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by client, style, tool..."
              className="w-full bg-[#111111] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs font-mono"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Video Portfolio Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <VideoCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 px-4 rounded-3xl glass-card border border-white/10">
            <Sparkles className="w-10 h-10 text-neutral-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No videos match your criteria</h3>
            <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
              Try adjusting your category filter, aspect ratio, or search query.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setAspectFilter('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
