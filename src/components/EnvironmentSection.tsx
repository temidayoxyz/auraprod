import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import auraEnvironmentImg from '../assets/images/aura_environment_1782736167628.jpg';

export function EnvironmentSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="design" ref={containerRef} className="py-32 px-4 md:px-8 bg-[#050505]">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div 
          style={{ opacity }}
          className="text-center mb-16 md:mb-24"
        >
          <h3 className="text-sm tracking-widest uppercase text-white/40 mb-4">Harmony</h3>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
            Designed to disappear.
          </h2>
        </motion.div>

        <div className="relative aspect-[4/5] md:aspect-[21/9] overflow-hidden rounded-2xl md:rounded-[2rem]">
          <motion.img 
            style={{ scale }}
            src={auraEnvironmentImg} 
            alt="Aura in living room" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]/80"></div>
          
          <div className="absolute bottom-8 left-8 right-8 md:bottom-16 md:left-16 max-w-xl">
            <p className="text-white/80 font-light text-lg md:text-xl leading-relaxed">
              We stripped away screens, buttons, and interfaces. What remains is pure ambient awareness. Aura listens, understands, and illuminates your space seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
