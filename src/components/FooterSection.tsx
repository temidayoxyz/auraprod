import { motion } from 'motion/react';

export function FooterSection() {
  return (
    <footer className="bg-[#050505] pt-32 pb-16 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="/favicon.svg" alt="Aura Logo" className="w-8 h-8" />
            <div className="text-4xl font-light text-white">Aura</div>
          </div>
          <p className="text-white/40 font-light max-w-sm text-sm leading-relaxed mb-8">
            The next generation of ambient intelligence. Available for pre-order. Shipping late 2026.
          </p>
          <button className="px-8 py-4 bg-white text-black text-xs font-medium tracking-widest uppercase hover:bg-white/90 transition-colors duration-500">
            Pre-order Now
          </button>
        </div>

        <div className="grid grid-cols-2 gap-12 md:gap-16 text-sm font-light text-white/40">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest text-white/20 mb-2">Product</h4>
            <a href="#vision" className="hover:text-white transition-colors duration-500">Vision</a>
            <a href="#design" className="hover:text-white transition-colors duration-500">Design</a>
            <a href="#interface" className="hover:text-white transition-colors duration-500">Interaction</a>
            <a href="#tech" className="hover:text-white transition-colors duration-500">Intelligence</a>
            <a href="#audio" className="hover:text-white transition-colors duration-500">Acoustics</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest text-white/20 mb-2">Details</h4>
            <a href="#ecosystem" className="hover:text-white transition-colors duration-500">Ecosystem</a>
            <a href="#materials" className="hover:text-white transition-colors duration-500">Materials</a>
            <a href="#privacy" className="hover:text-white transition-colors duration-500">Privacy</a>
            <a href="#specs" className="hover:text-white transition-colors duration-500">Specifications</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-screen-2xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-white/30 tracking-wider">
        <div>&copy; 2026 Aura Design. All rights reserved.</div>
      </div>
    </footer>
  );
}
