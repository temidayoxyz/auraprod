import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import auraAudioImg from '../assets/images/aura_audio_1782747811572.jpg';

export function AudioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);

  return (
    <section id="audio" ref={containerRef} className="relative py-32 min-h-screen flex items-center bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={auraAudioImg} 
          alt="Micro-perforated speaker grille" 
          className="w-full h-full object-cover opacity-50 mix-blend-lighten"
          style={{ y: imgY }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      <div className="container mx-auto px-8 md:px-24 relative z-10">
        <motion.div style={{ opacity }} className="max-w-xl">
          <h3 className="text-sm tracking-widest uppercase text-white/40 mb-6">Acoustics</h3>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
            Sound that surrounds, but never intrudes.
          </h2>
          <p className="text-white/50 font-light leading-relaxed text-lg">
            A custom-designed spatial audio array projects sound with pinpoint precision. It can fill a room with immersive music, or direct a whispered notification so only you can hear it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
