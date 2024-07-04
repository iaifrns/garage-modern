import { useEffect, useState } from "react";
import TopMenu from "../components/TopMenu";
import { images } from "../constants/images";

const HeroSection = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const checkScreenSize = () => {
        setIsSmallScreen(window.matchMedia('(max-width: 768px)').matches);
    }

    useEffect( ()=>{
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return ()=> window.removeEventListener('resize',checkScreenSize)
    },[]);
  return (
    <div className="h-screen w-full">
      <div className="absolute h-full w-full">
        <div className="flex flex-col h-full w-full p-2 bg-black bg-opacity-25 max-md:bg-opacity-50">
          <TopMenu />
          <div className="h-full w-full flex flex-col gap-4 justify-center items-center  max-md:gap-8 p-4">
            <p className="text-secondary w-full font-semibold text-xl max-md:text-sm  max-md:text-center">
              DES MÉCANICIENS PROFESSIONNELS À VOTRE
              <span className="text-white max-md:text-secondary"> SERVICE</span>
            </p>
            <p className="w-full text-white font-semibold text-[90px] max-md:text-4xl max-md:text-center">
              Garage Moderne Automobile
            </p>
            <div className="flex flex-col gap-2 items-end max-md:items-center max-md:gap-4">
              <p className="text-white w-2/5 max-md:w-full max-md:text-sm font-semibold text-justify  max-md:text-center">
                Nos experts en mécanique sont là pour répondre à tous vos
                besoins de réparation et d'entretien automobile. Avec notre
                savoir-faire et nos équipements de pointe, nous vous assurons un
                service de qualité supérieure et une satisfaction garantie à
                chaque visite.
              </p>
              <button className="p-2 bg-secondary w-[200px] text-primary font-bold">Nos Service</button>
            </div>
          </div>
        </div>
      </div>
      <img src={isSmallScreen ? images.HEROBG1 : images.HEROBG} className="object-cover h-full w-full" />
    </div>
  );
};

export default HeroSection;
