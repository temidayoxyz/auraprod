# Aura

Aura is a flagship product experience showcasing a next-generation ambient intelligence device. The design language is rooted in minimalism, emphasizing clarity, calm, and premium craftsmanship. It avoids decorative clutter in favor of a timeless, cinematic, and understated approach to storytelling.

## Design Philosophy

- **Clarity over Decoration:** Every pixel has purpose. There are no unnecessary borders, gradients, or aggressive animations.
- **Cinematic Scroll Experience:** The page unfolds like a film, gradually revealing the product's vision, materials, technology, and ecosystem.
- **Typography and Proportion:** Extensive use of whitespace, refined vertical rhythm, and an elegant neutral palette.
- **Restrained Motion:** Animations use premium easing (`cubic-bezier(0.22, 1, 0.36, 1)`) to feel inevitable and soft, guiding the eye without distraction.

## Architecture & Technology

- **React 19 & Vite:** A fast, modern development environment.
- **Tailwind CSS v4:** Utility-first styling with a bespoke minimal theme.
- **Motion (Framer Motion):** Smooth scroll-linked animations and hardware-accelerated transitions.

## Project Structure

- `src/components/` - Contains all sections, thoughtfully broken down for maintainability and performance.
  - `HeroSection`: Initial immersive introduction.
  - `StatementSection`: Minimalist vision statement.
  - `EnvironmentSection`: Product scale and spatial context.
  - `InterfaceSection`: Interaction paradigm exploration.
  - `TechSection`: The intelligence behind the surface.
  - `AudioSection`: Acoustic architecture details.
  - `EcosystemSection`: Connectivity and smart home integration.
  - `MaterialsSection`: Craftsmanship and physical properties.
  - `PrivacySection`: Edge-computing and security ethos.
  - `SpecsSection`: Technical specifications breakdown.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```
