import { Icon } from "@iconify/react/dist/iconify.js";
import Testimony from "../components/Testimony";
import { images } from "../constants/images";
import { testimonies } from "../constants/testimonies";

const TestimonySection = () => {
  return (
    <div className="relative w-full h-[100vh] max-md:h-[110vh]">
      <div className="absolute w-full h-full bg-primary bg-opacity-25 max-md:block">
        <div className="flex md:items-center md:p-8 max-md:p-4 w-full h-full max-md:pt-14">
          <div className="h-full w-[85%] max-md:h-[70%] max-md:w-full bg-primary"></div>
        </div>
      </div>
      <div className="absolute w-full h-full md:z-10 max-md:block">
        <div className="flex items-center p-4 max-md:p-8 md:pl-16 md:pr-8 w-full h-full max-md:flex-col max-md:gap-4">
          <div className="h-full w-2/5 flex flex-col gap-10 max-md:w-full max-md:items-center">
            <div className="rounded-full bg-secondary w-14 p-3 flex justify-center items-center">
              <Icon
                icon="material-symbols:more-down"
                className="text-[32px] font-bold text-white"
              />
            </div>
            <p className="text-lg text-secondary font-bold">Testimonial</p>
            <p className="text-white text-[64px] font-bold max-md:text-4xl max-md:text-center">
              RÉCITS DE NOS CLIENTS
            </p>
            <p className="text-white  max-md:text-center">
              Nous aimons nos clients et nous nous efforçons de leur offrir un
              service exceptionnel à chaque visite. Chez Garage Moderne
              Automobile, la satisfaction de nos clients est notre priorité
              absolue.
            </p>
          </div>
          <div className="h-full max-md:hidden w-3/5 flex justify-center p-2 items-center gap-4 max-md:flex-col max-md:w-full">
            {testimonies.map((testimony, index) => (
              <Testimony key={index} testimony={testimony} />
            ))}
          </div>
          <div className="h-full md:hidden w-3/5 flex justify-center p-2 items-center gap-4 max-md:flex-col max-md:w-full">
            <Testimony testimony={testimonies[0]} />
          </div>
        </div>
      </div>
      <img src={images.BGTESTIMONY} className="w-full h-full" />
    </div>
  );
};

export default TestimonySection;
