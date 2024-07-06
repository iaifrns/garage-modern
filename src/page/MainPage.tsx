import AboutSection from "../sections/AboutSection";
import HeroSection from "../sections/HeroSection";
import OptionsSection from "../sections/OptionsSection";
import OurPlanSection from "../sections/OurPlanSection";
import ServiceSection from "../sections/ServiceSection";

const MainPage = () => {
  return (
    <div className="w-full">
      <HeroSection/>
      <OptionsSection/>
      <AboutSection />
      <ServiceSection />
      <OurPlanSection />
      <div>testimonies section</div>
      <div>footer section</div>
    </div>
  );
};

export default MainPage;
