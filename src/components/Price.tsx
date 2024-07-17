import React from "react";
import Divider from "./Divider";
import { PricesType } from "../constants/prices";
import { Icon } from "@iconify/react/dist/iconify.js";
import { redirectToWhatsapp } from "../helper/redirectToWhatsapp";

interface PriceItemType {
  style: string;
  price: PricesType;
  handleHover?: () => void;
}

const Price: React.FC<PriceItemType> = ({ style, price, handleHover }) => {
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`${style} md:w-[350px] md:h-[600px] border p-8 flex flex-col gap-6 `}
    >
      <p className="text-secondary font-bold md:text-[38px] max-md:text-[30px] text-center">
        {price.type}
      </p>
      <p className="text-white md:text-[24px] max-md:text-xl  text-center">
        <span className="font-bold">{price.price}</span> / {price.duration}
      </p>
      <p className="text-center text-white text-lg">{price.desc}</p>
      <Divider />
      {price.content.map((data, index) => (
        <div className="flex gap-4 " key={index}>
          <Icon
            icon="hugeicons:tick-01"
            className="text-[24px] text-secondary"
          />
          <p className="text-white">{data}</p>
        </div>
      ))}

      <Divider />
      <div className="w-full justify-center flex">
        <button
          className="bg-secondary p-2 w-[200px] font-bold underline text-primary"
          onClick={redirectToWhatsapp}
        >
          Nous Contacter
        </button>
      </div>
    </div>
  );
};

export default Price;
