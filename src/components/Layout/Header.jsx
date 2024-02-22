import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    // <div className="w-full bg-[#ecf8f9] text-white justify-center items-center flex  h-[10vh] ">
    //   <div className="w-[80%] flex justify-between bg-[#002060] px-16 items-center h-[9vh] border rounded-full">
    //     <h1 className="text-4xl font-bold">MF</h1>
    //     <ul className="flex capitalize gap-20">
    //       <li>Home</li>
    //       <li>Services</li>
    //       <li>Team</li>
    //       <li>contact</li>
    //     </ul>
    //   </div>
    // </div>

    <div className="w-full flex justify-between bg-[#002060]  text-white uppercase  px-32 items-center h-[9vh]">
      <Link to={"/"}>
        <h1 className="text-4xl font-bold cursor-pointer ">
          Mech <span className="text-[#595959]">fusion</span>
        </h1>
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
