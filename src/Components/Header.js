import React from "react";
import logo from "../assets/logo1.png";

export default function Header() {
  return (
    <div className="w-full h-[108px] bg-blue-50 flex items-center justify-between px-14 text-blue-900 font-medium shadow-xl">
      <div className="flex items-center justify-center gap-16 flex-1">
        <img src={logo} />
        <div>Home</div>
      </div>
      <div>+91 89715 80265</div>
    </div>
  );
}
