
"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projects } from "@/data/home-data";

const Cards = () => {
  return (

    <div className="flex flex-col justify-center items-center bg-[#191A1E] h-full mt-4">
      <div className="flex items-center gap-4 mt-4">
        <h1 className="whitespace-pre-wrap text-white bg-clip-text text-5xl font-bold leading-none tracking-tighter text-transparent">Our Core</h1>
        <h1
        className=" whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-5xl font-bold leading-none tracking-tighter text-transparent"
      >
         Services
      </h1>
      </div>
      
      <div className="h-full relative w-full overflow-hidden bg-[#191A1E] flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-[#191A1E] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none shadow-md " />
        {/* <Boxes /> */}
        <div className="px-20 max-w-[1560px] mx-auto">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>

  );
}

export default Cards

