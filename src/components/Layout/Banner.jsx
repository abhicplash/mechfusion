import React, { useState } from "react";
import banner from "../../Assets/mainbanner.jpg";
import banner2 from "../../Assets/09.jpg";
import { LiaAngleDoubleRightSolid } from "react-icons/lia";
import { LiaAngleDoubleLeftSolid } from "react-icons/lia";

function Banner() {
  const [view, setview] = useState(true);
  // setInterval(() => {
  //   setview(!view)    
  // }, 5000);
  return (
    <div className="relative ">
      <div className="flex w-full justify-between absolute items-center px-10 text-4xl text-gray-400 h-[90vh]">
        <h1
          onClick={() => {
            setview(!view);
          }}
        >
          <LiaAngleDoubleLeftSolid />
        </h1>
        <h1
          onClick={() => {
            setview(!view);
          }}
        >
          <LiaAngleDoubleRightSolid />
        </h1>
      </div>
      {view
        ? <div className="duration-1000 bg-[#f1fbfc]  shadow-[#595959] 
      px-32 w-full  h-[91vh] flex justify-between items-center">
            <img
              src={banner}
              alt="bannerimage"
              className="duration-1000 shadow-lg shadow-[#595959] h-[31rem] w-96"
            />
            <div className="flex w-full gap-12  flex-col justify-between items-start  text-left px-24 ">
              <h1 className="pr-8 text-[#595959]  drop-shadow-2xl  top-16 left-[27rem] w-[40rem]  text-5xl font-bold ">
                <span className=" text-[#002060]  ">Art </span>without
                engineering is dreaming.{" "}
                <span className="text-[#002060]">Engineering</span> without art
                is calculating <br />
                <span className="text-right absolute right-24 -bottom-10 text-lg text-[#002060] ">
                  -Steven Roberts
                </span>
              </h1>

              <button className="shadow-lg shadow-[#595959] bg-[#002060] font-semibold text-white text-lg h-14 w-48 ">
                Discover More...
              </button>
            </div>
          </div>
        : <div className="duration-1000 bg-[#d8d8d8]  shadow-[#595959]  
       px-32 w-full  h-[91vh] flex  justify-between items-center">
            <img
              src={banner2}
              alt="bannerimage"
              className="duration-1000 shadow-lg shadow-[#595959] h-[31rem] w-96"
            />
            <div className="flex w-full gap-12  flex-col justify-between items-start  text-left px-24 ">
              <h1 className="pr-8 text-[#595959]  drop-shadow-2xl  top-16 left-[27rem] w-[40rem]  text-5xl font-bold ">
                <span className=" text-[#002060]  ">Art </span>without
                engineering is dreaming.{" "}
                <span className="text-[#002060]">Engineering</span> without art
                is calculating <br />
                <span className="text-right absolute right-24 -bottom-10 text-lg text-[#002060] ">
                  -Steven Roberts
                </span>
              </h1>
              <button className="shadow-lg shadow-[#595959] bg-[#002060] font-semibold text-white text-lg h-14 w-48 ">
                Discover More...
              </button>
            </div>
          </div>}
    </div>
  );
}

export default Banner;
