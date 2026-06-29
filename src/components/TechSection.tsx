import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

export function TechSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const ringScale1 = useTransform(scrollYProgress, [0, 1], [0.8, 1.5]);
  const ringScale2 = useTransform(scrollYProgress, [0, 1], [0.9, 1.8]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate relative to the center of the section
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x * 0.15); // subtle movement
        mouseY.set(y * 0.15);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="tech" ref={containerRef} className="relative py-48 md:py-64 min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border border-white/5"
          style={{ scale: ringScale1, x: mouseX, y: mouseY }}
        />
        <motion.div 
          className="absolute w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full border border-white/5"
          style={{ scale: ringScale2, x: mouseX, y: mouseY }}
        />
        <motion.div 
          className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-white/5 blur-[100px]"
          style={{ x: mouseX, y: mouseY }}
        />
      </div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-2xl mx-auto text-center px-8"
      >
        <h3 className="text-sm tracking-widest uppercase text-white/40 mb-6">Intelligence</h3>
        <h2 className="text-3xl md:text-5xl font-light leading-tight text-white mb-8">
          A neural engine that learns your rhythms.
        </h2>
        <p className="text-lg text-white/50 font-light leading-relaxed">
          Powered by advanced spatial computing and an on-device large language model. Aura processes your voice, routine, and environment with zero latency and complete privacy. It doesn't just respond; it anticipates.
        </p>
      </motion.div>
    </section>
  );
}
