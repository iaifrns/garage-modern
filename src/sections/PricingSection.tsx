import { useState } from "react";
import Price from "../components/Price";
import { prices } from "../constants/prices";

const PricingSection = () => {
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const handleHover1 = () => setIsHover1(!isHover1);
  const handleHover2 = () => setIsHover2(!isHover2);
  return (
    <div className="p-8 pt-8 pb-8 flex flex-col gap-8 items-center bg-primary" id="pricing">
      <p className="text-secondary font-bold text-lg">Plan De Tarification</p>
      <p className="text-white md:text-[64px] max-md:text-[24px] max-md:text-center font-bold">
        FORFAITS DE SERVICES ET TARIFS
      </p>
      <p className="text-white">
        Consultez nos tarifs de formation pour vous former et vous préparer au
        marché.
      </p>
      <div className="flex justify-center w-full gap-4 max-md:flex-col">
        <Price
          handleHover={handleHover1}
          style={` ${
            isHover1
              ? "md:transform md:translate-y-0 transition duration-500 ease-in-out"
              : "md:transform md:translate-y-8 transition duration-500 ease-in-out"
          }`}
          price={prices[0]}
        />
        <Price style="border-secondary" price={prices[1]} />
        <Price
          handleHover={handleHover2}
          style={` ${
            isHover2
              ? "md:transform md:translate-y-0 transition duration-500 ease-in-out"
              : "md:transform md:translate-y-8 transition duration-500 ease-in-out"
          }`}
          price={prices[2]}
        />
      </div>
    </div>
  );
};

export default PricingSection;
