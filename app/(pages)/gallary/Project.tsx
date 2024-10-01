// components/ui/ThreeDCardDemo.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"; // Adjust the import path as needed
import { Projectdata } from "@/data/project"; // Adjust the import path as needed

export const ThreeDCardDemo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 bg-[#191A1E]"> {/* Create a grid with responsive columns */}
      {Projectdata.map((data) => (
        <CardContainer key={data.id} className="inter-var mx-4">
          <CardBody className="relative group/card bg-black border   border-white w-auto h-auto rounded-xl p-6 ">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-100 dark:text-white">
              {data.title}
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300">
              {data.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={data.image}
                height="1000"
                width="800"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={data.title}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              {/* <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white"
              >
                Try now →
              </CardItem> */} 
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl border border-white dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Explore more →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
};

export default ThreeDCardDemo;
