import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import auraHeroImg from '../assets/images/aura_hero_1782736140159.jpg';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#050505]">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505] z-10"></div>
        <img 
          src={auraHeroImg} 
          alt="Aura Device" 
          className="w-full h-full object-cover object-center opacity-80"
        />
      </motion.div>

      <div className="relative z-20 flex flex-col items-center text-center mt-32">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          Intelligence, <br />
          <span className="text-white/40">invisible.</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg text-white/50 max-w-md font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        >
          Aura seamlessly blends into your life, anticipating your needs before you do.
        </motion.p>
      </div>
    </section>
  );
}
