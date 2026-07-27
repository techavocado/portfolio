import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'About', href: isHome ? '#about' : '/#about' },
    { label: 'Experience', href: isHome ? '#experience' : '/#experience' },
    { label: 'Skills', href: isHome ? '#skills' : '/#skills' },
    { label: 'Projects', href: isHome ? '#projects' : '/#projects' },
    { label: 'Resume', href: isHome ? '#resume' : '/#resume' },
  ];

  const scrollToSection = (href: string) => {
    if (!isHome) return;
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        scrolled ? 'pt-2' : 'pt-4'
      }`}
    >
      <div
        className={`relative max-w-[1080px] w-full mx-auto px-6 py-3 flex justify-between items-center border rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/92 border-[#E5E5E5] shadow-lg backdrop-blur-xl'
            : 'bg-white/70 border-[#E5E5E5] shadow-md backdrop-blur-xl'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-extrabold text-base tracking-tight text-[#0A0A0A] hover:opacity-70 transition-opacity">
          <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.15)] animate-pulse" />
          Himanshu Swami
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-0.5 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.href.startsWith('#') ? (
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium text-[#525252] hover:text-[#1E40AF] hover:bg-[#DBEAFE] transition-all duration-150"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  to={link.href}
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium text-[#525252] hover:text-[#1E40AF] hover:bg-[#DBEAFE] transition-all duration-150"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link
              to={isHome ? '#contact' : '/#contact'}
              onClick={() => isHome && scrollToSection('#contact')}
              className="ml-2 inline-block px-5 py-2.5 rounded-full text-sm font-semibold bg-[#1E40AF] text-white border border-[#1E40AF] hover:bg-[#16309E] hover:border-[#16309E] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-[#E5E5E5] bg-white"
          aria-label="Toggle menu"
        >
          <div className="relative w-[15px] h-[1.5px] bg-[#0A0A0A] transition-all duration-200"
            style={{
              background: mobileOpen ? 'transparent' : '#0A0A0A',
            }}
          >
            <span
              className="absolute left-0 w-full h-[1.5px] bg-[#0A0A0A] transition-all duration-200"
              style={{
                top: mobileOpen ? 0 : -5,
                transform: mobileOpen ? 'rotate(45deg)' : 'none',
              }}
            />
            <span
              className="absolute left-0 w-full h-[1.5px] bg-[#0A0A0A] transition-all duration-200"
              style={{
                top: mobileOpen ? 0 : 5,
                transform: mobileOpen ? 'rotate(-45deg)' : 'none',
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-4 right-4 top-full mt-2 bg-white border border-[#E5E5E5] rounded-2xl shadow-lg p-3 transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-0.5">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.href.startsWith('#') ? (
                <button
                  onClick={() => { scrollToSection(link.href); setMobileOpen(false); }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-[#525252] hover:text-[#1E40AF] hover:bg-[#DBEAFE] transition-all"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  to={link.href}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-[#525252] hover:text-[#1E40AF] hover:bg-[#DBEAFE] transition-all"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link
              to="/#contact"
              className="block text-center mt-1 px-5 py-3 rounded-xl text-sm font-semibold bg-[#1E40AF] text-white hover:bg-[#16309E] transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
