import { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useIsMobile } from './ui/use-mobile';

export function Navigation() {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Tours', 'Experience', 'Reviews', 'Contact'];

  const handleNav = (link: string) => {
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      initial={{ opacity: 0, y: isMobile ? -10 : -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: isMobile ? 0.28 : 0.55, ease: 'easeOut' }}
      style={{
        background: scrolled
          ? 'rgba(4, 17, 30, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 212, 232, 0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 40px rgba(0, 212, 232, 0.06)' : 'none',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00D4E8, #0B2D52)' }}>
              <Anchor size={14} style={{ color: '#fff' }} />
            </div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '17px', letterSpacing: '-0.02em' }}>
              <span style={{ color: '#FFFFFF' }}>Opo</span>
              <span style={{ background: 'linear-gradient(90deg, #00D4E8, #00FFE7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Boat </span>
              <span style={{ color: '#FFFFFF' }}>Tours</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNav(link)}
                className="uppercase tracking-[0.12em] transition-all hover:text-[#00D4E8] relative group"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  color: scrolled ? '#7A9BB5' : 'rgba(255,255,255,0.65)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.12em'
                }}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00D4E8] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              className="px-6 py-2.5 rounded-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,212,232,0.35)]"
              style={{
                background: 'linear-gradient(135deg, #00D4E8, #0098AA)',
                color: '#04111E',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                border: 'none',
              }}
            >
              Book Now
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {mobileMenuOpen ? (
              <X size={24} style={{ color: '#00D4E8' }} />
            ) : (
              <Menu size={24} style={{ color: scrolled ? '#FFFFFF' : '#FFFFFF' }} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              background: 'rgba(4, 17, 30, 0.97)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(0, 212, 232, 0.12)'
            }}
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link}
                  onClick={() => handleNav(link)}
                  className="uppercase tracking-[0.12em] text-left transition-colors hover:text-[#00D4E8]"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut', delay: idx * 0.025 }}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#7A9BB5',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {link}
                </motion.button>
              ))}
              <motion.button
                className="px-6 py-3 rounded-sm w-full transition-all hover:shadow-[0_0_20px_rgba(0,212,232,0.35)]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut', delay: navLinks.length * 0.025 }}
                style={{
                  background: 'linear-gradient(135deg, #00D4E8, #0098AA)',
                  color: '#04111E',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '14px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
