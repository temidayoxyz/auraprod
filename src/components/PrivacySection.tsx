import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function PrivacySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 10%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  return (
    <section id="privacy" ref={containerRef} className="py-48 px-8 md:px-24 flex items-center justify-center min-h-[70vh] bg-[#050505]">
      <motion.div 
        style={{ opacity }}
        className="max-w-3xl mx-auto text-center"
      >
        <h3 className="text-sm tracking-widest uppercase text-white/40 mb-12">Privacy</h3>
        <h2 className="text-3xl md:text-5xl font-light leading-tight text-white/90 mb-16">
          What happens in your home, stays in your home. Processing happens on the edge. Nothing is sent to the cloud without explicit intent.
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 text-left border-t border-white/10 pt-16">
          <div>
            <div className="text-xl text-white font-light mb-2">Local AI</div>
            <div className="text-sm text-white/40 leading-relaxed">Neural Engine runs entirely on-device</div>
          </div>
          <div>
            <div className="text-xl text-white font-light mb-2">Hardware Mute</div>
            <div className="text-sm text-white/40 leading-relaxed">Physical disconnect for microphones</div>
          </div>
          <div>
            <div className="text-xl text-white font-light mb-2">Encrypted</div>
            <div className="text-sm text-white/40 leading-relaxed">Zero-knowledge local storage</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
