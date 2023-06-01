import React from "react";
import logo from "../assets/logo1.png";

export default function Footer() {
  return (
    <div className="w-full h-[88px] bg-blue-50 flex items-center justify-between px-14 shadow-xl">
      <div className="flex items-center gap-16">
        <img src={logo} />
        <div>© 2020 VAJRA, All Rights Reserved</div>
      </div>
      <div>Terms & conditions | FAQ’s</div>
    </div>
  );
}
