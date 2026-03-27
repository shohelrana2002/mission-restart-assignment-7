import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col gap-y-2 md:gap-y-0 p-1 md:p-0 w-full md:flex-row justify-between gap-x-4 h-100">
      {/* Left Image */}
      <div className=" w-full md:w-1/2 h-[60%] rounded-r-xl  bg-linear-to-b from-[#221e99] to-[#191ea4]  relative">
        <img src="/vector1.png" alt="banner" className="w-full  h-full " />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-white">In-Process</h1>
          <h1 className="text-3xl font-extrabold text-white">0</h1>
        </div>
      </div>

      {/* Right side Image  */}
      <div className="w-full md:w-1/2 rounded-l-xl h-[60%]  bg-linear-to-b from-[#1c9954] to-[#39d470] relative">
        <img src="/vector1.png" alt="banner" className="w-full  h-full " />

        <div className="absolute inset-0  flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Resolved</h1>
          <h1 className="text-3xl font-extrabold text-white">0</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
