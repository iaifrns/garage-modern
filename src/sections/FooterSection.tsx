import { Icon } from "@iconify/react/dist/iconify.js";
import { images } from "../constants/images";

const FooterSection = () => {
  return (
    <div className="relative w-full">
      <div className="absolute h-full bg-primary w-full bg-opacity-80">
        <div className="flex flex-col p-8 gap-4 items-center justify-center h-full">
          <div className="flex flex-col items-center border-b-2 pb-8">
            <img alt="logo" src={images.LOGO} className="w-[200px]" />
            <p className="text-white text-center md:w-3/5 max-md:text-justify">
              Garage Moderne Automobile offre des services mécaniques de
              qualité, la vente d'outillage spécialisé, et la formation
              professionnelle en mécanique. Nous sommes dédiés à l'entretien et
              la réparation automobiles, tout en proposant des équipements de
              pointe et des formations pour les futurs mécaniciens.
            </p>
            <div className="flex flex-col gap-4 mt-8 items-center">
              <p className="text-white font-bold text-xl">Contact Us</p>
              <div className="flex flex-col gap-4 items-center">
                <p className="text-white flex gap-2 items-center">
                  <Icon icon="logos:whatsapp-icon" />
                  +237 682 988 891
                </p>
                <p className="text-white flex gap-2 items-center">
                  <Icon icon="fxemoji:email" />
                  garageModerneAutomobile@gmail.com
                </p>
              </div>
            </div>
          </div>
          <p className="text-white max-md:text-center">
            Copyright © 2021. All rights reserved by @willsTech
          </p>
        </div>
      </div>
      <img src={images.IMAGE1} className="w-full md:h-[85vh] max-md:h-[100vh]" />
    </div>
  );
};

export default FooterSection;
