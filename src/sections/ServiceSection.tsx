import ServiceComponent from "../components/ServiceComponent";
import { images } from "../constants/images";

const ServiceSection = () => {
  return (
    <div className="w-full h-[120vh] max-md:h-[2050px]">
      <div className="absolute w-full md:h-[120vh] max-md:h-[2050px] bg-primary bg-opacity-90">
        <div className="w-full h-full flex flex-col p-4 mt-8 mb-8 items-center gap-4">
          <p className="w-full text-center text-lg text-secondary font-bold max-md:text-start">
            Nos Service
          </p>
          <p className="text-white text-[32px] font-bold max-md:text-2xl">
            LA MEILLEURE ADRESSE POUR RÉPARER VOTRE VOITURE
          </p>
          <p className="text-white">
            Ces services sont conçus pour répondre aux besoins variés de nos
            clients et assurer une satisfaction totale.
          </p>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 justify-center w-full h-full max-md:gap-0 ">
            <ServiceComponent
              title="Accessoires de véhicules"
              icon="mdi:car-cog"
              desc="Une gamme complète d'accessoires pour personnaliser et améliorer votre voiture."
              borderColor="border-secondary"
              bgColor="bg-primary"
            />
            <ServiceComponent
              title="Formation en mécanique"
              icon="oui:training"
              desc="Des cours pratiques et théoriques pour vous perfectionner dans l'entretien automobile"
              borderColor="border-white"
              bgColor=""
            />
            <ServiceComponent
              title="Réparations et entretien"
              icon="carbon:cabin-care"
              desc="Services complets pour assurer le bon fonctionnement et la sécurité de votre véhicule."
              borderColor="border-secondary"
              bgColor=""
            />
            <ServiceComponent
              title="Diagnostic électronique"
              icon="bxs:analyse"
              desc="Utilisation de technologies avancées pour diagnostiquer efficacement les problèmes mécaniques."
              borderColor="border-white"
              bgColor=""
            />
            <ServiceComponent
              title="Carrosserie et peinture"
              icon="map:painter"
              desc="Restauration et peinture professionnelle pour redonner à votre voiture son éclat d'origine."
              borderColor="border-secondary"
              bgColor=""
            />
            <ServiceComponent
              title="Climatisation"
              icon="game-icons:cold-heart"
              desc="Services pour maintenir et réparer votre système de climatisation, assurant votre confort toute l'année."
              borderColor="border-white"
              bgColor=""
            />
          </div>
        </div>
      </div>
      <img src={images.SERVICEIMG} className="h-full w-full max-md:h-[2050px]" />
    </div>
  );
};

export default ServiceSection;
