import React from "react";
import { images } from "../constants/images";

interface MenuType {
  text: string;
  href: string;
}

const Menu: React.FC<MenuType> = ({ text, href }) => {
  return (
    <a
      href={href}
      className={`text-white text-lg font-semibold cursor-pointer p-2 rounded-sm hover:bg-secondary`}
    >
      {text}
    </a>
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
        <Menu text="Accueil" href="#home" />
        <Menu text="À propos" href="#about" />
        <Menu text="Services" href="#services" />
        <Menu text="Tarification" href="#pricing" />
      </div>
      <button className="p-4 bg-primary font-bold text-white w-[200px] max-md:hidden">
        Nous Contacter
      </button>
    </div>
  );
};

export default TopMenu;
