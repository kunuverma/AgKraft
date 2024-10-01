'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ShimmerButton from "@/components/magicui/shimmer-button";
import slides from "@/data/project"; // Adjust the import path as needed

const Portfolio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(goToNextSlide, 1000);
            return () => clearInterval(timer);
        }
    }, [isPaused]);

    const handleLearnMoreClick = () => {
        window.location.href = slides[currentSlide].url;
    };

    return (
        <div className='w-full h-full flex flex-col justify-center items-center bg-[#191A1E]'>
            {/* Projects We've Delivered */}
            <div className="flex flex-col justify-center items-center gap-4 mt-4">
                <div className="flex items-center gap-4 mt-4">
                    <h1 className="whitespace-pre-wrap text-white bg-clip-text text-5xl font-bold leading-none tracking-tighter text-transparent">Projects We’ve</h1>
                    <h1
                        className=" whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-5xl font-bold leading-none tracking-tighter text-transparent"
                    >
                        Delivered
                    </h1>
                </div>
                <h1 className='text-white text-xl font-medium text-center'>At AGKraft, our projects reflect our passion for excellence and our ability to bring visions to life.</h1>
            </div>

            <div
                className="relative w-full lg:h-screen h-[42rem] "
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-transparent"
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="relative w-full h-full flex items-center">
                        {/* Left Arrow Button */}
                        <button
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-[#ff5c33] p-2 rounded-full"
                            onClick={goToPreviousSlide}
                        >
                            &#9664;
                        </button>

                        {/* Right Arrow Button */}
                        <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-[#ff5e36] p-2 rounded-full"
                            onClick={goToNextSlide}
                        >
                            &#9654;
                        </button>

                        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-4 mx-4 md:mx-10 text-center">
                            {/* Image Section */}
                            <div className='w-full md:w-[45%] mb-4 md:mb-0'>
                                <img
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text Section */}
                            <div className=" p-6 w-full md:w-[45%]">
                                <h2 className="text-xl md:text-4xl font-bold mb-2 text-white">{slides[currentSlide].title}</h2>
                                <p className="mb-4 text-lg  md:text-base text-white">{slides[currentSlide].description}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className='mb-5'>
                <ShimmerButton
                    onClick={handleLearnMoreClick}
                    className="shadow-2xl"
                >
                    <span className="whitespace-pre-wrap text-center text-sm md:text-lg font-medium leading-none tracking-tight text-white">
                        Explore More
                    </span>
                </ShimmerButton>
            </div>
        </div>
    );
};

export default Portfolio;
