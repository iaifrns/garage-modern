import HeroSection from "../sections/HeroSection";
import OptionsSection from "../sections/OptionsSection";

const MainPage = () => {
  return (
    <div className="w-full">
      <HeroSection/>
      <OptionsSection/>
      <div>about section</div>
      <div>our services section</div>
      <div>our plans section</div>
      <div>testimonies section</div>
      <div>footer section</div>
    </div>
  );
};

export default MainPage;
