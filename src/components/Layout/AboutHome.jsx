import React from "react";

function AboutHome() {
  return (
    <div className="relative w-full px-32 flex h-[100vh] py-16 bg-white">
      <div className=" flex flex-col-reverse w-full">
        <div className="w-full h-1/2 bg-[#ecf8f9]">
          <h1>mission</h1>
          <h1 className="p-10">
            MECHFUSION is committed to providing quality professional
            engineering services to enhance the communities where our clients
            live and work. Our approach combines exceptional design, innovative
            solutions, and proven performance.
          </h1>
        </div>
        <div className="  h-1/2 bg-home-Services_four bg-center bg-cover  w-full" />
      </div>
      <div className="flex flex-col w-full">
        <div className="w-full h-1/2 bg-[#ecf8f9]">
          <h1>mission</h1>
          <h1 className="p-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            debitis, iste sit facilis quod sint inventore ratione ipsum soluta
            dignissimos ex, aut quisquam, repellendus id numquam eos? Aut,
            repudiandae magnam?
          </h1>
        </div>
        <div className=" bg-home-Services_four bg-center bg-cover h-1/2 w-full" />
      </div>
      <div className=" flex flex-col-reverse w-full">
        <div className="w-full h-1/2 bg-[#ecf8f9]">
          <h1>mission</h1>

          <h1 className="z-10 relative p-10">
            To be the leading multi discipline Engineering consulting service
            company providing Mechanical Engineering Services.
          </h1>
        </div>
        <div className="  h-1/2 bg-home-Services_four bg-center bg-cover  w-full" />
      </div>
    </div>
  );
}

export default AboutHome;
