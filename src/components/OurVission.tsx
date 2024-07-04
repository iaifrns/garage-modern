import { Icon } from "@iconify/react/dist/iconify.js";

const OurVission = ({
  icon,
  text,
  desc,
}: {
  icon: string;
  text: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <Icon icon={icon} className=" bg-secondary rounded-full text-2xl text-white" />
        <p className="font-bold text-xl text-white">{text}</p>
      </div>
      <p className="text-white">{desc}</p>
    </div>
  );
};

export default OurVission;
