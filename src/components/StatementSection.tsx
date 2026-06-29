import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function StatementSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <section 
      id="vision"
      ref={containerRef} 
      className="py-48 px-8 md:px-24 flex items-center justify-center min-h-screen bg-[#050505]"
    >
      <motion.div 
        style={{ opacity, y }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-white/90">
          We believe technology should adapt to humans, not the other way around. Every curve, every material, every interaction is designed to calm the mind.
        </h2>
        <div className="mt-16 w-px h-24 bg-white/10 mx-auto"></div>
      </motion.div>
    </section>
  );
}
