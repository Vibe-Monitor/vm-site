import EnhancedHero from "@/components_old/EnhancedHero";
import OutcomeSection from "@/components_old/OutcomeSection";
import BenefitSection from "@/components_old/Benefits/BenefitSection";
import FounderNote from "@/components_old/FounderNote";
import Container from "@/components_old/Container";
import CTA from "@/components_old/CTA";
import FullScreenScroll from "@/components_old/FullScreenScroll";
import { benefits } from "@/data/benefits";

const HomePage: React.FC = () => {
  const sections = [
    <EnhancedHero key="hero" />,
    <OutcomeSection key="outcome" />,
    ...benefits.map((benefit, index) => (
      <div key={`benefit-${index}`} className="w-full min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-0">
        <BenefitSection benefit={benefit} />
      </div>
    )),
    <FounderNote key="founder" />,
    <><Container key="cta"><CTA /></Container>
    
    </>
  ];

  const sectionIds = [
    'hero',
    'outcome',
    ...benefits.map((_, index) => `benefit-${index}`),
    'founder',
    'cta',
    
  ];

  return (
    <FullScreenScroll sectionIds={sectionIds}>
      {sections}
    </FullScreenScroll>
  );
};

export default HomePage;
