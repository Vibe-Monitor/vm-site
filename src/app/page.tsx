import Hero from "@/components/Hero";
import OutcomeSection from "@/components/OutcomeSection";
import Benefits from "@/components/Benefits/Benefits";
import FounderNote from "@/components/FounderNote";
import Container from "@/components/Container";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <OutcomeSection />
      <Container>
        <Benefits />
      </Container>
      <FounderNote />
      <Container>
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
