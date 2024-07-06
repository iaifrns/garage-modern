import { images } from "../constants/images";

const OurPlanSection = () => {
  return (
    <div className="bg-primary p-4 pt-8 pb-8 flex max-md:flex-col max-md:h-[170vh] justify-between gap-4 items-center">
      <div className="w-1/2 max-md:w-full flex flex-col gap-8">
        <p className="font-bold text-secondary text-xl">Why Chouse Us</p>
        <h1 className="text-white font-bold text-[40px] max-md:text-3xl">
          THE QUALITY AND TRUST YOU NEED
        </h1>
        <p className="text-white text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          animi, voluptates quis labore excepturi fugiat nulla veniam debitis
          eius, delectus perspiciatis libero eligendi vel aperiam saepe nihil
          doloremque eaque dignissimos!
        </p>
        <button className="p-2 bg-secondary text-primary underline text-lg font-semibold w-48">
          View More
        </button>
      </div>
      <div className="relative w-1/2 h-[550px] max-md:h-full flex flex-col max-md:w-full justify-center items-center max-md:gap-4">
        <div className="md:absolute max-md:block max-md:w-full w-60 md:h-40 max-md:p-1 border border-secondary md:right-0 md:top-0">
          <div className="flex flex-col gap-2 w-full h-full justify-center items-center bg-primary">
            <p className="text-white font-bold text-[52px]">25+</p>
            <p className="text-white font-bold text-4xl">Years More</p>
          </div>
        </div>
        <div className="md:absolute max-md:block w-full h-40 max-md:h-full border border-secondary right-20 max-md:right-0 bottom-0">
          <div className="flex justify-evenly w-full h-full max-md:flex-col">
            <div className="flex flex-col gap-2 w-full h-full justify-center items-center bg-primary">
              <p className="text-white font-bold text-[52px]">93%</p>
              <p className="text-white font-bold text-3xl">Affordability</p>
            </div>
            <div className="flex flex-col gap-2 w-full h-full justify-center items-center bg-primary">
              <p className="text-white font-bold text-[52px]">45+</p>
              <p className="text-white font-bold text-3xl">Pro Mechanic</p>
            </div>
            <div className="flex flex-col gap-2 w-full h-full justify-center items-center bg-primary">
              <p className="text-white font-bold text-[52px]">99%</p>
              <p className="text-white font-bold text-3xl">Satisfaction</p>
            </div>
          </div>
        </div>
        <img src={images.IMAGE1} className="p-2 w-full" />
      </div>
    </div>
  );
};

export default OurPlanSection;
