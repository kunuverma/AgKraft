import React from 'react';
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { AboutData } from "@/data/about";
import question from "@/public/assest/question.jpg"
import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from 'next/link';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#191A1E] relative w-full min-h-screen flex justify-center items-center">
      {/* Spotlight background */}
      <div className="absolute  inset-0 bg-gradient-to-r from-transparent via-[#2890f950] to-transparent animate-spotlight z-0"></div>
      <div className="flex flex-col h-full gap-8 w-full max-w-[1440px] z-30">

        {/* About Company */}
        <div className="flex flex-col justify-center items-center">
          <div className=" bg-transparent flex flex-col justify-center items-center
        w-full sm:w-[90%] md:w-[70%] lg:w-[60rem] p-4 sm:p-6 md:p-8 relative overflow-hidden 
        rounded-xl mt-4 flex-grow">
            <TextRevealCard
              text="Future-Ready Development"
              revealText="Strategic Software Design">
            </TextRevealCard>
            <p className="text-center text-gray-500 dark:text-gray-400 tracking-wide mt-4">
              Our team builds solutions that are not only innovative but also strategically crafted. <br className="hidden md:block" />
              We ensure that each project supports your business objectives.
            </p>
          </div></div>


        {/* Our Planning */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {AboutData.map((item, index) => (
            <div className='flex flex-col justify-start items-start' key={index}>
              <h1 className='text-[#949494] font-normal text-lg mb-4'>{item.title}</h1>
              <img
                className="w-full max-w-xs sm:max-w-sm lg:max-w-[700px] rounded-md"
                src={item.image.src}
                alt={item.title}
              />
            </div>
          ))}
        </div>

        {/* Questions */}
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <h1 className="mb-4 text-xl sm:text-2xl font-bold tracking-wide leading-none text-white text-center sm:text-left">
                Common Queries Solved
              </h1>
              <p className="mb-6 text-sm sm:text-base font-normal text-gray-500 text-center sm:text-left">
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
              className="w-full h-full rounded-md object-cover"
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
