'use client';

import React, { useState, useEffect } from 'react'; 
import { motion } from 'framer-motion';

const slides = [
    {
        id: 1,
        image: '/assest/idcsite.png', 
        title: 'IDC India',
        description: 'Experienced web developer specializing in IDC India 2nd Website. Committed to delivering innovative, responsive, and user-centered designs that enhance digital experiences and effectively showcase IDC’s services and initiatives.',
        gradient: 'linear-gradient(135deg, #FFA500, #FF4500)', 
        url: 'https://idc-india.vercel.app/' 
    },
    {
        id: 2,
        image: '/assest/mehendi.png', 
        title: 'Mehendi Designs',
        description: 'Passionate web developer creating stunning, user-friendly websites for the mehendi industry. Combining artistry and technology, I deliver seamless online experiences that highlight unique designs and connect artists with clients.',
        gradient: 'linear-gradient(135deg, #0000FF, #00BFFF)', 
        url: 'https://mehendi-art.vercel.app/' 
    },
    {
        id: 3,
        image: '/assest/idcsite.png',
        title: 'mAICourt',
        description: 'Dedicated web developer of mAI Court, implementing cutting-edge AI technology for legal solutions. I create intuitive, efficient platforms that simplify legal processes while enhancing accessibility and user engagement',
        gradient: 'linear-gradient(135deg, #800080, #FF00FF)',
        url: 'https://mai-court.vercel.app/' 
    }
];

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
            const timer = setInterval(goToNextSlide, 3000);
            return () => clearInterval(timer);
        }
    }, [isPaused, currentSlide]);

    const handleLearnMoreClick = () => {
        window.location.href = slides[currentSlide].url;
    };

    return (
        <div className='text-center mt-10'>
            <div className="w-full p-4 text-black">
                <h1 className="text-4xl font-bold mb-2 text-[#FE5C3D]">Our Portfolio</h1>
                <p className="text-lg text-gray-700">Explore our diverse range of projects.</p>
            </div>

            <div 
                className="relative w-full lg:h-screen h-[42rem] " 
                onMouseEnter={() => setIsPaused(true)} 
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{ backgroundImage: slides[currentSlide].gradient }}
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
                            <div className="bg-gray-700 p-6 w-full md:w-[45%] rounded-lg shadow-lg">
                                <h2 className="text-xl md:text-2xl font-bold mb-2">{slides[currentSlide].title}</h2>
                                <p className="mb-4 text-sm md:text-base">{slides[currentSlide].description}</p>
                                <button
                                    className="bg-gradient-to-r from-[#e7431a] to-[#fa6a09] text-white py-2 px-4 rounded"
                                    onClick={handleLearnMoreClick}
                                >
                                    Visit Website
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Portfolio;
