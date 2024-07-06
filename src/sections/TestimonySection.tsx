import { Icon } from "@iconify/react/dist/iconify.js";
import Testimony from "../components/Testimony";
import { images } from "../constants/images";
import { testimonies } from "../constants/testimonies";

const TestimonySection = () => {
  return (
    <div className="relative w-full h-[100vh]">
      <div className="absolute w-full h-full bg-primary bg-opacity-25">
        <div className="flex items-center p-8 w-full h-full">
          <div className="h-full w-4/5 bg-primary"></div>
        </div>
      </div>
      <div className="absolute w-full h-full z-10">
        <div className="flex items-center p-4 pl-16 pr-8 w-full h-full">
          <div className="h-full w-2/5 flex flex-col gap-8">
            <div className="rounded-full bg-secondary w-14 p-3 flex justify-center items-center">
              <Icon icon="material-symbols:more-down" className="text-[32px] font-bold text-white" />
            </div>
            <p className="text-lg text-secondary font-bold">Testimonial</p>
            <p className="text-white text-[64px] font-bold">
              STORIES FROM OUR CUSTOMERS
            </p>
            <p className="text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              culpa dolorum aperiam laborum, provident consequuntur asperiores.
              Maiores fuga optio fugiat perspiciatis similique quod.
              Necessitatibus, quo quasi. Eos quos in deserunt?
            </p>
          </div>
          <div className="h-full w-3/5 flex justify-center p-2 items-center gap-4">
            {testimonies.map((testimony, index) => (
              <Testimony key={index} testimony={testimony} />
            ))}
          </div>
        </div>
      </div>
      <img src={images.BGTESTIMONY} className="w-full h-full" />
    </div>
  );
};

export default TestimonySection;
