import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { projects } from '../data/projects';
import { getTechIcon } from '../data/techIcons';

/* ─── Reusable Scroll-Reveal Wrapper ─── */
function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Section Divider ─── */
function SectionDivider() {
  return <div className="h-px bg-[#E5E5E5]" />;
}

/* ─── Section Label ─── */
function SectionLabel({ text, color = '#1E40AF' }: { text: string; color?: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="inline-block w-2 h-2 rounded-full" style={{ background: color }} />
      <span className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color }}>{text}</span>
    </div>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  const [codeLinesVisible, setCodeLinesVisible] = useState<number[]>([]);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setCodeLinesVisible((p) => [...p, 1]), 1200),
      setTimeout(() => setCodeLinesVisible((p) => [...p, 2]), 1500),
      setTimeout(() => setCodeLinesVisible((p) => [...p, 3]), 1800),
      setTimeout(() => setCodeLinesVisible((p) => [...p, 4]), 2100),
      setTimeout(() => setCodeLinesVisible((p) => [...p, 5]), 2400),
      setTimeout(() => setCodeLinesVisible((p) => [...p, 6]), 2700),
      setTimeout(() => setCodeLinesVisible((p) => [...p, 7]), 3000),
      setTimeout(() => setCodeLinesVisible((p) => [...p, 8]), 3300),
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="pt-20 pb-8 px-4 sm:min-h-screen sm:flex sm:items-center sm:px-6 sm:pt-32 sm:pb-16 relative overflow-hidden" id="home">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Tag */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2.5 bg-white border border-[#E5E5E5] rounded-full text-xs sm:text-sm font-medium text-[#525252] mb-6 sm:mb-8 shadow-sm"
              style={{ animation: 'fadeUp 0.7s ease 0.1s forwards', opacity: 0, transform: 'translateY(16px)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Software Developer Intern at SAC ISRO
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.15] tracking-tight mb-6">
              <span className="block" style={{ animation: 'fadeUp 0.8s ease 0.15s forwards', opacity: 0, transform: 'translateY(24px)' }}>
                Hi, I'm Himanshu Swami
              </span>
              <span className="block" style={{ animation: 'fadeUp 0.8s ease 0.3s forwards', opacity: 0, transform: 'translateY(24px)' }}>
                I build scalable
              </span>
              <span className="block text-[#1E40AF]" style={{ animation: 'fadeUp 0.8s ease 0.45s forwards', opacity: 0, transform: 'translateY(24px)' }}>
                software & systems
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="text-sm sm:text-base md:text-lg text-[#525252] max-w-[520px] leading-relaxed mb-8"
              style={{ animation: 'fadeUp 0.8s ease 0.5s forwards', opacity: 0, transform: 'translateY(16px)' }}
            >
              Software Developer with experience in Full Stack Development, Networking, Cryptography, and Quantum Key Distribution Networks. Currently working as a Software Development Intern at ISRO SAC.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 mb-8 sm:gap-3.5 sm:mb-10"
              style={{ animation: 'fadeUp 0.8s ease 0.65s forwards', opacity: 0, transform: 'translateY(16px)' }}
            >
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-[#0A0A0A] text-white font-semibold text-xs sm:text-sm hover:bg-[#1E40AF] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                View Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full border border-[#E5E5E5] text-[#0A0A0A] font-semibold text-xs sm:text-sm hover:border-[#0A0A0A] hover:bg-white transition-all duration-300">
                Get in Touch
              </button>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-2 sm:gap-3"
              style={{ animation: 'fadeUp 0.8s ease 0.8s forwards', opacity: 0, transform: 'translateY(16px)' }}
            >
              {[
                { value: '9.75', label: 'CGPA' },
                { value: '#1', label: 'Department Rank' },
                { value: 'SAC, ISRO', label: 'Intern' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 sm:px-6 sm:py-4 min-w-[100px] sm:min-w-[120px] hover:-translate-y-1 hover:shadow-lg hover:border-[#1E40AF] transition-all duration-300 cursor-default"
                >
                  <div className="text-lg sm:text-2xl font-extrabold text-[#0A0A0A] leading-none mb-1">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-[#737373] font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - VS Code Laptop Animation */}
          <div
            className="hidden lg:flex items-center justify-center perspective-[1400px]"
            style={{ animation: 'fadeUp 1s ease 0.4s forwards', opacity: 0 }}
          >
            <div className="relative" style={{ animation: 'laptopFloat 7s ease-in-out infinite' }}>
              {/* Screen */}
              <div className="relative w-[460px] bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-[18px] p-2.5 pb-1.5 shadow-[0_25px_70px_rgba(0,0,0,0.18),0_10px_30px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.4)]">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-black/20 rounded-b" />
                <div className="w-full h-[280px] bg-[#1e1e2e] rounded-[10px] overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                  {/* VS Code Header */}
                  <div className="flex items-center h-9 bg-[#181825] border-b border-[#2a2a3c] px-2">
                    <div className="flex gap-1.5 mr-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex gap-0.5">
                      <div className="flex items-center gap-1.5 px-3 h-9 bg-[#1e1e2e] border-t-2 border-[#1E40AF] text-[10px] text-[#6c6c8a]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#f1e05a"><path d="M3 3h18v18H3V3zm14.5 14.5V6h-1v11.5h1zm-3 0V6h-1v11.5h1zm-3 0V6h-1v11.5h1z"/></svg>
                        <span className="text-[#c8c8d8]">himanshu.js</span>
                      </div>
                    </div>
                  </div>
                  {/* VS Code Body */}
                  <div className="flex h-[calc(100%-36px)]">
                    {/* Sidebar */}
                    <div className="w-9 bg-[#181825] border-r border-[#2a2a3c] flex flex-col items-center pt-2 gap-3.5">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8c8d8" strokeWidth="2" className="opacity-100 border-l-2 border-[#1E40AF] -ml-0.5 pl-1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8c8d8" strokeWidth="2" className="opacity-40"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8c8d8" strokeWidth="2" className="opacity-40"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    </div>
                    {/* Editor */}
                    <div className="flex-1 p-4 font-mono text-[11px] leading-7 overflow-hidden">
                      {[
                        { num: 1, code: <><span className="text-[#c792ea]">const</span> <span className="text-[#f78c6c]">himanshu</span> <span className="text-[#89ddff]">=</span> {'{'}</> },
                        { num: 2, code: <><span className="text-[#ffcb6b]">  role</span><span className="text-[#a6accd]">:</span> <span className="text-[#c3e88d]">"Software Developer"</span><span className="text-[#a6accd]">,</span></> },
                        { num: 3, code: <><span className="text-[#ffcb6b]">  intern</span><span className="text-[#a6accd]">:</span> <span className="text-[#c3e88d]">"ISRO"</span><span className="text-[#a6accd]">,</span></> },
                        { num: 4, code: <><span className="text-[#ffcb6b]">  cgpa</span><span className="text-[#a6accd]">:</span> <span className="text-[#f78c6c]">9.75</span><span className="text-[#a6accd]">,</span></> },
                        { num: 5, code: <><span className="text-[#ffcb6b]">  rank</span><span className="text-[#a6accd]">:</span> <span className="text-[#c3e88d]">"#1"</span><span className="text-[#a6accd]">,</span></> },
                        { num: 6, code: <><span className="text-[#ffcb6b]">  focus</span><span className="text-[#a6accd]">:</span> <span className="text-[#c3e88d]">"Quantum Networks"</span><span className="text-[#a6accd]">,</span></> },
                        { num: 7, code: <><span className="text-[#ffcb6b]">  build</span><span className="text-[#a6accd]">:</span> () <span className="text-[#89ddff]">{'=> '}</span><span className="text-[#c3e88d]">"Secure Systems"</span></> },
                        { num: 8, code: <><span className="text-[#a6accd]">{'}'}</span><span className="text-[#a6accd]">;</span><span className="inline-block w-0.5 h-3.5 bg-[#1E40AF] ml-0.5 animate-pulse align-middle" /></> },
                      ].map((line) => (
                        <div
                          key={line.num}
                          className="flex gap-3.5"
                          style={{
                            opacity: codeLinesVisible.includes(line.num) ? 1 : 0,
                            transform: codeLinesVisible.includes(line.num) ? 'translateX(0)' : 'translateX(-6px)',
                            transition: 'all 0.5s ease',
                          }}
                        >
                          <span className="text-[#4a4a5e] min-w-[22px] text-right select-none tabular-nums">{line.num}</span>
                          <span>{line.code}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Base */}
              <div
                className="relative w-[500px] h-[18px] mx-auto rounded-b-[14px] shadow-lg"
                style={{
                  background: 'linear-gradient(180deg, #b8bcc4 0%, #9ca3af 50%, #8b92a0 100%)',
                  animation: 'baseTilt 7s ease-in-out infinite',
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70px] h-[5px] bg-[#7c8290] rounded-b" />
              </div>
              {/* Shadow */}
              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[400px] h-6 rounded-full"
                style={{
                  background: 'radial-gradient(ellipse, rgba(10,10,10,0.10) 0%, transparent 70%)',
                  animation: 'shadowPulse 7s ease-in-out infinite',
                  filter: 'blur(4px)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About Section (with profile image) ─── */
function AboutSection() {
  const facts = [
    { value: '9.75', label: 'CGPA' },
    { value: '#1', label: 'Department Rank' },
    { value: 'ISRO', label: 'SAC Intern' },
    { value: 'B.Tech', label: 'CSE' },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 sm:py-24 bg-white border-y border-[#E5E5E5]" id="about">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-12 items-start">
          {/* Left */}
          <div>
            <RevealSection>
              <SectionLabel text="About" />
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0A0A0A] tracking-tight mb-6">About Me</h2>
              <p className="text-base sm:text-lg text-[#525252] leading-relaxed mb-8">
                Engineer, builder, and lifelong learner passionate about secure systems, software engineering, networking, and emerging technologies.
              </p>
            </RevealSection>
            <RevealSection delay={100}>
              <div className="space-y-4 text-[#525252] leading-relaxed">
                <p>
                  I am a <strong className="text-[#0A0A0A]">Computer Science Engineering</strong> undergraduate with a strong interest in software development, full-stack technologies, networking, distributed systems, and secure communication architectures.
                </p>
                <p>
                  Currently working as a <strong className="text-[#0A0A0A]">Software Development Intern at ISRO Space Applications Centre (SAC)</strong>, contributing to Quantum Key Distribution Network (QKDN) related software systems, backend workflows, technical documentation, and system analysis.
                </p>
                <p>
                  My interests include <strong className="text-[#0A0A0A]">Full Stack Development, Computer Networks, Distributed Systems, Cryptography, Software Engineering, and Quantum Communication Technologies.</strong>
                </p>
              </div>
            </RevealSection>
          </div>

          {/* Right */}
          <div>
            {/* Profile Image */}
            <RevealSection delay={100}>
              <div className="flex justify-center mb-8">
                <div className="relative group">
                  <div className="absolute -inset-1.5 bg-gradient-to-br from-[#1E40AF] via-blue-400 to-[#1E40AF] rounded-full opacity-60 blur-sm group-hover:opacity-80 group-hover:blur-md transition-all duration-500" />
                  <img
                    src="/profile.jpg"
                    alt="Himanshu Swami - Software Developer"
                    className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-[3px] sm:border-4 border-white shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <h3 className="text-xs font-bold text-[#737373] uppercase tracking-wider mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="bg-[#F7F7F3] border border-[#E5E5E5] rounded-xl p-3 sm:p-5 hover:-translate-y-1 hover:shadow-lg hover:border-[#1E40AF] transition-all duration-300 group"
                  >
                    <div className="text-lg sm:text-2xl font-extrabold text-[#0A0A0A] leading-none mb-1 sm:mb-1.5">{f.value}</div>
                    <div className="text-[10px] sm:text-xs text-[#737373] font-medium">{f.label}</div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Experience Section (with ISRO logo) ─── */
function ExperienceSection() {
  return (
    <section className="py-8 px-4 sm:px-6 sm:py-24 bg-[#F7F7F3]" id="experience">
      <div className="max-w-[1200px] mx-auto">
        <RevealSection>
          <div className="mb-8 sm:mb-12">
            <SectionLabel text="Experience" />
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0A0A0A] tracking-tight mb-3">Where I Have Worked</h2>
            <p className="text-lg text-[#525252]">Hands-on experience building systems for next-generation communication technologies.</p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="bg-white rounded-3xl p-4 sm:p-8 md:p-10 border border-[#E5E5E5] relative overflow-hidden max-w-[900px] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#1E40AF] to-blue-500" />
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Left - Content */}
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-1">Software Development Intern</h3>
                  <p className="text-[#1E40AF] font-semibold">ISRO Space Applications Centre (SAC), Ahmedabad</p>
                </div>
                <ul className="space-y-3">
                  {[
                    'Working on Quantum Key Distribution Network (QKDN) related software systems.',
                    'Understanding secure communication architectures and key management workflows.',
                    'Analyzing backend communication and encryption workflows.',
                    'Contributing to technical documentation and system design.',
                    'Collaborating with engineers and researchers on next-generation communication technologies.',
                    'Studying secure communication protocols and distributed system architectures.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#525252] text-sm leading-relaxed">
                      <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#1E40AF]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - ISRO Logo + Timing */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center gap-4 md:pt-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg"
                  alt="ISRO Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="text-xs text-[#737373] px-4 py-2 bg-[#F7F7F3] rounded-full border border-[#E5E5E5] font-medium whitespace-nowrap">
                  June 2026 – Present
                </span>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="bg-white rounded-3xl p-4 sm:p-8 md:p-10 border border-[#E5E5E5] relative overflow-hidden max-w-[900px] mt-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#1E40AF] to-blue-500" />
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Left - Content */}
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-1">Volunteer & Core Team Member</h3>
                  <p className="text-[#1E40AF] font-semibold">TechExtreme 2024 — Gandhinagar University</p>
                </div>
                <ul className="space-y-3">
                  {[
                    'Contributed as a Volunteer and Core Team Member during TechExtreme 2024.',
                    'Assisted in event coordination and planning across multiple technical activities.',
                    'Supported volunteer management and team collaboration workflows.',
                    'Provided technical support for event infrastructure and logistics.',
                    'Helped ensure smooth event execution and attendee experience.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#525252] text-sm leading-relaxed">
                      <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#1E40AF]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - GU Logo + Timing */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center gap-4 md:pt-2">
                <img
                  src="/gu-logo.png"
                  alt="Gandhinagar University Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="text-xs text-[#737373] px-4 py-2 bg-[#F7F7F3] rounded-full border border-[#E5E5E5] font-medium whitespace-nowrap">
                  2024
                </span>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ─── Skills Section (with tech icons) ─── */
function SkillsSection() {
  const skills = [
    { icon: 'Ln', title: 'Languages', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'SQL'] },
    { icon: 'Fe', title: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap'] },
    { icon: 'Be', title: 'Backend', items: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'REST APIs'] },
    { icon: 'Db', title: 'Databases', items: ['MongoDB', 'MySQL', 'Oracle SQL'] },
    { icon: 'Ns', title: 'Networking & Security', items: ['TCP Sockets', 'Client-Server', 'Encryption', 'Cryptography', 'Key Management', 'QKDN'] },
    { icon: 'Tl', title: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'GitHub Copilot'] },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 sm:py-24 bg-white border-y border-[#E5E5E5]" id="skills">
      <div className="max-w-[1200px] mx-auto">
        <RevealSection>
          <div className="mb-12">
            <SectionLabel text="Skills" />
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0A0A0A] tracking-tight mb-3">Technical Expertise</h2>
            <p className="text-lg text-[#525252]">A focused toolkit built for building secure, scalable, and modern software systems.</p>
          </div>
        </RevealSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {skills.map((skill, i) => (
            <RevealSection key={skill.title} delay={i * 80}>
              <div className="bg-[#F7F7F3] border border-[#E5E5E5] rounded-2xl p-4 sm:p-7 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#E5E5E5] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#1E40AF] to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1E40AF] to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                    {skill.icon}
                  </div>
                  <h4 className="font-bold text-[#0A0A0A]">{skill.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => {
                    const iconUrl = getTechIcon(item);
                    return (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#F0F0F0] rounded-md text-xs text-[#525252] font-medium hover:border-[#1E40AF] hover:text-[#1E40AF] hover:bg-[#DBEAFE] transition-all duration-150 cursor-default"
                      >
                        {iconUrl && (
                          <img
                            src={iconUrl}
                            alt={`${item} logo`}
                            className="w-4 h-4 object-contain flex-shrink-0"
                            loading="lazy"
                          />
                        )}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Projects Section ─── */
function ProjectsSection() {
  return (
    <section className="py-8 px-4 sm:px-6 sm:py-24 bg-[#F7F7F3]" id="projects">
      <div className="max-w-[1200px] mx-auto">
        <RevealSection>
          <div className="mb-14">
            <SectionLabel text="Projects" />
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0A0A0A] tracking-tight mb-3">Selected Work</h2>
            <p className="text-lg text-[#525252] max-w-xl">Real-world applications built with modern technologies and security-first architecture. Click any project to explore the full case study.</p>
          </div>
        </RevealSection>

        {/* Project Cards - Premium Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <RevealSection key={project.slug} delay={index * 150}>
              <Link
                to={`/projects/${project.slug}`}
                className="group block bg-white rounded-3xl border border-[#E5E5E5] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-700"
              >
                <div className={`grid ${index % 2 === 0 ? 'md:grid-cols-[1fr_1.1fr]' : 'md:grid-cols-[1.1fr_1fr]'} gap-0`}>
                  {/* Image Side */}
                  <div className={`relative overflow-hidden ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <div className="aspect-[16/10] md:aspect-auto md:h-full">
                      <img
                        src={project.banner}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* View Case Study Badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-[#0A0A0A] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <span>View Case Study</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`p-5 sm:p-8 md:p-10 flex flex-col justify-center ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-[#1E40AF] uppercase tracking-[0.12em]">Case Study</span>
                      <span className="w-8 h-px bg-[#E5E5E5]" />
                      <span className="text-xs text-[#737373]">{project.techStack.length} Technologies</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-3 sm:mb-4 tracking-tight group-hover:text-[#1E40AF] transition-colors duration-300">
                      {project.name}
                    </h3>

                    <p className="text-[#525252] leading-relaxed mb-6">
                      {project.shortSummary}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F7F3] border border-[#F0F0F0] text-xs font-medium text-[#525252]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: tech.color }} />
                          {tech.name}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#F7F7F3] border border-[#F0F0F0] text-xs font-medium text-[#737373]">
                          +{project.techStack.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E40AF] group-hover:gap-3 transition-all duration-300">
                        Explore Project
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Education Section ─── */
function EducationSection() {
  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science Engineering',
      institution: 'Gandhinagar University',
      period: '2023 – 2027',
      highlights: ['CGPA: 9.75', 'Department Rank: #1'],
      logo: '/gu-logo.png',
      current: true,
    },
    {
      degree: 'Higher Secondary Education (Class XII)',
      field: 'Physics, Chemistry, Mathematics (PCM)',
      institution: 'Vedant International School',
      period: 'Completed',
      highlights: [],
      logo: '/vedant-logo.png',
      current: false,
    },
    {
      degree: 'Secondary Education (Class X)',
      field: 'Class X',
      institution: 'Vedant International School',
      period: 'Completed',
      highlights: [],
      logo: '/vedant-logo.png',
      current: false,
    },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 sm:py-24 bg-white border-y border-[#E5E5E5]" id="education">
      <div className="max-w-[1200px] mx-auto">
        <RevealSection>
          <div className="mb-12">
            <SectionLabel text="Education" />
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0A0A0A] tracking-tight mb-3">Education</h2>
            <p className="text-lg text-[#525252]">Academic journey and milestones in Computer Science Engineering.</p>
          </div>
        </RevealSection>

        <div className="relative max-w-[800px]">
          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#1E40AF] via-[#1E40AF]/40 to-transparent" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <RevealSection key={edu.degree} delay={i * 120}>
                <div className="relative pl-[44px] md:pl-20">
                  {/* Timeline Dot */}
                  <div className={`absolute left-[12.5px] md:left-[24.5px] top-6 w-4 h-4 rounded-full border-[3px] border-white shadow-md z-10 ${
                    edu.current
                      ? 'bg-[#1E40AF] shadow-[0_0_0_4px_rgba(30,64,175,0.2)]'
                      : 'bg-[#E5E5E5]'
                  }`} />

                  {/* Card */}
                  <div className={`bg-white rounded-2xl p-4 sm:p-6 md:p-8 border border-[#E5E5E5] hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 items-start ${
                    edu.current ? 'border-l-[3px] border-l-[#1E40AF]' : ''
                  }`}>
                    {/* Institution Logo */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl bg-[#F7F7F3] border border-[#E5E5E5] p-2 flex items-center justify-center group-hover:shadow-md group-hover:scale-105 group-hover:border-[#1E40AF]/30 transition-all duration-500">
                      <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" loading="lazy" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-[#0A0A0A] leading-tight mb-1">{edu.degree}</h3>
                          <p className="text-sm font-semibold text-[#1E40AF] mb-1">{edu.field}</p>
                          <p className="text-sm text-[#525252]">{edu.institution}</p>
                        </div>
                        <span className="text-xs text-[#737373] px-3 py-1.5 bg-[#F7F7F3] rounded-full border border-[#E5E5E5] font-medium whitespace-nowrap self-start shrink-0">
                          {edu.period}
                        </span>
                      </div>
                      
                      {edu.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {edu.highlights.map((h) => (
                            <span key={h} className="inline-flex items-center px-3 py-1 bg-[#DBEAFE] rounded-full text-xs font-semibold text-[#1E40AF]">
                              {h}
                            </span>
                          ))}
                          {edu.current && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 border border-green-200 rounded-full text-xs font-semibold text-green-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                              Currently Pursuing
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Certifications Section (Premium Showcase) ─── */
function CertificationsSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeCertIndex, setActiveCertIndex] = useState(0);

  const certifications = [
    {
      name: 'Databases for Developers: Next Level',
      issuer: 'Oracle Dev Gym',
      date: '2024',
      skills: ['Oracle SQL', 'Database Design', 'PL/SQL', 'Performance Tuning'],
      description: 'Advanced database development certification from Oracle covering complex queries, performance optimization, and enterprise database management.',
      image: '/certificates/oracle-devgym.jpg',
      color: '#C74634',
    },
    {
      name: 'Python 101 for Data Science',
      issuer: 'IBM / Cognitive Class',
      date: 'April 2025',
      skills: ['Python', 'Data Science', 'Data Analysis', 'NumPy'],
      description: 'Completed IBM\'s Python 101 course covering fundamental concepts of Python programming for data analysis, data structures, and data manipulation.',
      image: '/certificates/python-101-ibm.jpg',
      color: '#0530AD',
    },
    {
      name: 'Cloud Computing',
      issuer: 'Infosys Springboard',
      date: 'May 2025',
      skills: ['Cloud Computing', 'Cloud Architecture', 'Virtualization', 'Deployment'],
      description: 'Successfully completed the Infosys Springboard Cloud Computing course, covering cloud infrastructure, service models, deployment strategies, and modern cloud technologies.',
      image: '/certificates/infosys-cloud-computing.jpg',
      color: '#007CC3',
    },
    {
      name: 'HackerRank SQL (Advanced)',
      issuer: 'HackerRank',
      date: 'June 2025',
      skills: ['SQL', 'Complex Queries', 'Joins', 'Window Functions'],
      description: 'Passed the HackerRank SQL (Advanced) skill certification test, demonstrating proficiency in complex queries, joins, aggregations, and window functions.',
      image: '/certificates/hackerrank-sql-advanced.jpg',
      color: '#00EA64',
    },
    {
      name: 'Git & GitHub Bootcamp',
      issuer: 'LetsUpgrade',
      date: 'June 2025',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
      description: 'Comprehensive bootcamp covering version control fundamentals, repository management, collaboration techniques, and deployment workflows.',
      image: '/certificates/git-github-bootcamp.jpg',
      color: '#6E40C9',
    },
    {
      name: 'Java Course — Mastering the Fundamentals',
      issuer: 'Scaler Topics',
      date: 'May 2025',
      skills: ['Java', 'OOP', 'Data Structures', 'Problem Solving'],
      description: 'Certificate of Excellence for completing the Java fundamentals course covering 86 video tutorials, 12 modules, and 9 challenges on Scaler Topics.',
      image: '/certificates/scaler-java.jpg',
      color: '#1A1A2E',
    },
    {
      name: 'TechExtreme 2024 Appreciation',
      issuer: 'Gandhinagar University',
      date: '2024',
      skills: ['Event Coordination', 'Team Leadership', 'Technical Support', 'Volunteering'],
      description: 'Certificate of appreciation recognizing outstanding contribution, dedication, and commitment to excellence as a Core Team Member for Jazba 2024 & TechExtreme 2024.',
      image: '/certificates/techextreme-2024.jpg',
      color: '#E6A817',
    },
    {
      name: 'Mastering HTML5 & CSS3',
      issuer: 'Udemy',
      date: 'June 2025',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'Web Development'],
      description: 'Advanced level certification in modern web development with HTML5 and CSS3, covering responsive layouts, animations, and best practices.',
      image: '/certificates/udemy-html-css.jpg',
      color: '#A435F0',
    },
  ];

  const openLightbox = (index: number) => {
    setActiveCertIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goToPrev = () => {
    setActiveCertIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveCertIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const activeCert = certifications[activeCertIndex];

  return (
    <>
      <section className="py-8 px-4 sm:px-6 sm:py-24 bg-[#F7F7F3]" id="certifications">
        <div className="max-w-[1200px] mx-auto">
          <RevealSection>
            <div className="mb-16">
              <SectionLabel text="Certifications" />
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0A0A0A] tracking-tight mb-3">Achievement Showcase</h2>
              <p className="text-lg text-[#525252] max-w-2xl">Industry-recognized credentials and professional development achievements that validate my technical expertise.</p>
            </div>
          </RevealSection>

          {/* Certification Cards */}
          <div className="space-y-8">
            {certifications.map((cert, i) => (
              <RevealSection key={cert.name} delay={i * 100}>
                <div
                  className="group relative bg-white rounded-3xl border border-[#E5E5E5] overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-700"
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 w-full h-[3px] transition-all duration-700"
                    style={{
                      background: `linear-gradient(90deg, ${cert.color}, ${cert.color}80, transparent)`,
                    }}
                  />

                  <div className="grid md:grid-cols-[1.2fr_1fr] gap-0">
                    {/* Left - Details */}
                    <div className="p-5 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                      {/* Index Badge */}
                      <div className="flex items-center gap-3 mb-5">
                        <span
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold text-white shadow-md"
                          style={{ background: cert.color }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="w-8 h-px bg-[#E5E5E5]" />
                        <span className="text-xs font-medium text-[#737373] uppercase tracking-wider">{cert.issuer}</span>
                      </div>

                      {/* Certificate Name */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A0A0A] tracking-tight mb-4 group-hover:text-[#1E40AF] transition-colors duration-300">
                        {cert.name}
                      </h3>

                      {/* Metadata */}
                      <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-[#525252]">
                        <div className="flex items-center gap-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span className="font-medium">{cert.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                          </svg>
                          <span className="font-medium">{cert.issuer}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[#525252] leading-relaxed mb-6">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      <div className="mb-6">
                        <span className="text-xs font-bold text-[#737373] uppercase tracking-wider mb-3 block">Skills Covered</span>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5"
                              style={{
                                background: `${cert.color}10`,
                                color: cert.color,
                                border: `1px solid ${cert.color}25`,
                              }}
                            >
                              <span className="w-1 h-1 rounded-full" style={{ background: cert.color }} />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Certificate CTA */}
                      <button
                        onClick={() => openLightbox(i)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E40AF] group-hover:gap-3 transition-all duration-300 self-start cursor-pointer bg-transparent border-none p-0"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                        </svg>
                        View Certificate
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                      </button>
                    </div>

                    {/* Right - Certificate Image Preview */}
                    <div
                      className="relative overflow-hidden cursor-pointer bg-gradient-to-br from-[#F7F7F3] to-[#EBEBEB] flex items-center justify-center p-6 md:p-8 min-h-[220px] sm:min-h-[280px] md:min-h-0"
                      onClick={() => openLightbox(i)}
                    >
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #0A0A0A 1px, transparent 0)`,
                        backgroundSize: '24px 24px',
                      }} />

                      {/* Certificate Image */}
                      <div className="relative w-full max-w-[380px] group/img">
                        {/* Decorative shadow */}
                        <div className="absolute -inset-2 bg-gradient-to-br from-black/5 to-black/10 rounded-xl blur-xl group-hover/img:from-black/8 group-hover/img:to-black/15 transition-all duration-700" />
                        <img
                          src={cert.image}
                          alt={`${cert.name} Certificate`}
                          className="relative w-full h-auto rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] group-hover:scale-[1.04] group-hover:shadow-[0_16px_50px_rgba(0,0,0,0.18)] transition-all duration-700 bg-white"
                          loading="lazy"
                        />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/95 backdrop-blur-sm rounded-full text-sm font-semibold text-[#0A0A0A] shadow-lg translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                            </svg>
                            Click to Enlarge
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Lightbox Modal ─── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ animation: 'certLightboxFadeIn 0.3s ease forwards' }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={closeLightbox}
          />

          {/* Modal Content */}
          <div
            className="relative w-[95vw] max-w-[1100px] max-h-[92vh] bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col"
            style={{ animation: 'certModalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-[#E5E5E5]/60">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold text-white"
                  style={{ background: activeCert.color }}
                >
                  {String(activeCertIndex + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#0A0A0A] leading-tight">{activeCert.name}</h3>
                  <p className="text-xs text-[#737373]">{activeCert.issuer} • {activeCert.date}</p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-[#F7F7F3] hover:bg-[#E5E5E5] flex items-center justify-center transition-colors duration-200 cursor-pointer border-none"
                aria-label="Close lightbox"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="grid md:grid-cols-[1fr_1.3fr] gap-8 items-start">
                {/* Left - Details */}
                <div className="order-2 md:order-1">
                  {/* Skills */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-[#737373] uppercase tracking-wider mb-3 block">Skills Covered</span>
                    <div className="flex flex-wrap gap-2">
                      {activeCert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                          style={{
                            background: `${activeCert.color}12`,
                            color: activeCert.color,
                            border: `1px solid ${activeCert.color}25`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-[#737373] uppercase tracking-wider mb-2 block">Description</span>
                    <p className="text-sm text-[#525252] leading-relaxed">{activeCert.description}</p>
                  </div>

                  {/* Issuing Organization */}
                  <div className="bg-[#F7F7F3] rounded-xl p-5 border border-[#E5E5E5]/60">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: `${activeCert.color}15`, border: `1px solid ${activeCert.color}25` }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={activeCert.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-[#737373] font-medium">Issued By</p>
                        <p className="text-sm font-bold text-[#0A0A0A]">{activeCert.issuer}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Large Certificate Image */}
                <div className="order-1 md:order-2 flex items-center justify-center">
                  <div className="w-full">
                    <img
                      src={activeCert.image}
                      alt={`${activeCert.name} Certificate`}
                      className="w-full h-auto rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] bg-white"
                      key={activeCertIndex}
                      style={{ animation: 'certImageFadeIn 0.4s ease forwards' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer - Navigation */}
            <div className="flex items-center justify-between px-6 md:px-8 py-4 border-t border-[#E5E5E5]/60 bg-[#FAFAF8]">
              <button
                onClick={goToPrev}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E5E5E5] text-sm font-semibold text-[#0A0A0A] hover:border-[#1E40AF] hover:text-[#1E40AF] hover:-translate-x-0.5 transition-all duration-300 cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                </svg>
                Previous
              </button>

              {/* Certificate Counter */}
              <div className="flex items-center gap-2">
                {certifications.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCertIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer border-none p-0 ${
                      idx === activeCertIndex
                        ? 'bg-[#1E40AF] scale-125'
                        : 'bg-[#D4D4D4] hover:bg-[#A3A3A3]'
                    }`}
                    aria-label={`Go to certificate ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E5E5E5] text-sm font-semibold text-[#0A0A0A] hover:border-[#1E40AF] hover:text-[#1E40AF] hover:translate-x-0.5 transition-all duration-300 cursor-pointer"
              >
                Next
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Animations - injected via style tag */}
      <style>{`
        @keyframes certLightboxFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes certModalSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes certImageFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}

/* ─── Resume Section ─── */
function ResumeSection() {
  return (
    <section className="py-8 md:py-24 px-4 sm:px-6 bg-white border-y border-[#E5E5E5]" id="resume">
      <div className="max-w-[1200px] mx-auto w-full">
        <RevealSection>
          <div className="mb-10 md:mb-12 text-center px-2">
            <SectionLabel text="Resume" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A0A0A] tracking-tight mb-3">Resume</h2>
            <p className="text-base md:text-lg text-[#525252] max-w-xl mx-auto">A detailed overview of my education, experience, projects, and technical skills.</p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="max-w-[900px] mx-auto w-full">
            <div className="bg-[#F7F7F3] rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 border border-[#E5E5E5] relative overflow-hidden hover:shadow-2xl transition-shadow duration-500 group w-full">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#1E40AF] to-blue-500" />

              {/* Embedded PDF Viewer */}
              <div 
                className="w-full h-[65vh] min-h-[450px] md:h-[800px] rounded-xl overflow-hidden border border-[#E5E5E5] shadow-sm mb-6 md:mb-8 bg-white relative"
                style={{ WebkitOverflowScrolling: 'touch', overflowX: 'hidden', overflowY: 'auto' }}
              >
                <object
                  data="/resume.pdf"
                  type="application/pdf"
                  className="w-full h-full absolute inset-0"
                  style={{ minHeight: '100%' }}
                >
                  <iframe
                    src="/resume.pdf"
                    className="w-full h-full border-none absolute inset-0"
                    title="Himanshu Swami Resume Preview"
                    style={{ minHeight: '100%' }}
                  >
                    <div className="flex items-center justify-center w-full h-full bg-white p-6 text-center">
                      <p className="text-[#525252]">
                        Your browser does not support embedded PDFs.
                        <br />
                        <a href="/resume.pdf" className="text-[#1E40AF] font-semibold hover:underline mt-2 inline-block">
                          Download Resume Instead
                        </a>
                      </p>
                    </div>
                  </iframe>
                </object>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 md:py-4 rounded-full bg-[#0A0A0A] text-white font-semibold text-sm md:text-base hover:bg-[#1E40AF] active:scale-[0.98] transition-all duration-300"
                  aria-label="View resume in new tab"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                  View Resume
                </a>
                <a
                  href="/resume.pdf"
                  download="Himanshu_Swami_Resume.pdf"
                  className="flex-1 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 md:py-4 rounded-full border border-[#E5E5E5] text-[#0A0A0A] font-semibold text-sm md:text-base hover:border-[#1E40AF] hover:text-[#1E40AF] bg-white active:scale-[0.98] transition-all duration-300"
                  aria-label="Download resume as PDF"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ─── Contact Section (Updated social links) ─── */
function ContactSection() {
  const links = [
    {
      label: 'GitHub',
      href: 'https://github.com/techavocado',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/himanshu-swami-179bba360/',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    },
    {
      label: 'Email',
      href: 'mailto:himanshuswami770@gmail.com',
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 sm:py-24 bg-[#F7F7F3] border-t border-[#E5E5E5] text-center" id="contact">
      <div className="max-w-[600px] mx-auto">
        <RevealSection>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0A0A0A] tracking-tight mb-4">
            Open to Software Engineering,<br className="hidden sm:block" />Internship & Research Opportunities
          </h2>
          <p className="text-base sm:text-lg text-[#525252] mb-10">
            Let's connect and explore how we can build secure, scalable systems together.
          </p>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 sm:px-6 sm:py-3.5 bg-white border border-[#E5E5E5] rounded-full text-sm font-semibold text-[#0A0A0A] hover:border-[#1E40AF] hover:text-[#1E40AF] hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                aria-label={`Visit my ${link.label} profile`}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ─── Main Home Page ─── */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7F7F3]">
      <Navigation />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
