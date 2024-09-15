'use client';

import React, { useState, useEffect } from 'react'; 
import { motion } from 'framer-motion';

const slides = [
    {
        id: 1,
        image: '/assest/idcsite.png', 
        title: 'IDC India',
        description: 'Experienced web developer specializing in IDC India 2nd Website. Committed to delivering innovative, responsive, and user-centered designs that enhance digital experiences and effectively showcase IDC’s services and initiatives.',
        backgroundColor: '#FFA500', 
        url: 'https://idc-india.vercel.app/' 
    },
    {
        id: 2,
        image: '/assest/mehendi.png', 
        title: 'Mehendi Designs',
        description: 'Passionate web developer creating stunning, user-friendly websites for the mehendi industry. Combining artistry and technology, I deliver seamless online experiences that highlight unique designs and connect artists with clients.',
        backgroundColor: '#0000FF', 
        url: 'https://mehendi-art.vercel.app/' 
    },
    {
        id: 3,
        image: '/assest/idcsite.png',
        title: 'mAICourt',
        description: 'Dedicated web developer of mAI Court, implementing cutting-edge AI technology for legal solutions. I create intuitive, efficient platforms that simplify legal processes while enhancing accessibility and user engagement',
        backgroundColor: '#800080',
        url: 'https://mai-court.vercel.app/' 
    }
];

const Portfolio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Function to go to the next slide
    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    // Function to go to the previous slide
    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    // Auto-slide every 3 seconds, unless paused
    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(goToNextSlide, 3000);
            return () => clearInterval(timer);
        }
    }, [isPaused, currentSlide]);

    // Function to handle button click and navigate to the URL
    const handleLearnMoreClick = () => {
        window.location.href = slides[currentSlide].url;
    };

    return (
      <div className=' text-center mt-10'>
         <div className="w-full p-4 text-black">
                <h1 className="text-4xl font-bold mb-2 text-[#FE5C3D]">Our Portfolio</h1>
                <p className="text-lg text-gray-700">Explore our diverse range of projects.</p>
            </div>
          <div 
            className="relative w-full h-screen overflow-hidden" 
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
                style={{ backgroundColor: slides[currentSlide].backgroundColor }}
            >
                <div className="relative w-full h-full flex items-center">
                    <button
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                        onClick={goToPreviousSlide}
                    >
                        &#9664;
                    </button>
                    
                    <button
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                        onClick={goToNextSlide}
                    >
                        &#9654;
                    </button>

                    <div className="absolute inset-0 flex items-center justify-between p-4 mx-10 text-center">
                        <div className='w-[45%]'>
                            <img
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-gray-700 p-6 w-[45%] rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-2">{slides[currentSlide].title}</h2>
                            <p className="mb-4">{slides[currentSlide].description}</p>
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded"
                                onClick={handleLearnMoreClick}
                            >
                                Learn More
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
