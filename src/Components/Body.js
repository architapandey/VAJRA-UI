import React from "react";
import { features } from "../data";
export default function Body() {
  return (
    <div className="h-[588px] w-full flex-1 rounded-[30px] bg-blue-900 p-4 m-8 shadow-xl">
      <h2 className="text-white text-center text-3xl font-extrabold">
        FEATURES
      </h2>
      <div className="flex flex-col justify-center space-y-20 p-10">
        {features.map((feature) => (
          <div className="flex items-center gap-4">
            <div className="h-[88px] w-[88px] bg-white rounded-lg flex items-center justify-center">
              <img src={feature.image} className="" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white ml-4 font-bold text-xl">
                {feature.title}
              </p>
              <p className="text-white ml-4 ">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
