import Price from "../components/Price";
import { prices } from "../constants/prices";

const PricingSection = () => {
  return (
    <div className="p-8 pt-8 pb-8 flex flex-col gap-8 items-center bg-primary">
      <p className="text-secondary font-bold text-lg">Plan De Tarification</p>
      <p className="text-white md:text-[64px] max-md:text-[24px] max-md:text-center font-bold">FORFAITS DE SERVICES ET TARIFS</p>
      <p className="text-white">
      Consultez nos tarifs de formation pour vous former et vous préparer au marché.
      </p>
      <div className="flex justify-center w-full gap-4 max-md:flex-col">
        <Price style="mt-8" price={prices[0]} />
        <Price style="border-secondary" price={prices[1]} />
        <Price style="mt-8" price={prices[2]} />
      </div>
    </div>
  );
};

export default PricingSection;
