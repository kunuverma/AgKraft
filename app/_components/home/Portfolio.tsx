import React, { useState, useEffect } from 'react';
import slides from '../../../data/project'; 
import Link from 'next/link';
import ShimmerButton from "../../../components/magicui/shimmer-button";

const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(goToNextSlide, 3000); // Auto-slide every 3 seconds
            return () => clearInterval(timer);
        }
    }, [isPaused]);

    return (
        <div className="relative w-full flex flex-col justify-center items-center bg-[#191A1E] md:mt-[10rem]">
            {/* Projects Header */}
            <div className="flex flex-col justify-center items-center gap-4 mt-4">
                <div className='flex items-center gap-2 sm:gap-3'>
                    <span className="text-white text-xl sm:text-2xl lg:text-4xl font-bold leading-none tracking-tighter">
                        Projects We've
                    </span>
                    <span className='bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent text-xl sm:text-2xl lg:text-4xl font-bold leading-none tracking-tighter'>
                        Delivered
                    </span>
                </div>
                <h1 className='text-white text-sm sm:text-lg text-center font-normal'>
                    At AGKraft, our projects reflect our passion for excellence and our ability to bring visions to life.
                </h1>
            </div>

            {/* Carousel Section */}
            <div 
                className="relative w-full lg:h-[30rem] h-[16rem] md:h-[20rem] overflow-hidden" 
                onMouseEnter={() => setIsPaused(true)} 
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    className="flex flex-row transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide movement logic
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="min-w-full flex flex-row justify-center items-center">
                            <img 
                                src={slide.image} 
                                alt={slide.title} 
                                className="w-[90%] lg:w-[50%] rounded-md"
                            />
                            <div className="absolute bottom-8 left-4 md:left-8 p-4 text-left bg-gradient-to-t from-black/70 to-transparent w-full lg:w-[50%]">
                                <h2 className="text-white text-xl md:text-4xl font-bold">{slide.title}</h2>
                                <p className="text-white text-sm md:text-base">{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Left Arrow */}
                <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    onClick={goToPreviousSlide}
                >
                    &#9664;
                </button>

                {/* Right Arrow */}
                <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    onClick={goToNextSlide}
                >
                    &#9654;
                </button>
            </div>

            {/* Explore More Button */}
            <Link href={"/work"} className='mt-5 mb-5'>
                <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm md:text-lg font-medium leading-none tracking-tight text-white">
                        Explore More
                    </span>
                </ShimmerButton>
            </Link>
        </div>
    );
};

export default Portfolio;
