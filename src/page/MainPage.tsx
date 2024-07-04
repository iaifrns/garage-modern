import AboutSection from "../sections/AboutSection";
import HeroSection from "../sections/HeroSection";
import OptionsSection from "../sections/OptionsSection";
import ServiceSection from "../sections/ServiceSection";

const MainPage = () => {
  return (
    <div className="w-full">
      <HeroSection/>
      <OptionsSection/>
      <AboutSection />
      <ServiceSection />
      <div>our plans section</div>
      <div>testimonies section</div>
      <div>footer section</div>
    </div>
  );
};

export default MainPage;
