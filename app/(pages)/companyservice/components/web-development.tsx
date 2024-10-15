"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import PulsatingButton from "@/components/ui/pulsating-button";
import React from "react";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center">
      <div className="relative flex flex-col size-full items-center overflow-hidden min-h-screen bg-background bg-black w-[90%]">

        {/* Heading Section */}
        <div className="flex flex-col items-center gap-7 bg-transparent mt-6">
          <div className="flex flex-col lg:flex-row items-center gap-2 sm:gap-3">
            <span className="whitespace-pre-wrap text-left relative z-20 mt-2 bg-clip-text text-3xl sm:text-4xl md:text-6xl font-bold leading-none tracking-wide text-transparent bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff]">
              Web Development
            </span>
            <span className="text-white whitespace-pre-wrap text-left relative z-20 mt-2 bg-clip-text text-3xl sm:text-4xl md:text-6xl font-bold leading-none tracking-wide text-transparent">
              Services
            </span>
          </div>
          <p className="text-center text-gray-100 dark:text-gray-400 tracking-wide mt-4">
            At AGKraft, our Web Development Services provide customized,
            responsive, and scalable solutions tailored to your business needs,
            ensuring seamless performance and user engagement across platforms.
          </p>

          <div className="mt-4">
            <PulsatingButton>Consult Our Experts</PulsatingButton>;
          </div>
        </div>

        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
        <div className="text-white"></div>
      </div>
    </div>
  );
};

export default WebDevelopment;
