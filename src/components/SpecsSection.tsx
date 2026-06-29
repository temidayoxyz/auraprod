export function SpecsSection() {
  return (
    <section id="specs" className="py-32 px-8 md:px-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <h2 className="text-2xl font-light text-white">Specifications</h2>
          <p className="text-white/40 font-light mt-4 md:mt-0 max-w-sm text-sm">
            Engineered with absolute precision. Designed to be invisible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {/* Dimensions */}
          <div className="border-t border-white/10 pt-6">
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6">Dimensions</h4>
            <ul className="space-y-4 text-sm font-light text-white/80">
              <li className="flex justify-between"><span>Height</span> <span>142 mm</span></li>
              <li className="flex justify-between"><span>Diameter</span> <span>84 mm</span></li>
              <li className="flex justify-between"><span>Weight</span> <span>1.2 kg</span></li>
            </ul>
          </div>

          {/* Audio */}
          <div className="border-t border-white/10 pt-6">
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6">Audio Architecture</h4>
            <ul className="space-y-4 text-sm font-light text-white/80">
              <li className="flex justify-between"><span>Tweeter</span> <span>1x 20mm Custom</span></li>
              <li className="flex justify-between"><span>Woofer</span> <span>1x 85mm High-Excursion</span></li>
              <li className="flex justify-between"><span>Microphones</span> <span>6-mic far-field array</span></li>
            </ul>
          </div>

          {/* Compute */}
          <div className="border-t border-white/10 pt-6">
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6">Compute</h4>
            <ul className="space-y-4 text-sm font-light text-white/80">
              <li className="flex justify-between"><span>Processor</span> <span>Aura N1 Neural Chip</span></li>
              <li className="flex justify-between"><span>Memory</span> <span>16GB Unified</span></li>
              <li className="flex justify-between"><span>Connectivity</span> <span>Wi-Fi 7, Bluetooth 5.4, Thread</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
