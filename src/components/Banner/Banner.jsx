import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between gap-x-2 h-[400px]">
      {/* Left Image */}
      <div className="w-1/2 h-[60%]  bg-linear-to-b from-[#221e99] to-[#191ea4]  relative">
        <img src="/vector1.png" alt="banner" className="w-full  h-full " />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Left Banner Text</h1>
        </div>
      </div>

      {/* Right side       ss Image  */}
      <div className="w-1/2 h-[60%]  bg-linear-to-b from-[#1c9954] to-[#39d470] relative">
        <img src="/vector1.png" alt="banner" className="w-full  h-full " />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Right Banner Text</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
