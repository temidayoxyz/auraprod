import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function EcosystemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

  return (
    <section id="ecosystem" ref={containerRef} className="py-48 px-8 md:px-24 bg-[#050505] flex justify-center items-center">
       <motion.div style={{ opacity }} className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-12">
             <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8 leading-tight">
            Connects to everything. <br/> Confounds you with nothing.
          </h2>
          <p className="text-white/50 font-light leading-relaxed text-lg mb-16">
            Aura serves as the invisible conductor for your entire smart home. It natively understands over 50,000 devices via Matter, requiring zero setup or configuration screens.
          </p>
          <div className="flex justify-center gap-12 text-xs uppercase tracking-widest text-white/30">
            <span>Matter</span>
            <span>Thread</span>
            <span>HomeKit</span>
          </div>
       </motion.div>
    </section>
  );
}
