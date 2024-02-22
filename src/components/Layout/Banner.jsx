import React from "react";
import banner from "../../Assets/mainbanner.jpg";

function Banner() {
  return (
    <div className="bg-[#ecf8f9] shadow-sm shadow-[#595959] relative px-32 w-full  h-[91vh] flex justify-between items-center">
      <img
        src={banner}
        alt="bannerimage"
        className="shadow-lg shadow-[#595959] h-[31rem] w-96"
      />
      <div className="flex w-full gap-12  flex-col justify-between items-start  text-left px-24 ">
        <h1 className="pr-8 text-[#595959]  drop-shadow-2xl  top-16 left-[27rem] w-[40rem]  text-5xl font-bold ">
          <span className=" text-[#002060]  ">Art </span>without engineering is
          dreaming. <span className="text-[#002060]">Engineering</span> without
          art is calculating <br />
          <span className="text-right absolute right-24 -bottom-10 text-lg text-[#002060] ">
            -Steven Roberts
          </span>
        </h1>
        <p className="text-[#002060]  text-lg   ">
          <span className="uppercase text-lg font-semibold">
            Mech <span className="text-[#595959]">fusion </span>
          </span>
          is committed to providing quality professional engineering services to
          enhance the communities where our clients live and work. Our approach
          combines exceptional design, innovative solutions, and proven
          performance.
        </p>
        <button className="shadow-lg shadow-[#595959] bg-[#002060] font-semibold text-white text-lg h-14 w-48 ">
          Discover More...
        </button>
      </div>
    </div>
  );
}

export default Banner;
