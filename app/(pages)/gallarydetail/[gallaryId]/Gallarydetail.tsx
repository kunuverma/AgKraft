import React, { useState } from 'react';
import Autoplay from "embla-carousel-autoplay";
import { Slider } from "@/data/about";
import { Card, CardContent } from "@/components/ui/card";
import { Detail } from "@/app/(pages)/gallarydetail/[gallaryId]/Detail"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import 'yet-another-react-lightbox/styles.css'; // Import lightbox styles
import Lightbox from 'yet-another-react-lightbox'; // Import Lightbox component

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

  return (
    <div className=" bg-[#191A1E] relative">
       <div className="absolute  inset-0 bg-gradient-to-r from-transparent via-[#1f1c2c] to-transparent animate-spotlight z-0"></div>
     <div className='z-20'>
     <div>
        <section
          className="relative h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/assest/ecom.jpeg')" }} // Ensure image path is correct
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex w-[100%] flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl font-bold w-3/4 bg-gradient-to-r from-[#F09819] to-[#f5c686] bg-clip-text text-transparent">
              Tailored Website Solutions for Every Industry
            </h1>
            <p className="mt-4 text-lg text-slate-100 w-3/4">
              We create websites for businesses, individuals, and organizations, each customized to meet your goals. Stand out online with a site designed for success.
            </p>
          </div>
        </section>
      </div>

      {/* Carousel */}
      <div className='pt-5 '>
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
        // onPrev={() => setPhotoIndex((photoIndex + Slider.length - 1) % Slider.length)}
        // onNext={() => setPhotoIndex((photoIndex + 1) % Slider.length)}
        />
      )}


      <div className=''>
        <Detail />
      </div>
     </div>




      {/* full info how website create */}



    </div>
  );
};
