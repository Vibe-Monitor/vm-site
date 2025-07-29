import EnhancedHero from "@/components/EnhancedHero";
import OutcomeSection from "@/components/OutcomeSection";
import BenefitSection from "@/components/Benefits/BenefitSection";
import FounderNote from "@/components/FounderNote";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import FullScreenScroll from "@/components/FullScreenScroll";
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
    <Container key="cta"><CTA /></Container>
  ];

  const sectionIds = [
    'hero',
    'outcome',
    ...benefits.map((_, index) => `benefit-${index}`),
    'founder',
    'cta'
  ];

  return (
    <FullScreenScroll sectionIds={sectionIds}>
      {sections}
    </FullScreenScroll>
  );
};

export default HomePage;
