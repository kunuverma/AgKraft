import { useState } from 'react';
import React from 'react';
import Autoplay from "embla-carousel-autoplay";
import { Slider } from "@/data/about"; // Ensure this contains the correct project images and data
import { Card, CardContent } from "@/components/ui/card";
import { Detail } from "@/app/(pages)/gallarydetail/[gallaryId]/detail";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';

export const GalleryDet: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  // Derive the ProjectdataId based on the currently clicked photo index
  const currentProjectDataId = Slider[photoIndex]?.id || ''; 

  return (
    <div className=" bg-[#191A1E] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1f1c2c] to-transparent animate-spotlight z-0"></div>
      <div className='z-20'>
        <div>
          <section
            className="relative h-[300px] bg-cover bg-center"
            style={{ backgroundImage: "url('/assest/ecom.jpeg')" }} // Ensure image path is correct
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex w-[100%] flex-col items-center justify-center h-full gap-3 text-center text-white">
              <h1 className="text-center text-white bg-clip-text text-3xl sm:text-4xl font-bold leading-none tracking-wide text-transparent">
                Tailored Website Solutions for Every Industry
              </h1>
              <p className="text-center text-gray-100 dark:text-gray-400 tracking-wide">
                We create websites for businesses, individuals, and organizations, each customized to meet your goals. Stand out online with a site designed for success.
              </p>
            </div>
          </section>
        </div>

        {/* Carousel */}
        <div className='pt-5 flex justify-center items-center'>
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-[1440px] cursor-pointer"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-1">
              {Slider.map((item, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-[20rem]" onClick={() => handleImageClick(index)}>
                    <Card>
                      <CardContent className="flex aspect-square justify-center rounded-md">
                        <img className="w-full h-[70%] rounded-md" src={item.image.src} alt={item.alt} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Lightbox for zoom and navigation */}
        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={photoIndex}
            slides={Slider.map(item => ({ src: item.image.src }))}
          />
        )}

        {/* Pass the correct ProjectdataId to the Detail component */}
        <div className='relative'>
          <Detail ProjectdataId={currentProjectDataId} /> {/* Pass the correct ProjectdataId */}
        </div>
      </div>

      {/* full info how website create */}
    </div>
  );
};
