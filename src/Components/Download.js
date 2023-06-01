import React from "react";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

export default function Download() {
  return (
    <div className="flex justify-center gap-10 py-20 items-center">
      <div className="text-2xl font-medium text-blue-900">Download our App</div>
      <img src={playstore} />
      <img src={appstore} />
    </div>
  );
}
