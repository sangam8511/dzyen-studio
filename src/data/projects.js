export const CATEGORIES = [
  { id: 'all', label: 'All Work', count: 21 },
  { id: 'saas', label: 'SaaS & Product', icon: 'Monitor', count: 3 },
  { id: 'short', label: 'Short-Form & Viral', icon: 'Smartphone', count: 7 },
  { id: 'podcast', label: 'Podcast Reels', icon: 'Mic', count: 6 },
  { id: 'ai', label: 'AI & Motion FX', icon: 'Sparkles', count: 5 },
];

export const PROJECTS = [
  // --- SAAS & PRODUCT (16:9 Widescreen) ---
  {
    id: 'saas-latest',
    driveId: '11imrkP0_iXMZFgXeH7BYulg8ehWqFrZU',
    poster: 'https://lh3.googleusercontent.com/d/11imrkP0_iXMZFgXeH7BYulg8ehWqFrZU=w800',
    title: 'NextGen Cloud Platform Walkthrough',
    category: 'saas',
    categoryLabel: 'SaaS & Product',
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
  },
  {
    id: 'saas-scripted',
    driveId: '1YKr9Gd8YX8gRd6VxyoY6dL2cEueXI7q_',
    poster: 'https://lh3.googleusercontent.com/d/1YKr9Gd8YX8gRd6VxyoY6dL2cEueXI7q_=w800',
    title: 'Scripted Automation & Workflow Engine',
    category: 'saas',
    categoryLabel: 'SaaS & Product',
    aspect: '16/9',
    videoSrc: '/videos/saas/scripted-saas.mp4',
    duration: '0:50',
    client: 'Scripted AI',
    views: '4.8x Demo Requests',
    retention: '89% Watch-Through',
    featured: true,
    tagline: 'Developer-focused product trailer with dark-mode terminal visuals & sleek transitions.',
    description: 'Designed specifically for tech founders and technical leads. We combined fast terminal code highlights, smooth glass floating windows, and precision beat-synced motion graphics to prove developer velocity.',
    deliverables: ['Motion Graphics', 'Code Highlighting', 'Audio Mastering', 'Speed Ramping'],
    tools: ['After Effects', 'Premiere Pro', 'Audition']
  },
  {
    id: 'saas-trading',
    driveId: '1miSB-n9Ti-dodwUamTFCKqPiqnmOKZWi',
    poster: 'https://lh3.googleusercontent.com/d/1miSB-n9Ti-dodwUamTFCKqPiqnmOKZWi=w800',
    title: 'Real-Time Trading Analytics Suite',
    category: 'saas',
    categoryLabel: 'SaaS & Product',
    aspect: '16/9',
    videoSrc: '/videos/saas/trading-saas.mp4',
    duration: '0:48',
    client: 'PulseTrade Pro',
    views: '780K Impressions',
    retention: '82% Retention',
    featured: false,
    tagline: 'High-frequency financial dashboard demonstration with glowing candlestick charts.',
    description: 'An adrenaline-fueled fintech demonstration emphasizing sub-millisecond execution, responsive charting, and multi-monitor setup workflows.',
    deliverables: ['Chart Animation', 'Glow FX & Shaders', 'Audio Risers', 'Kinetic Typography'],
    tools: ['After Effects', 'Premiere Pro', 'DaVinci Resolve']
  },

  // --- SHORT-FORM & VIRAL (9:16 Vertical) ---
  {
    id: 'short-founder',
    driveId: '1clzPn2mUrAeNxPmFJ_SIsA4_B8FXMpbU',
    poster: 'https://lh3.googleusercontent.com/d/1clzPn2mUrAeNxPmFJ_SIsA4_B8FXMpbU=w800',
    title: 'From 0 to 7 Figures: The Founder Dilemma',
    category: 'short',
    categoryLabel: 'Viral Storytelling',
    aspect: '9/16',
    videoSrc: '/videos/short/founder-story.mp4',
    duration: '0:55',
    client: 'Venture Voices',
    views: '1.8M Views',
    retention: '92% 3-sec Hook',
    featured: true,
    tagline: 'Viral narrative reel with photo transitions, archival footage, and emotional music pacing.',
    description: 'Crafted with our proprietary 3-second hook structure. We utilized dynamic paper-rip animations, subtle zooms, bold word-by-word captions, and cinematic sound risers to sustain retention throughout.',
    deliverables: ['Hook Engineering', 'Dynamic Subtitles', 'Sound Design SFX', 'Archival B-Roll'],
    tools: ['Premiere Pro', 'After Effects', 'Photoshop']
  },
  {
    id: 'short-finance',
    driveId: '108JyzoyflO5LYFt_Dr973mMvfNSo4ZoF',
    poster: 'https://lh3.googleusercontent.com/d/108JyzoyflO5LYFt_Dr973mMvfNSo4ZoF=w800',
    title: 'The Compound Wealth Formula',
    category: 'short',
    categoryLabel: 'Fintech Short',
    aspect: '9/16',
    videoSrc: '/videos/short/finance-investments.mp4',
    duration: '0:48',
    client: 'Apex Capital',
    views: '1.2M Views',
    retention: '86% Retention',
    featured: true,
    tagline: 'Financial education reel with sleek 2D chart overlays and crisp kinetic text.',
    description: 'Turned dry financial concepts into an engaging visual explainer. Uses synchronized audio cues for numbers, animated stock tickers, and high-contrast color grading.',
    deliverables: ['2D Motion Design', 'Word-by-Word Captions', 'Sound Ducking', 'Color Grading'],
    tools: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'short-doctor',
    driveId: '19gwUaSvOlLFbYaaKBMCrNlRs1W204nVz',
    poster: 'https://lh3.googleusercontent.com/d/19gwUaSvOlLFbYaaKBMCrNlRs1W204nVz=w800',
    title: 'Medical Truths & Healthcare Insights',
    category: 'short',
    categoryLabel: 'Educational Reel',
    aspect: '9/16',
    videoSrc: '/videos/short/doctor-educational.mp4',
    duration: '0:44',
    client: 'Dr. Insight Health',
    views: '940K Views',
    retention: '88% Retention',
    featured: false,
    tagline: 'High-authority healthcare reel with animated diagrams and clean typography.',
    description: 'Designed to build immediate clinical credibility. Integrates subtle visual callouts, medical iconography, and crisp speech clarity enhancement.',
    deliverables: ['Graphic Callouts', 'Speech Denoising', 'Dynamic Zoom', 'Engaging Captions'],
    tools: ['Premiere Pro', 'Audition', 'After Effects']
  },
  {
    id: 'short-kashmir',
    driveId: '1mykGxV8IVmxge4SrXlDD8E37UbbxRklM',
    poster: 'https://lh3.googleusercontent.com/d/1mykGxV8IVmxge4SrXlDD8E37UbbxRklM=w800',
    title: 'Cinematic Travel: Explore Kashmir',
    category: 'short',
    categoryLabel: 'Cinematic Lifestyle',
    aspect: '9/16',
    videoSrc: '/videos/short/explore-kashmir.mp4',
    duration: '0:36',
    client: 'Wanderlust Media',
    views: '2.4M Views',
    retention: '94% Retention',
    featured: true,
    tagline: 'Breathtaking travel narrative with seamless speed-ramps, whip pans, and natural soundscapes.',
    description: 'An emotional visual journey across snow-capped peaks and serene valleys. Graded using custom 35mm film emulation LUTs, layered with immersive nature foley and atmospheric audio.',
    deliverables: ['Speed Ramping', 'Custom Film LUTs', 'Nature Foley & SFX', 'Seamless Transitions'],
    tools: ['DaVinci Resolve', 'Premiere Pro']
  },
  {
    id: 'short-aec',
    driveId: '1J9zKbPKmeuP6C7HpMN1tJM5lhN8rgkWE',
    poster: 'https://lh3.googleusercontent.com/d/1J9zKbPKmeuP6C7HpMN1tJM5lhN8rgkWE=w800',
    title: 'Global Education & Career Summit',
    category: 'short',
    categoryLabel: 'Event Promo',
    aspect: '9/16',
    videoSrc: '/videos/short/aec-fair.mp4',
    duration: '0:32',
    client: 'AEC Global Fair',
    views: '480K Views',
    retention: '81% Retention',
    featured: false,
    tagline: 'High-energy event recap with rhythmic jump cuts and vibrant attendee reactions.',
    description: 'Capturing youth energy and inspiration with rapid beat synchronization, crowd ambiance, kinetic text overlays, and high-converting event call-to-action.',
    deliverables: ['Beat-Matched Cuts', 'Event Highlights', 'Kinetic Overlays', 'Audio Balancing'],
    tools: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'short-navratri',
    driveId: '1WY9r8BKP02JB_eIrL9hdo9CL6-v8Ka6X',
    poster: 'https://lh3.googleusercontent.com/d/1WY9r8BKP02JB_eIrL9hdo9CL6-v8Ka6X=w800',
    title: 'Festive Energy & Cultural Motion',
    category: 'short',
    categoryLabel: 'Cultural & Motion',
    aspect: '9/16',
    videoSrc: '/videos/short/navratri-motion.mp4',
    duration: '0:28',
    client: 'Culture Fest India',
    views: '720K Views',
    retention: '85% Retention',
    featured: false,
    tagline: 'Vibrant motion graphics celebrating festive traditions with synchronized percussion beats.',
    description: 'Color-rich animation that marries traditional cultural motifs with ultra-contemporary motion design and bass-boosted folk beats.',
    deliverables: ['Color Grading', 'Beat-Synced Cuts', 'Text Animation', 'Bass Enhancement'],
    tools: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'short-cinematic-02',
    driveId: '1Eo8oxQoWywtq2F9hCQA_QGkPYX-BsYo6',
    poster: 'https://lh3.googleusercontent.com/d/1Eo8oxQoWywtq2F9hCQA_QGkPYX-BsYo6=w800',
    title: 'Urban Commercial Spot: Street Pulse',
    category: 'short',
    categoryLabel: 'Commercial Short',
    aspect: '9/16',
    videoSrc: '/videos/short/cinematic-cut-02.mp4',
    duration: '0:45',
    client: 'Apex Apparel',
    views: '1.5M Views',
    retention: '89% Retention',
    featured: false,
    tagline: 'Punchy commercial reel with seamless match cuts, sound risers, and high-contrast color.',
    description: 'A masterclass in modern commercial editing: whip zooms, sound risers, textural grain, and precise product reveals designed for high conversion.',
    deliverables: ['Match Cuts', 'Sound Risers', 'Textured Grain', 'Product Highlights'],
    tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects']
  },

  // --- PODCAST REELS (9:16 Vertical) ---
  {
    id: 'podcast-clip-01',
    driveId: '1YsVV-2ZekX5sc7UGOVCfOmxoaBKBHg08',
    poster: 'https://lh3.googleusercontent.com/d/1YsVV-2ZekX5sc7UGOVCfOmxoaBKBHg08=w800',
    title: 'The Unfiltered Truth: Podcast Clip',
    category: 'podcast',
    categoryLabel: 'Podcast Reel',
    aspect: '9/16',
    videoSrc: '/videos/podcast/podcast-clip.mp4',
    duration: '0:42',
    client: 'The Deep Dive Show',
    views: '1.4M Views',
    retention: '90% Retention',
    featured: true,
    tagline: 'Multi-cam dynamic zoom cut with highlighted subtitle phrases and sound impacts.',
    description: 'Extracted the most punchy 40 seconds from a 2-hour longform recording. Applied face tracking, intelligent speech punch-in, colored subtitles, and ambient background music.',
    deliverables: ['Multi-Cam Switching', 'Speech Zoom In', 'Auto-Captions Styled', 'Audio Mastering'],
    tools: ['Premiere Pro', 'After Effects', 'Audition']
  },
  {
    id: 'podcast-mahabharata',
    driveId: '1CLKIoQuQYPz6oI6SHrzVHuX6cYcH1B-S',
    poster: 'https://lh3.googleusercontent.com/d/1CLKIoQuQYPz6oI6SHrzVHuX6cYcH1B-S=w800',
    title: 'Ancient Warfare Strategies in Modern Times',
    category: 'podcast',
    categoryLabel: 'Podcast Reel',
    aspect: '9/16',
    videoSrc: '/videos/podcast/mahabharata-strategy.mp4',
    duration: '1:05',
    client: 'Myth & Strategy',
    views: '3.1M Views',
    retention: '93% Retention',
    featured: true,
    tagline: 'Dramatic podcast storytelling reel with historical overlays, suspense music, and deep vocal warmth.',
    description: 'Captivates viewers through tense audio pacing, dramatic war imagery cut-ins, and precision vocal EQ that makes the speaker sound deeply resonant and authoritative.',
    deliverables: ['Historical B-Roll Integration', 'Dramatic Sound FX', 'Vocal EQ & Warmth', 'Kinetic Typography'],
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve']
  },
  {
    id: 'podcast-actor',
    driveId: '19P2eq5VwE1OV6gmmTkLpKjKf4fctiuFY',
    poster: 'https://lh3.googleusercontent.com/d/19P2eq5VwE1OV6gmmTkLpKjKf4fctiuFY=w800',
    title: 'Remembering the Comedy Legend',
    category: 'podcast',
    categoryLabel: 'Podcast Reel',
    aspect: '9/16',
    videoSrc: '/videos/podcast/legendary-actor-timing.mp4',
    duration: '0:58',
    client: 'Cinema Chronicles',
    views: '2.1M Views',
    retention: '91% Retention',
    featured: false,
    tagline: 'Nostalgic interview segment with archival footage cuts and emotional audio transition.',
    description: 'Honoring iconic comedy timing with seamless archival cuts, subtle sound dips, and warm grading that transports the viewer into the nostalgia.',
    deliverables: ['Archival Cut-Ins', 'Audio Restoration', 'Color Grading', 'Subtitle Highlighting'],
    tools: ['Premiere Pro', 'Audition']
  },
  {
    id: 'podcast-sequence-02',
    driveId: '1QU0W-iLamToaJmnGEo5Zrl576mXDCpf8',
    poster: 'https://lh3.googleusercontent.com/d/1QU0W-iLamToaJmnGEo5Zrl576mXDCpf8=w800',
    title: 'Mindset & Tactical Execution',
    category: 'podcast',
    categoryLabel: 'Podcast Reel',
    aspect: '9/16',
    videoSrc: '/videos/podcast/sequence-02.mp4',
    duration: '0:50',
    client: 'High Impact Founder',
    views: '780K Views',
    retention: '87% Retention',
    featured: false,
    tagline: 'High-intensity conversation cut with punch zooms, dark vignette, and animated key words.',
    description: 'Takes a candid conversation and elevates it into a motivational powerhouse with punchy zoom cuts, subtle screen shakes on key words, and crisp sound drops.',
    deliverables: ['Punch Zooms', 'Screen Shakes', 'Animated Words', 'Music Ducking'],
    tools: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'podcast-talk-06',
    driveId: '1BmUVlVKJy1x-rsgJPDS21VhSSq2giDsI',
    poster: 'https://lh3.googleusercontent.com/d/1BmUVlVKJy1x-rsgJPDS21VhSSq2giDsI=w800',
    title: 'Raw Truth on Scaling Companies',
    category: 'podcast',
    categoryLabel: 'Podcast Reel',
    aspect: '9/16',
    videoSrc: '/videos/podcast/podcast-talk-06.mp4',
    duration: '0:35',
    client: 'Scale Fast Podcast',
    views: '650K Views',
    retention: '84% Retention',
    featured: false,
    tagline: 'Punchy founder quote breakdown with retention-maximizing cadence and sound design.',
    description: 'Optimized for social scrolling. Fast-paced subtitle animations and clear speech isolation ensure high engagement even when muted.',
    deliverables: ['Speech Isolation', 'Karaoke Subtitles', 'Sound Accents', 'Vocal Polishing'],
    tools: ['Premiere Pro', 'Audition']
  },
  {
    id: 'podcast-sample-talk',
    driveId: '1FkH1S6dDB08HudSjdVLfdSfbUO9-UXTS',
    poster: 'https://lh3.googleusercontent.com/d/1FkH1S6dDB08HudSjdVLfdSfbUO9-UXTS=w800',
    title: 'Mastering The Creative Flow State',
    category: 'podcast',
    categoryLabel: 'Podcast Reel',
    aspect: '9/16',
    videoSrc: '/videos/podcast/sample-talk.mp4',
    duration: '0:52',
    client: 'Studio Sessions',
    views: '890K Views',
    retention: '88% Retention',
    featured: false,
    tagline: 'Multi-angle studio edit with balanced warm grading, clean captions, and seamless pacing.',
    description: 'Full studio audio mastering, multi-camera angle synchronization, and aesthetic visual styling that elevates casual podcast talk into premium masterclass content.',
    deliverables: ['Multi-Angle Sync', 'Vocal Compression', 'Custom Typography', 'Color Balancing'],
    tools: ['Premiere Pro', 'DaVinci Resolve', 'Audition']
  },

  // --- AI & MOTION FX (9:16 Vertical) ---
  {
    id: 'ai-comic-style',
    driveId: '121ZI0-_MKKhe22uBi0qc3mA8rODhu8Jq',
    poster: 'https://lh3.googleusercontent.com/d/121ZI0-_MKKhe22uBi0qc3mA8rODhu8Jq=w800',
    title: 'Cyberpunk Comic Style Transformation',
    category: 'ai',
    categoryLabel: 'AI & Motion FX',
    aspect: '9/16',
    videoSrc: '/videos/ai/comic-style.mp4',
    duration: '0:38',
    client: 'NeoTokyo Media',
    views: '1.4M Views',
    retention: '95% Retention',
    featured: true,
    tagline: 'AI halftone comic visuals blended with neon motion graphics and futuristic sound fx.',
    description: 'Pioneering hybrid AI editing. We fused generative comic-style frame morphing with high-precision After Effects 3D text and synthesized cyberpunk sound effects.',
    deliverables: ['AI Style Transfer', '3D Kinetic Titles', 'Cyberpunk SFX', 'Color Grading'],
    tools: ['Midjourney AI', 'After Effects', 'Premiere Pro', 'Topaz Video AI']
  },
  {
    id: 'ai-eat-smart',
    driveId: '1jk9TAtOM5RtJ1Ocqt7qEZB6d5u1XxPhd',
    poster: 'https://lh3.googleusercontent.com/d/1jk9TAtOM5RtJ1Ocqt7qEZB6d5u1XxPhd=w800',
    title: 'Eat Smart, Track Smart: PingTop App',
    category: 'ai',
    categoryLabel: 'AI & Motion FX',
    aspect: '9/16',
    videoSrc: '/videos/ai/eat-smart-pingtop.mp4',
    duration: '0:30',
    client: 'PingTop Health',
    views: '650K Views',
    retention: '89% Retention',
    featured: false,
    tagline: 'Fluid health lifestyle mobile promo with modern UI animations and crisp micro-interactions.',
    description: 'Dynamic UI tracking, 3D nutrition counter bubbles, and fast-paced sound design that demonstrates instant app benefits in under 30 seconds.',
    deliverables: ['UI Tracking', 'Micro-Interactions', 'Sound Cues', 'Color Grading'],
    tools: ['After Effects', 'Premiere Pro']
  },
  {
    id: 'ai-did-you-know',
    driveId: '1qn21dLmGWqF8nmUJUMHfqoXk0msr4kBj',
    poster: 'https://lh3.googleusercontent.com/d/1qn21dLmGWqF8nmUJUMHfqoXk0msr4kBj=w800',
    title: 'Did You Know? High-Tech Infotainment',
    category: 'ai',
    categoryLabel: 'AI & Motion FX',
    aspect: '9/16',
    videoSrc: '/videos/ai/did-you-know.mp4',
    duration: '0:45',
    client: 'Future Science Lab',
    views: '890K Views',
    retention: '88% Retention',
    featured: false,
    tagline: 'Hook-driven infotainment reel with AI visual elements and fast kinetic motion.',
    description: 'Designed to arrest attention in the first frame. Features generative 3D visual illustrations, animated statistics, and sound risers.',
    deliverables: ['Generative Illustrations', 'Data Motion Graphics', 'Audio Risers', 'Dynamic Captions'],
    tools: ['After Effects', 'Premiere Pro', 'Runway Gen-2']
  },
  {
    id: 'ai-coins-pingtop',
    driveId: '1lxQ1m11cVCTK7AXCnBfqMCug2-eDuJwm',
    poster: 'https://lh3.googleusercontent.com/d/1lxQ1m11cVCTK7AXCnBfqMCug2-eDuJwm=w800',
    title: 'Gamified Rewards & Coin Physics',
    category: 'ai',
    categoryLabel: 'AI & Motion FX',
    aspect: '9/16',
    videoSrc: '/videos/ai/coins-pingtop.mp4',
    duration: '0:22',
    client: 'PingTop Rewards',
    views: '510K Views',
    retention: '84% Retention',
    featured: false,
    tagline: 'Gamified reward animations, sound-synced coin impacts, and high conversion CTA.',
    description: 'App gamification showcase with tactile particle physics, sound-synced metallic coin hits, and satisfying progress bar animations.',
    deliverables: ['Particle Physics', 'Sound-Synced FX', 'Tactile UI Haptics', 'Motion Design'],
    tools: ['After Effects', 'Premiere Pro']
  },
  {
    id: 'ai-earn-peacefully',
    driveId: '1m4g3SMQ9RDVjsNgTj9sE72QR1dKT6WGL',
    poster: 'https://lh3.googleusercontent.com/d/1m4g3SMQ9RDVjsNgTj9sE72QR1dKT6WGL=w800',
    title: 'Financial Peace of Mind: Visual Manifesto',
    category: 'ai',
    categoryLabel: 'AI & Motion FX',
    aspect: '9/16',
    videoSrc: '/videos/ai/earn-peacefully.mp4',
    duration: '0:40',
    client: 'Zenith Wealth',
    views: '980K Views',
    retention: '91% Retention',
    featured: false,
    tagline: 'Atmospheric storytelling reel blending ambient AI visuals with emotional narration.',
    description: 'A soothing yet compelling financial manifesto reel using dreamy visual grading, ambient soundscapes, and deliberate typographic pacing.',
    deliverables: ['Ambient Soundscapes', 'Dreamy Grading', 'Typographic Pacing', 'Generative B-Roll'],
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve']
  }
];

export const EDITING_BREAKDOWNS = [
  {
    id: 'hook',
    step: '01',
    title: 'The 3-Second Retention Hook',
    headline: 'Stop The Scroll Instantly',
    badge: 'Engagement Engineering',
    description: 'Over 65% of viewers drop off before second three. We construct visual, psychological, and auditory hooks that make scrolling past virtually impossible.',
    points: [
      'Visual Pattern Interrupt (unexpected motion / angle punch)',
      'Sub-second Sound Riser & Impact hit',
      'Curiosity Gap headline with styled kinetic text',
      'Removal of all dead air, filler words, and intro fluff'
    ],
    metric: '+38% Higher Hook Rate'
  },
  {
    id: 'motion',
    step: '02',
    title: 'Dynamic Motion & Kinetic UI',
    headline: 'Fluid Visual Storytelling',
    badge: 'Motion Graphics',
    description: 'We turn flat screen recordings and boring raw footage into high-end cinematic commercials with custom 3D camera tracks and Figma-to-video UI zooms.',
    points: [
      'Realistic 3D tilt, zoom, and smooth bezier cursor motion',
      'Custom kinetic typography with word-level highlight tracking',
      'Animated infographics, charts, and technical callouts',
      'Seamless match cuts and whip transitions'
    ],
    metric: '4.2x Watch Time Boost'
  },
  {
    id: 'sound',
    step: '03',
    title: 'Studio-Grade Sound Architecture',
    headline: '50% of the Video Is What You Hear',
    badge: 'Sound Design & Mastering',
    description: 'Great sound design is what separates amateur edits from million-view viral reels. Every transition, text reveal, and visual punch is reinforced with hand-crafted sound layers.',
    points: [
      'Multi-layer sound design: whooshes, risers, sub-booms, textured foley',
      'Dynamic audio ducking that keeps voice crystal-clear over music',
      'Vocal warmth mastering: multiband compression & de-essing',
      'Curated royalty-free commercial soundtrack matching brand tempo'
    ],
    metric: '100% Licensed Commercial Audio'
  },
  {
    id: 'color',
    step: '04',
    title: 'DaVinci Film Color Grading',
    headline: 'Cinematic Visual Identity',
    badge: 'Color Science',
    description: 'Raw phone or camera footage often looks flat, muddy, or inconsistent. We grade every frame inside DaVinci Resolve using custom film LUTs and color pipelines.',
    points: [
      'Natural skin-tone preservation and healthy warmth balancing',
      'Film-stock emulation (Kodak 2383 / CineStill tones)',
      'HDR contrast depth and targeted highlight rolls',
      'Cross-clip color unification across different camera angles'
    ],
    metric: 'Broadcast Film Standards'
  }
];

export const SERVICES = [
  {
    icon: 'Monitor',
    title: 'SaaS & Product Demos',
    tag: 'Highest ROI',
    description: 'High-converting product launch films, feature explainers, and interactive walkthroughs that turn casual visitors into paying customers.',
    features: ['Figma-to-video UI animations', 'Smooth cursor tracking & physics', 'Professional voiceover sync', '4K 60FPS delivery'],
    turnaround: '3-5 Business Days'
  },
  {
    icon: 'Smartphone',
    title: 'Viral Short-Form Content',
    tag: 'Growth Engine',
    description: 'TikToks, Instagram Reels, and YouTube Shorts engineered specifically for maximum algorithmic retention and audience growth.',
    features: ['3-Second Hook optimization', 'Dynamic kinetic typography', 'Sound design & SFX risers', 'Viral B-roll & memes integration'],
    turnaround: '24-48 Hours'
  },
  {
    icon: 'Mic',
    title: 'Podcast Repurposing',
    tag: 'Long-to-Short',
    description: 'Transform 60+ minute podcast episodes into 15-20 viral micro-clips with multi-cam switching, auto-zooms, and highlight captions.',
    features: ['Multi-angle camera switching', 'Dynamic punch-zooms on speakers', 'Captions with word-level highlights', 'Audio noise cleanup & mastering'],
    turnaround: '48 Hours'
  },
  {
    icon: 'Sparkles',
    title: 'AI & Hybrid Motion Graphics',
    tag: 'Cutting Edge',
    description: 'Futuristic hybrid edits combining generative AI visuals, stylized anime/comic filters, 3D elements, and cyberpunk aesthetics.',
    features: ['Generative AI visual b-roll', 'Custom comic & 3D styling', 'Synth sound design & glitch FX', 'Topaz 4K AI upscaling'],
    turnaround: '3-4 Business Days'
  }
];

export const PRICING_PACKAGES = [
  {
    id: 'pack-10',
    name: '10 Video Growth Pack',
    badge: 'Starter Engine',
    price: '₹13,999',
    period: '10 videos',
    perVideo: '₹1,400 / video',
    description: 'Perfect for founders and creators looking to build consistent organic momentum with 10 high-retention short videos.',
    features: [
      '10 High-Retention Videos (Under 1 Min Each)',
      'Optimized for Instagram Reels, Shorts & TikTok',
      'Proprietary 3-Second Hook Engineering',
      'Word-by-Word Animated Kinetic Subtitles',
      'Studio Sound Design & Dynamic SFX Risers',
      'DaVinci Resolve Film Color Science',
      '100% Commercial Licensed Music Included',
      '2 Rounds of Time-Stamped Revisions per Video',
      '48-Hour Fast Batch Delivery'
    ],
    popular: false,
    cta: 'Select 10 Video Pack'
  },
  {
    id: 'pack-20',
    name: '20 Video Scale Pack',
    badge: 'Most Popular',
    price: '₹27,999',
    period: '20 videos',
    perVideo: '₹1,400 / video',
    description: 'The complete monthly growth pipeline for brands and creators aiming for daily posting and maximum viral reach.',
    features: [
      '20 High-Retention Videos (Under 1 Min Each)',
      'Optimized for Instagram Reels, Shorts & TikTok',
      'Full Script Pacing & Hook Optimization',
      'Advanced Motion Graphics & Figma UI Overlays',
      'Podcast / Longform Micro-Clip Repurposing',
      'Mastered Vocal Clarity & Dynamic Music Ducking',
      'Dedicated Senior Editor & Priority Queue',
      'Unlimited Revisions Until 100% Satisfied',
      'Rapid 24-48 Hour Turnaround'
    ],
    popular: true,
    cta: 'Select 20 Video Pack'
  },
  {
    id: 'custom-saas',
    name: 'SaaS Launch & Custom Retainer',
    badge: 'Enterprise & SaaS',
    price: 'Custom',
    period: 'project basis',
    perVideo: 'Tailored Scope',
    description: 'For tech companies needing high-converting SaaS product walkthroughs (16:9), custom 3D motion, or multi-brand channels.',
    features: [
      'Full 60-90s SaaS Product Demo Video (16:9)',
      'Vertical 9:16 Cutdowns for Paid Ads & Social',
      'Figma & App UI Kinetic Motion Graphics',
      'Smooth Cursor Physics & Screen Zoom Tracks',
      'Studio Voiceover Integration & Audio Mastering',
      'Dedicated Private Slack / Telegram Channel',
      'Weekly Strategy & Performance Review Calls',
      'Custom Delivery Timeline'
    ],
    popular: false,
    cta: 'Request Custom Scope'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'Dzyen Studio completely transformed our SaaS landing page video. Sign-ups increased by 240% within the first two weeks of launching the new edit. The UI motion and sound design are unrivaled.',
    author: 'Alex Vance',
    role: 'Founder & CEO, CloudSync',
    metric: '+240% Sign-up Lift',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    quote: 'Our podcast was averaging 5,000 views per episode. When Dzyen Studio took over our short-form repurposing, our first three reels broke 1.2M views on Instagram. They know hook engineering down to a science.',
    author: 'Marcus Chen',
    role: 'Host, The Builder Protocol',
    metric: '1.2M+ Viral Views',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    quote: 'Fastest turnaround and highest production quality I have seen in 8 years of marketing. No endless back-and-forth—they hit the nail on the head on V1 almost every single time.',
    author: 'Elena Rostova',
    role: 'Head of Growth, FinScale',
    metric: '48h Delivery Time',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  }
];

export const FAQS = [
  {
    q: 'How does footage submission and workflow work?',
    a: 'We make it effortless. You simply drop your raw footage, screen recordings, or podcast files into a shared Google Drive, Dropbox, or Frame.io folder. We handle the indexing, cutting, motion graphics, audio mastering, and color grading.'
  },
  {
    q: 'What is your typical turnaround time?',
    a: 'Short-form reels and podcast clips are typically delivered within 24 to 48 hours. Full SaaS walkthroughs and commercial product videos take 3 to 5 business days.'
  },
  {
    q: 'How do revisions work?',
    a: 'All packages include structured revisions. We use Frame.io for time-stamped feedback, allowing you to click on the exact second in the video and leave your comment. We revise until you are completely satisfied.'
  },
  {
    q: 'Are music and sound effects licensed for commercial use?',
    a: 'Yes, 100%. We only use fully licensed commercial music from top libraries (Artlist, Musicbed, Epidemic) and premium SFX sound suites. You will never face copyright strikes or monetization issues.'
  },
  {
    q: 'What tools and software do you use?',
    a: 'Our core stack includes Adobe Premiere Pro for rhythmic cutting, After Effects for kinetic motion graphics, DaVinci Resolve Studio for film-grade color science, Adobe Audition for audio mastering, and Blender/Midjourney/Topaz AI for specialized hybrid visual sequences.'
  }
];
