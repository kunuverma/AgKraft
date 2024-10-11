import React, { useState, useEffect } from 'react';
import slides from '../../../data/project'; // Make sure slides are defined with the proper structure
import Link from 'next/link';
import ShimmerButton from "../../../components/magicui/shimmer-button";

interface Slide {
    id: number;
    image: string;
    title: string;
    description: string;
    url: string;
}

const Portfolio: React.FC = () => {
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
        <div className="relative w-full flex flex-col gap-y-6 justify-center items-center bg-[#191A1E] md:mt-[5rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f1571050] to-transparent animate-spotlight"></div>
            {/* Projects Header */}
            <div className="flex flex-col justify-center items-center gap-4 mt-8">
                <div className='flex items-center gap-2 sm:gap-3'>
                    <span className="text-white text-xl sm:text-2xl lg:text-4xl font-bold leading-none tracking-tighter">
                        Projects We’ve
                    </span>
                    <span className='bg-gradient-to-b from-[#f77a40] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent text-xl sm:text-2xl lg:text-4xl font-bold leading-none tracking-tighter'>
                        Delivered
                    </span>
                </div>
                <h1 className='text-white text-sm sm:text-lg text-center font-normal'>
                    At AGKraft, our projects reflect our passion for excellence and our ability to bring visions to life.
                </h1>
            </div>

            {/* Carousel Section */}
            <div
                className="relative w-full lg:h-[32rem] h-[22rem] md:h-[23rem] overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide movement logic
                >
                    {slides.map((slide: Slide, index) => (
                        <div
                            key={index}
                            className="min-w-full flex flex-col sm:flex-row justify-between items-center px-4 lg:px-16"
                        >
                            {/* Left - Image */}
                            <div className="w-full sm:w-1/2">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full  lg:h-[30rem] h-[17rem] rounded-md"
                                />
                            </div>
                            {/* Right - Content */}
                            <div className="w-full sm:w-1/2 flex flex-col justify-center p-4 text-left">
                                <h2 className="text-white text-lg sm:text-xl md:text-4xl font-bold mb-4 hidden md:block">{slide.title}</h2>
                                <p className="text-white text-sm sm:text-base mb-4 hidden md:block">{slide.description}</p>

                                <Link href={slide.url}>
                                    <ShimmerButton className="shadow-2xl md:flex md:items-center md:justify-center">
                                        <span className="whitespace-pre-wrap text-center text-sm md:text-lg font-medium leading-none tracking-tight text-white">
                                            Learn More
                                        </span>
                                    </ShimmerButton>
                                </Link>
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
        </div>
    );
};

export default Portfolio;
