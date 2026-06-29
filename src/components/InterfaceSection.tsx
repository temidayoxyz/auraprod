import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import auraInterfaceImg from '../assets/images/aura_interface_1782747828148.jpg';

export function InterfaceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

  return (
    <section id="interface" ref={containerRef} className="relative py-48 min-h-screen flex items-center bg-[#050505] overflow-hidden">
       <div className="absolute inset-0 z-0 flex justify-center items-center">
        <motion.img 
          src={auraInterfaceImg} 
          alt="Aura soft glow" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
          style={{ scale }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_70%)]"></div>
      </div>

      <div className="container mx-auto px-8 md:px-24 relative z-10 flex justify-end">
        <motion.div style={{ opacity: textOpacity, y: textY }} className="max-w-md text-left md:text-right">
          <h3 className="text-sm tracking-widest uppercase text-white/40 mb-6">Interaction</h3>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
            A subtle glow. A gentle breath.
          </h2>
          <p className="text-white/50 font-light leading-relaxed text-lg">
            We replaced harsh screens with light and motion. Aura communicates its state through organic breathing patterns of light that feel alive, not engineered.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
