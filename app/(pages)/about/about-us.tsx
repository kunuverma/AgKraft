"use client"

import React from 'react';
import { AboutData } from "@/data/about";
import question from "@/public/assest/question.jpg"
import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay"
import { Slider } from "@/data/about"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const AboutPage: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className="bg-[#191A1E] relative w-full min-h-screen flex justify-center items-center">
      {/* Spotlight background */}
      <div className="absolute  inset-0 bg-gradient-to-r from-transparent via-[#923702] to-transparent animate-spotlight z-0"></div>
      <div className="flex flex-col h-full gap-8 w-full max-w-[1440px] z-30">

        {/* About Company */}
        <div className="flex flex-col justify-center items-center">
          <div className=" bg-transparent flex flex-col justify-center items-center w-full sm:w-[90%] md:w-[70%] lg:w-[60rem] p-4 sm:p-6 md:p-8 relative overflow-hidden rounded-xl mt-4 flex-grow">
            <h1 className='text-3xl sm:text-4xl font-bold text-white'>
              Strategic Software Design
            </h1>
            <p className="text-center text-gray-100 dark:text-gray-400 tracking-wide mt-4">
              Our team builds solutions that are not only innovative but also strategically crafted.
            </p>
          </div>
        </div>

        {/* About Company */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col w-[93%]">
            <div className=" bg-transparent flex flex-col justify-center items-center">
              <div className='flex items-center gap-2 sm:gap-3'>
                <span className="text-white whitespace-pre-wrap text-left relative z-20 mt-2 bg-clip-text text-3xl sm:text-4xl font-bold leading-none tracking-wide text-transparent">
                  Modern
                </span>
                <span className='whitespace-pre-wrap text-left relative z-20 mt-2 bg-clip-text text-3xl sm:text-4xl font-bold leading-none tracking-wide text-transparent bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff]'>Tech Solutions</span>
              </div>
              <p className="text-center text-gray-100 dark:text-gray-400 tracking-wide mt-4">
                AGKraft is committed to utilizing the latest and upcoming technologies, including advancements in AI, to deliver cutting-edge solutions. We embrace innovation to build software that is future-ready and scalable. By integrating AI, we enhance efficiency,
                automation, and user experiences across our projects. Our goal is to ensure that clients stay ahead with tech solutions designed for tomorrow.
              </p>
            </div>

            {/* Carousel */}
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-[1440px] mt-5"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}>
              <CarouselContent className="-ml-1">
                {Slider.map((item, index, array) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="">
                        <CardContent className="flex aspect-square items-center justify-center rounded-md">
                          <img className="w-full h-full rounded-md" src={item.image.src} alt={item.alt} />
                          {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious />
            <CarouselNext /> */}
            </Carousel>
          </div>
        </div>


        {/* Our Planning */}
        <div className='flex flex-col justify-center items-center mt-10'>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 w-[93%] ">
            {AboutData.map((item, index) => (
              <div className='flex flex-col justify-center items-center bg-[#353535] p-10 rounded-xl  shadow-[0px_0px_3px_0px_#b2f5ea] ' key={index}>
                <h1 className='text-3xl font-bold text-white mb-4 text-start'>{item.heading}</h1>
                <p className='text-gray-100 font-light text-base tracking-wide mb-4 text-justify text-pretty'>{item.title}</p>
                <img
                  className="w-full max-w-xs sm:max-w-sm  lg:max-w-[700px] rounded-md"
                  src={item.image.src}
                  alt={item.title}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Questions */}
        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-between w-[93%]'>
            <div className='flex flex-col'>
              <h1 className="mb-4 text-xl sm:text-2xl font-bold tracking-wide leading-none text-white text-center sm:text-left">
                Common Queries Solved
              </h1>
              <p className="mb-6 text-sm sm:text-base font-normal text-gray-100 text-center sm:text-left">
                Get the answers to your pressing questions with our visual FAQ. We aim to make your project journey smoother and more transparent.
              </p>
            </div>
            <Link href={"/faq"} className=''>
              <ShimmerButton
                className="shadow-2xl"
              >
                <span className="whitespace-pre-wrap text-center text-sm md:text-lg font-medium leading-none tracking-tight text-white">
                  Get Answers
                </span>
              </ShimmerButton>
            </Link>
          </div>
          <div className="flex justify-center sm:justify-start">
            <img
              className="w-full max-w-xs sm:max-w-sm  lg:max-w-[900px] rounded-md object-cover"
              src={question.src}
              alt="FAQ Image"
            />
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default AboutPage;
