import Numbers from "../components/Numbers";
import OurVission from "../components/OurVission";
import { images } from "../constants/images";

const AboutSection = () => {
  return (
    <div className="bg-primary p-8" id="about">
      <div className="mt-12 mb-12 w-full h-full flex max-md:flex-col max-md:gap-8">
        <div className="flex flex-col gap-10 w-1/2 max-md:w-full max-md:items-center">
          <p className="text-secondary font-bold text-lg max-md:w-full">
            À Propos
          </p>
          <h1 className="text-white text-[40px] font-bold max-md:text-2xl">
            LA MEILLEURE ADRESSE POUR RÉPARER VOTRE VOITURE
          </h1>
          <p className="text-white">
            Découvrez l'expertise de nos mécaniciens certifiés pour des
            réparations rapides et fiables. Nous garantissons votre satisfaction
            à chaque visite.
          </p>
          <div className="w-full flex justify-between gap-2 p-2 max-md:flex-col max-md:gap-8">
            <OurVission
              text="Notre Vision"
              icon="iconamoon:arrow-right-2-duotone"
              desc="Être la référence de confiance en réparation automobile, reconnue pour notre expertise et notre engagement à la qualité."
            />
            <OurVission
              text="Notre Mission"
              icon="iconamoon:arrow-right-2-duotone"
              desc="Offrir des services de réparation et d'entretien automobile de qualité, avec transparence et compétence, pour assurer la sécurité et la satisfaction de nos clients."
            />
          </div>
        </div>
        <div className="flex justify-between w-1/2 max-md:flex-col max-md:w-full max-md:gap-8">
          <img src={images.ABOUTIMG} className="w-[400px] max-md:w-full" />
          <div className="flex flex-col p-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="flex">
                <Numbers
                  num={98}
                  style="text-white text-[56px] font-extrabold"
                />
                <p className="text-white text-[56px] font-extrabold">%</p>
              </div>
              <p className="text-white text-[24px] font-bold">
                Clients Satisfaits
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex">
                <Numbers
                  num={359}
                  style="text-white text-[56px] font-extrabold"
                />
                <p className="text-white text-[56px] font-extrabold">+</p>
              </div>
              <p className="text-white text-[24px] font-bold">
                Travail Accompli
              </p>
            </div>
          </div>
          <div className="md:absolute mt-[400px] ml-[280px] w-[350px] max-md:mt-0 max-md:ml-0 max-md:w-full">
            <div className="flex p-4 border border-secondary flex-col bg-primary gap-4">
              <p className="text-white md:text-justify max-md:text-center font-mono">
                "Chez garage moderne automobile, nous nous engageons à assurer
                votre satisfaction à chaque visite. Nous visons à devenir votre
                partenaire de confiance."
              </p>
              <p className="text-white">PDG: NJIPOUAMOU FENJOU YOUNCHAOU</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
