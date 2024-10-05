import React from 'react';
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { AboutData } from "@/data/about";
import question from "@/public/assest/question.jpg"
import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from 'next/link';
import FoundingStory from "@/public/assest/card3.png"

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#191A1E] relative w-full min-h-screen flex justify-center items-center">
      {/* Spotlight background */}
      <div className="absolute  inset-0 bg-gradient-to-r from-transparent via-[#083148] to-transparent animate-spotlight z-0"></div>
      <div className="flex flex-col h-full gap-8 w-full max-w-[1440px] z-30">

        {/* About Company */}
        <div className="flex flex-col justify-center items-center">
          <div className=" bg-transparent flex flex-col justify-center items-center
        w-full sm:w-[90%] md:w-[70%] lg:w-[60rem] p-4 sm:p-6 md:p-8 relative overflow-hidden 
        rounded-xl mt-4 flex-grow">
            {/* <TextRevealCard
              text="Future-Ready Development"
              revealText="Strategic Software Design">
            </TextRevealCard> */}
            <div className='flex justify-center items-center'>
              <h1 className='text-3xl sm:text-4xl font-bold text-white'>
              Future-Ready Development
              </h1>
            </div>
            <p className="text-center text-gray-100 dark:text-gray-400 tracking-wide mt-4">
              Our team builds solutions that are not only innovative but also strategically crafted. <br className="hidden md:block" />
              We ensure that each project supports your business objectives.
            </p>
          </div>
          
          </div>

          {/* founding story start*/}
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="lg:my-24 mt-5 flex lg:w-[50%] flex-col gap-10 ms-20 mt-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-white lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-white lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory.src}
                alt=""
                className="shadow-[0px_0px_20px_3px_#a0aec0] rounded-xl lg:w-[40rem] w-[40]"
              />
            </div>
          </div>
          {/* end */}


        {/* Our Planning */}
      <div className='flex flex-col justify-center items-center mt-10'>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 w-[80%] ">
          {AboutData.map((item, index) => (
            <div className='flex flex-col justify-center items-center bg-[#353535] p-10 rounded-xl  shadow-[0px_0px_3px_0px_#b2f5ea] ' key={index}>
              <h1 className='text-gray-100 font-normal text-base tracking-wide mb-4'>{item.title}</h1>
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
        <div className='flex flex-col'>
          <div className='flex justify-between'>
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
