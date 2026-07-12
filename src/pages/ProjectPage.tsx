import { useParams, useNavigate } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { getProjectBySlug } from '../data/projects';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';
import TechBadge from '../components/TechBadge';

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || '');
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [revealedSections, setRevealedSections] = useState<string[]>([]);

  useEffect(() => {
    if (!project) return;
    window.scrollTo(0, 0);
    setHeroVisible(true);
    setRevealedSections([]);
  }, [project]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section');
            if (id) {
              setRevealedSections((prev) => [...new Set([...prev, id])]);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F7F3]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0A0A0A] mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-full bg-[#1E40AF] text-white font-semibold hover:bg-[#16309E] transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const isRevealed = (id: string) => revealedSections.includes(id);

  return (
    <div className="min-h-screen bg-[#F7F7F3]">
      <Navigation />

      {/* Hero Section */}
      <div ref={heroRef} className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumb */}
          <div
            className={`flex items-center gap-2 mb-8 text-sm transition-all duration-700 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button onClick={() => navigate('/')} className="text-[#737373] hover:text-[#1E40AF] transition-colors flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Home
            </button>
            <span className="text-[#E5E5E5]">/</span>
            <button onClick={() => navigate('/#projects')} className="text-[#737373] hover:text-[#1E40AF] transition-colors">
              Projects
            </button>
            <span className="text-[#E5E5E5]">/</span>
            <span className="text-[#1E40AF] font-medium">{project.name}</span>
          </div>

          {/* Project Title & Meta */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start mb-12">
            <div>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A0A0A] tracking-tight leading-tight mb-6 transition-all duration-700 delay-100 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {project.name}
              </h1>
              <p
                className={`text-lg text-[#525252] leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {project.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div
              className={`flex flex-col gap-3 transition-all duration-700 delay-300 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0A0A0A] text-white font-semibold text-sm hover:bg-[#1E40AF] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 min-w-[180px]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View on GitHub
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#E5E5E5] text-[#0A0A0A] font-semibold text-sm hover:border-[#0A0A0A] hover:bg-white transition-all duration-300 min-w-[180px]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Live Demo
              </a>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div
            className={`flex flex-wrap gap-2 mb-12 transition-all duration-700 delay-400 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {project.techStack.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E5E5] text-xs font-semibold text-[#525252] hover:border-[#1E40AF]/30 hover:bg-[#DBEAFE] hover:text-[#1E40AF] transition-all duration-200 cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: tech.color }} />
                {tech.name}
              </span>
            ))}
          </div>

          {/* Banner Image */}
          <div
            className={`relative rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-xl transition-all duration-1000 delay-300 ${
              heroVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.97]'
            }`}
          >
            <img
              src={project.banner}
              alt={`${project.name} preview`}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-[900px] mx-auto px-6 pb-24">
        {/* Overview */}
        <section
          data-section="overview"
          className={`mb-20 transition-all duration-700 ${
            isRevealed('overview') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-[#1E40AF]" />
            <span className="text-xs font-bold text-[#1E40AF] uppercase tracking-[0.12em]">Overview</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6 tracking-tight">What & Why</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
              <h3 className="text-sm font-bold text-[#737373] uppercase tracking-wider mb-3">What it does</h3>
              <p className="text-[#525252] leading-relaxed">{project.overview.what}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
              <h3 className="text-sm font-bold text-[#737373] uppercase tracking-wider mb-3">Why it was built</h3>
              <p className="text-[#525252] leading-relaxed">{project.overview.why}</p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-xl md:text-2xl font-bold text-[#0A0A0A] mb-6 tracking-tight">Key Features</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.overview.features.map((feature, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5] hover:border-[#1E40AF]/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-[#F7F7F3] flex items-center justify-center mb-4 group-hover:bg-[#DBEAFE] transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h4 className="font-semibold text-[#0A0A0A] leading-snug">{feature}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem */}
        <section
          data-section="problem"
          className={`mb-20 transition-all duration-700 ${
            isRevealed('problem') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs font-bold text-red-500 uppercase tracking-[0.12em]">The Problem</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6 tracking-tight">What Problem Was Solved</h2>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <p className="text-[#525252] leading-relaxed text-lg">{project.problem}</p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section
          data-section="solution"
          className={`mb-20 transition-all duration-700 ${
            isRevealed('solution') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs font-bold text-green-500 uppercase tracking-[0.12em]">The Solution</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6 tracking-tight">Technical Implementation</h2>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              </div>
              <p className="text-[#525252] leading-relaxed text-lg">{project.solution}</p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section
          data-section="techstack"
          className={`mb-20 transition-all duration-700 ${
            isRevealed('techstack') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-[#1E40AF]" />
            <span className="text-xs font-bold text-[#1E40AF] uppercase tracking-[0.12em]">Tech Stack</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-8 tracking-tight">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => (
              <TechBadge key={tech.name} tech={tech} index={i} />
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section
          data-section="challenges"
          className={`mb-20 transition-all duration-700 ${
            isRevealed('challenges') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-xs font-bold text-amber-500 uppercase tracking-[0.12em]">Challenges</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-8 tracking-tight">Major Technical Challenges</h2>
          <div className="space-y-6">
            {project.challenges.map((challenge, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 md:p-8 border border-[#E5E5E5] hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-sm font-bold text-amber-600 group-hover:bg-amber-100 transition-colors">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0A0A0A] mb-2">{challenge.title}</h3>
                    <p className="text-[#525252] leading-relaxed mb-4">{challenge.description}</p>
                    <div className="bg-[#F7F7F3] rounded-xl p-4 border border-[#F0F0F0]">
                      <div className="flex items-start gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2" className="mt-1 flex-shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <span className="text-sm text-[#525252] leading-relaxed"><strong className="text-[#0A0A0A]">Solution:</strong> {challenge.solution}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        {project.architecture && (
          <section
            data-section="architecture"
            className={`mb-20 transition-all duration-700 ${
              isRevealed('architecture') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.12em]">Architecture</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6 tracking-tight">System Architecture</h2>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                </div>
                <p className="text-[#525252] leading-relaxed text-lg">{project.architecture.description}</p>
              </div>
              <ul className="space-y-4">
                {project.architecture.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/60 p-4 rounded-xl border border-blue-100/50">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-[#525252] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Learnings */}
        <section
          data-section="learnings"
          className={`mb-20 transition-all duration-700 ${
            isRevealed('learnings') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-xs font-bold text-purple-500 uppercase tracking-[0.12em]">Learnings</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-8 tracking-tight">Key Takeaways</h2>
          <div className="grid gap-4">
            {project.learnings.map((learning, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[#E5E5E5] hover:border-purple-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <p className="text-[#525252] leading-relaxed">{learning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section
          data-section="gallery"
          className={`mb-20 transition-all duration-700 ${
            isRevealed('gallery') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <ImageGallery images={project.gallery} />
        </section>

        {/* Next Project Navigation */}
        <section className="flex items-center justify-between pt-12 border-t border-[#E5E5E5]">
          <button
            onClick={() => navigate('/#projects')}
            className="flex items-center gap-2 text-sm font-medium text-[#737373] hover:text-[#1E40AF] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
            All Projects
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A0A0A] text-white text-sm font-semibold hover:bg-[#1E40AF] transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            View Source
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
