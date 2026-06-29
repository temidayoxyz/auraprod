import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { StatementSection } from './components/StatementSection';
import { EnvironmentSection } from './components/EnvironmentSection';
import { InterfaceSection } from './components/InterfaceSection';
import { TechSection } from './components/TechSection';
import { AudioSection } from './components/AudioSection';
import { EcosystemSection } from './components/EcosystemSection';
import { MaterialsSection } from './components/MaterialsSection';
import { PrivacySection } from './components/PrivacySection';
import { SpecsSection } from './components/SpecsSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-white/20">
      <Navigation />
      <main>
        <HeroSection />
        <StatementSection />
        <EnvironmentSection />
        <InterfaceSection />
        <TechSection />
        <AudioSection />
        <EcosystemSection />
        <MaterialsSection />
        <PrivacySection />
        <SpecsSection />
      </main>
      <FooterSection />
    </div>
  );
}
