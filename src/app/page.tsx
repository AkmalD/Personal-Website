import { HeroSection } from "@/components/home/HeroSection";
import { EngineeringEthos } from "@/components/home/EngineeringEthos";

export default function Home() {
  return (
    <div className="w-full bg-surface-container-lowest">
      <HeroSection />
      <EngineeringEthos />
    </div>
  );
}
