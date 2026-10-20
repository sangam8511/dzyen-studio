import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedShowreel from './components/FeaturedShowreel';
import PortfolioGrid from './components/PortfolioGrid';
import CraftBreakdown from './components/CraftBreakdown';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import ContactModal from './components/ContactModal';
import Toast from './components/Toast';
import { PROJECTS } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactInitialData, setContactInitialData] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleOpenReel = () => {
    // Open the featured showreel project
    const showreelProject = PROJECTS.find((p) => p.featured && p.category === 'saas') || PROJECTS[0];
    setSelectedProject(showreelProject);
  };

  const handleOpenContact = (initialData = null) => {
    setContactInitialData(initialData);
    setIsContactOpen(true);
  };

  const handleSelectPackage = (pkg) => {
    setContactInitialData({
      packageName: pkg.name,
      service: pkg.name,
    });
    setIsContactOpen(true);
  };

  const handleSelectService = (serviceTitle) => {
    setContactInitialData({
      service: serviceTitle,
    });
    setIsContactOpen(true);
  };

  const handleRequestProject = (project) => {
    setContactInitialData({
      service: `${project.categoryLabel} (${project.title})`,
      message: `Hi, I loved your work on "${project.title}" for ${project.client}. I'd like a video with similar pacing, hook style, and motion design.`,
    });
    setIsContactOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      {/* 35mm Cinematic Film Grain Texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Floating Navigation */}
      <Navbar
        onOpenReel={handleOpenReel}
        onOpenContact={() => handleOpenContact()}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenReel={handleOpenReel}
          onOpenContact={() => handleOpenContact()}
        />

        {/* Flagship SaaS Case Study */}
        <FeaturedShowreel
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Interactive Filterable Video Portfolio (20+ Videos) */}
        <PortfolioGrid
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* The 4-Pillar Retention Formula Breakdown */}
        <CraftBreakdown />

        {/* Verified Stats & Performance Metrics */}
        <StatsSection />

        {/* Specialized Production Offerings */}
        <ServicesSection
          onSelectService={handleSelectService}
        />

        {/* Flat-rate Pricing & Monthly Retainers */}
        <PricingSection
          onSelectPackage={handleSelectPackage}
        />

        {/* Client Endorsements & Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => handleOpenContact()}
      />

      {/* Fullscreen Cinema Lightbox Modal Player */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onRequestProject={handleRequestProject}
      />

      {/* Project Inquiry & Booking Modal */}
      <ContactModal
        isOpen={isContactOpen}
        initialData={contactInitialData}
        onClose={() => setIsContactOpen(false)}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      {/* Instant Action Feedback Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}
