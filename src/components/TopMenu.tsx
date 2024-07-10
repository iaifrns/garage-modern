import { useState } from "react";
import { images } from "../constants/images";

const Menu = ({ text }: { text: string }) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseMovement = (value: boolean) => {
    setIsHover(value);
  };
  return (
    <p
      onMouseEnter={() => handleMouseMovement(true)}
      onMouseLeave={() => handleMouseMovement(false)}
      className={`text-white text-lg font-semibold cursor-pointer p-2 rounded-sm ${
        isHover ? "bg-secondary" : ""
      }`}
    >
      {text}
    </p>
  );
};

const TopMenu = () => {
  return (
    <div className="p-4 flex w-full justify-between items-center">
      <div className="flex items-center w-[300px] max-md:w-full">
        <img src={images.LOGO} width={"60px"} />
        <p className="text-white text-xl">Garage Moderne Automobile</p>
      </div>
      <div className="flex w-full justify-evenly max-md:hidden">
        <Menu text="Accueil" />
        <Menu text="À propos" />
        <Menu text="Services" />
        <Menu text="Tarification" />
      </div>
      <button className="p-4 bg-primary font-bold text-white w-[200px] max-md:hidden">Nous Contacter</button>
    </div>
  );
};

export default TopMenu;
