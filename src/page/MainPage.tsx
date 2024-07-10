import AboutSection from "../sections/AboutSection";
import ArticleSection from "../sections/ArticleSection";
import FooterSection from "../sections/FooterSection";
import HeroSection from "../sections/HeroSection";
import OptionsSection from "../sections/OptionsSection";
import OurPlanSection from "../sections/OurPlanSection";
import ServiceSection from "../sections/ServiceSection";
import TestimonySection from "../sections/TestimonySection";

const MainPage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <OptionsSection />
      <AboutSection />
      <ServiceSection />
      <OurPlanSection />
      <TestimonySection />
      <ArticleSection />
      <FooterSection />
    </div>
  );
};

export default MainPage;
