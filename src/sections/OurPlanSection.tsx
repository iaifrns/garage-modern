import { useInView } from "react-intersection-observer";
import Numbers from "../components/Numbers";
import { images } from "../constants/images";

const OurPlanSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 });
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <div className="bg-primary p-8 pt-8 pb-8 flex justify-center">
      <div className="flex max-md:flex-col max-md:h-[170vh] justify-between gap-4 items-center max-w-max-container">
        <div className="w-1/2 max-md:w-full flex flex-col gap-8 max-md:items-center">
          <p className="font-bold text-secondary text-lg max-md:w-full">
            Pourquoi Nous Choisir
          </p>
          <h1 className="text-white font-bold text-[32px] max-md:text-2xl">
            VOTRE VÉHICULE, NOTRE PRIORITÉ. FORMATION ET EXPERTISE GARANTIES.
          </h1>
          <p className="text-white text-lg">
            Notre équipe dédiée veille à ce que votre véhicule soit en parfait
            état, tout en vous offrant des formations de haute qualité pour
            maîtriser l'entretien automobile.
          </p>
          <a
            href="#services"
            className="flex items-center justify-center p-2 bg-secondary text-primary underline text-lg font-semibold w-48"
          >
            Nos Service
          </a>
        </div>
        <div className="relative w-1/2 h-[550px] max-md:h-full flex flex-col max-md:w-full justify-center items-center max-md:gap-4">
          <div
            ref={ref1}
            className={`md:absolute max-md:block max-md:w-full w-60 md:h-40 max-md:p-1 border border-secondary md:right-0 md:top-0 ${
              inView1
                ? "transform translate-y-0 transition duration-500 ease-in-out"
                : "translate-y-40"
            }  `}
          >
            <div className="flex flex-col gap-2 w-full h-full justify-center items-center bg-primary">
              <div className="flex">
                <Numbers
                  num={10}
                  style="text-white text-[56px] font-extrabold"
                />
                <p className="text-white text-[56px] font-extrabold">+</p>
              </div>
              <p className="text-white font-bold text-4xl">Ans Plus</p>
            </div>
          </div>
          <img src={images.IMAGE2} className="p-2 w-full " />
          <div
            ref={ref}
            className={`md:absolute max-md:block w-full h-40 max-md:h-full border border-secondary right-20 max-md:right-0 bottom-0 ${
              inView
                ? "transform translate-y-0 transition duration-500 ease-in-out"
                : "translate-y-40"
            } `}
          >
            <div className="flex justify-evenly w-full h-full max-md:flex-col">
              <div className="flex flex-col gap-2 w-full h-full justify-center items-center bg-primary">
                <div className="flex">
                  <Numbers
                    num={93}
                    style="text-white text-[56px] font-extrabold"
                  />
                  <p className="text-white text-[56px] font-extrabold">%</p>
                </div>
                <p className="text-white font-bold text-2xl">Abordabilité</p>
              </div>
              <div className="flex flex-col gap-2 w-full h-full justify-center items-center bg-primary">
                <div className="flex">
                  <Numbers
                    num={24}
                    style="text-white text-[56px] font-extrabold"
                  />
                  <p className="text-white text-[56px] font-extrabold">+</p>
                </div>
                <p className="text-white font-bold text-2xl">Pro Mécanique</p>
              </div>
              <div className="flex flex-col gap-2 w-full h-full justify-center items-center bg-primary">
                <div className="flex">
                  <Numbers
                    num={99}
                    style="text-white text-[56px] font-extrabold"
                  />
                  <p className="text-white text-[56px] font-extrabold">%</p>
                </div>
                <p className="text-white font-bold text-2xl">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPlanSection;
