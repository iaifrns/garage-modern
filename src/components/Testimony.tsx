import React from "react";
import { TestimonyType } from "../constants/testimonies";

interface TestimonailType {
  testimony: TestimonyType;
}
const Testimony: React.FC<TestimonailType> = ({ testimony }) => {
  return (
    <div className="relative h-[300px]">
      <div className="absolute w-full h-full">
        <div className="w-full flex flex-col justify-end items-center gap-4 h-full">
          <img
            src={testimony.image}
            className="w-16 rounded-full h-16 object-cover"
          />
          <p className="text-white font-bold text-lg">{testimony.name}</p>
          <p className="text-secondary font-bold">{testimony.title}</p>
        </div>
      </div>
      <div className="w-[340px] bg-white p-3 h-[180px]">
        <p className="font-bold text-sm text-center">
          {'" '}
          {testimony.message}
          {' "'}
        </p>
      </div>
    </div>
  );
};

export default Testimony;
