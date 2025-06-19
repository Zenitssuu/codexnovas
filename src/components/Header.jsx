import React from "react";
import logo from "../assets/logo2.png";

export default function Header() {
  return (
    <div className="flex w-auto items-center justify-around text-[18px]">
      <div className="font-[500] text-white">
        <img src={logo} style={{ height: "40px" }} />
      </div>

      <div className="font-[600] flex gap-14 items-center leading-none text-white font-[Poppins, sans-serif] gap-14
      ml-[7rem]">
        <div className="">Home</div>
        <div className=" ">Shop</div>
        <div className="">Delivery</div>
        <div className="">Contact</div>
      </div>

      <div>
        <button className="font-[600] border-[2px] rounded-[5px] px-[25px] py-[5px] text-white">
          Order Your Ice-cream
        </button>
      </div>
    </div>
  );
}
