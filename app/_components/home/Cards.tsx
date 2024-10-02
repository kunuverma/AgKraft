
"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projects } from "@/data/home-data";

const Cards = () => {
  return (

    <div className="flex flex-col justify-center items-center mx-5 sm:mx-10 bg-[#191A1E] h-full shadow-[0px_0px_5px_0px_#0D6889] rounded-md transition-all duration-300 ease-in-out hover:shadow-[0px_0px_5px_0px_#0D6889] hover:border-green-500 border border-gray-700">
      <div className='flex items-center gap-2 sm:gap-3 mt-6'>
        <span className="text-white whitespace-pre-wrap text-left relative z-20 mt-2 bg-clip-text text-3xl sm:text-4xl font-bold leading-none tracking-tighter text-transparent">
          Our Core
        </span>
        <span className='whitespace-pre-wrap text-left relative z-20 mt-2 bg-clip-text text-3xl sm:text-4xl font-bold leading-none tracking-tighter text-transparent bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff]'>Services</span>
      </div>



      <div className="h-full relative w-full overflow-hidden bg-[#191A1E] flex flex-col items-center justify-center shadow-md">
        <div className="absolute inset-0 w-full h-full bg-[#191A1E] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none shadow-md " />
        {/* <Boxes /> */}
        <div className="px-20 max-w-[1560px] mx-auto rounded-md">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>

  );
}

export default Cards

