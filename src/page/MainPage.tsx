import AboutSection from "../sections/AboutSection";
import HeroSection from "../sections/HeroSection";
import OptionsSection from "../sections/OptionsSection";
import OurPlanSection from "../sections/OurPlanSection";
import ServiceSection from "../sections/ServiceSection";
import TestimonySection from "../sections/TestimonySection";

const MainPage = () => {
  return (
    <div className="w-full">
      <HeroSection/>
      <OptionsSection/>
      <AboutSection />
      <ServiceSection />
      <OurPlanSection />
      <TestimonySection />
      <div>footer section</div>
    </div>
  );
};

export default MainPage;
