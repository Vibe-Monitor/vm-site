import EnhancedHero from "@/components_old/EnhancedHero";
import OutcomeSection from "@/components_old/OutcomeSection";
import BenefitSection from "@/components_old/Benefits/BenefitSection";
import FounderNote from "@/components_old/FounderNote";
import Container from "@/components_old/Container";
import CTA from "@/components_old/CTA";
import FullScreenScroll from "@/components_old/FullScreenScroll";
import { benefits } from "@/data/benefits";
import HeroSection from "@/components/HeroSection/HeroSection";

const HomePage: React.FC = () => {
  const sections = [

    <><HeroSection /></>
  ];

  const sectionIds = [
   
    
  ];

  return (
    <FullScreenScroll sectionIds={sectionIds}>
      {sections}
    </FullScreenScroll>
  );
};

export default HomePage;
