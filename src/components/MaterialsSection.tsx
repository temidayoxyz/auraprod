import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import auraMaterialsImg from '../assets/images/aura_materials_1782736154540.jpg';

export function MaterialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.2, 0.4], [40, 0]);

  return (
    <section id="materials" ref={containerRef} className="relative py-32 min-h-[150vh] flex items-center bg-[#050505]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          src={auraMaterialsImg} 
          alt="Premium Materials" 
          className="w-full h-full object-cover opacity-40 mix-blend-lighten"
          style={{ y: imgY }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      <div className="container mx-auto px-8 md:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div style={{ opacity: textOpacity, y: textY }} className="max-w-md">
            <h3 className="text-sm tracking-widest uppercase text-white/40 mb-6">Craftsmanship</h3>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
              Machined from a single block of aerospace-grade aluminum.
            </h2>
            <p className="text-white/50 font-light leading-relaxed mb-12 text-lg">
              The surface is bead-blasted to achieve a micro-texture that scatters light perfectly, creating a soft, diffuse glow. The display is hidden behind matte-frosted glass, only visible when you need it.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-2xl text-white font-light mb-1">0.1mm</div>
                <div className="text-xs tracking-wider uppercase text-white/40">Tolerance</div>
              </div>
              <div>
                <div className="text-2xl text-white font-light mb-1">98%</div>
                <div className="text-xs tracking-wider uppercase text-white/40">Recycled</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
