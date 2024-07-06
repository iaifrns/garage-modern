import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const ServiceComponent = ({
  borderColor,
  icon,
  title,
  desc,
  bgColor,
}: {
  borderColor: string;
  icon: string;
  title: string;
  desc: string;
  bgColor: string;
}) => {
  const [isHover, setIsHover] = useState(false);
  const handleHover = () => setIsHover(!isHover);
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`flex flex-col gap-4 w-full h-[250px] p-4 border cursor-default ${borderColor} ${bgColor} ${
        isHover ? "bg-primary" : ""
      }`}
    >
      <Icon icon={icon} className="text-secondary text-[64px]" />
      <p className="text-white font-bold text-2xl">{title}</p>
      <p className="text-white">{desc}</p>
    </div>
  );
};

export default ServiceComponent;
