import React from "react";
import Divider from "./Divider";
import { PricesType } from "../constants/prices";
import { Icon } from "@iconify/react/dist/iconify.js";

interface PriceItemType {
  style: string;
  price: PricesType;
}

const Price: React.FC<PriceItemType> = ({ style, price }) => {
  return (
    <div
      className={`${style} md:w-[350px] md:h-[600px] border p-8 flex flex-col gap-6 items-center`}
    >
      <p className="text-secondary font-bold md:text-[38px] max-md:text-[30px]">{price.type}</p>
      <p className="text-white md:text-[24px] max-md:text-xl">
        <span className="font-bold">{price.price}</span> / {price.duration}
      </p>
      <p className="text-center text-white text-lg">{price.desc}</p>
      <Divider />
      <div className="flex gap-4 items-center">
        <Icon icon="hugeicons:tick-01" className="text-[24px] text-secondary" />
        <p className="text-white text-lg">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="flex gap-4 items-center">
        <Icon icon="hugeicons:tick-01" className="text-[24px] text-secondary" />
        <p className="text-white text-lg">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="flex gap-4 items-center">
        <Icon icon="hugeicons:tick-01" className="text-[24px] text-secondary" />
        <p className="text-white text-lg">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="flex gap-4 items-center">
        <Icon icon="hugeicons:tick-01" className="text-[24px] text-secondary" />
        <p className="text-white text-lg">Lorem ipsum dolor sit amet.</p>
      </div>
      <Divider />
      <button className="bg-secondary p-2 w-[200px] font-bold underline text-primary">
        Nous Contacter
      </button>
    </div>
  );
};

export default Price;
