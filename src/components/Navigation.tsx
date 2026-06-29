import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Vision', href: '#vision' },
    { label: 'Design', href: '#design' },
    { label: 'Intelligence', href: '#tech' },
    { label: 'Acoustics', href: '#audio' },
    { label: 'Specs', href: '#specs' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 md:py-8 transition-colors duration-700 ${
          isScrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      >
        <a href="#" className="text-sm font-medium tracking-widest uppercase text-white/90 z-50">Aura</a>
        
        <div className="hidden md:flex items-center gap-10 text-xs tracking-wider uppercase text-white/50">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors duration-700">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6 z-50">
          <button className="hidden md:block text-xs tracking-wider uppercase text-white/90 hover:text-white/50 transition-colors duration-700">
            Pre-order
          </button>
          
          <button 
            className="md:hidden text-white/90 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8 text-sm tracking-widest uppercase text-white/70">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="hover:text-white transition-colors duration-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="w-8 h-px bg-white/10 my-4"></div>
              <button className="text-white hover:text-white/50 transition-colors duration-500">
                Pre-order
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
