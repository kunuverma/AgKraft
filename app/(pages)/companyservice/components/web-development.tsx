// WebDevelopment.tsx
"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import PulsatingButton from "@/components/ui/pulsating-button";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/data/company-service";
import { pageContent } from "@/data/company-service";
import { Tabs } from "@/components/ui/tabs";
import TabsDemo from "./tabs";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center">
      <div className=" flex flex-col size-full items-center overflow-hidden min-h-screen bg-background bg-black w-[90%]">
        {/* Heading Section */}
        <div className="flex flex-col items-center gap-7 bg-transparent mt-6">
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

        {/* Timeline section with mapped data */}
        <div className="w-full">
          <Timeline data={timelineData} />
        </div>

        {/* Collaborate section */}
        <div className=" text-white flex flex-col py-20">
          <div className="flex flex-col md:flex-row items-center gap-2 sm:gap-3">
            <span className="text-white whitespace-pre-wrap text-left relative z-20 mt-2 bg-clip-text text-lg md:text-xl lg:text-2xl xl:text-4xl mb-4 leading-none tracking-wide text-transparent">
              How We Collaborate With You for Your
            </span>
            <span className="whitespace-pre-wrap text-left relative z-20 mt-2 bg-clip-text text-lg md:text-xl lg:text-2xl xl:text-4xl mb-4 leading-none tracking-wide text-transparent bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff]">
              Custom Web Development Project
            </span>
          </div>
          <p className="text-neutral-300 text-sm md:text-base max-w-7xl">
            {pageContent.subtitle}
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg flex flex-col items-center text-center border hover:bg-[#1b1b1b] border-gray-800 shadow-md  shadow-[#1b1b1b]"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl text-neutral-100 font-medium">
                  {service.title}
                </h3>
                <p className="mt-4 text-neutral-300 text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="w-full">
          <TabsDemo />
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
