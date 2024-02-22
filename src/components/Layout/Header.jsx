import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
   

    <div className="w-full flex justify-between bg-[#002060]   text-white  px-32 items-center h-[9vh]">
      <Link to={"/"}>
        <div className="flex flex-col gap-0 justify-center items-end ">
          <h1 className="text-4xl font-bold cursor-pointer    ">
            Mech<span className="text-[#595959]">Fusion</span>
          </h1>
          <h1 className="text-sm font-semibold text-[#595959] mt-[-5px] uppercase">
            Engineering Solutions
          </h1>
        </div>
      </Link>
      <ul className="flex capitalize gap-20 text-[#089cla] font-semibold">
        <Link to={"/"}>
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link to={"/about"}>
          <li className="cursor-pointer">About us</li>
        </Link>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Team</li>
        <li className="cursor-pointer">contact</li>
      </ul>
    </div>
  );
}

export default Header;
