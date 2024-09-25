'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const slides = [
    {
        id: 1,
        image: '/assest/idcsite.png',
        title: 'IDC India',
        description: 'Experienced web developer specializing in IDC India 2nd Website. Committed to delivering innovative, responsive, and user-centered designs that enhance digital experiences and effectively showcase IDC’s services and initiatives.',
        gradient: 'linear-gradient(135deg, #800080, #FF00FF)',
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
        image: '/assest/port.png',
        title: 'Client Portfolio',
        description: 'Dedicated web developer of mAI Court, implementing cutting-edge AI technology for legal solutions. I create intuitive, efficient platforms that simplify legal processes while enhancing accessibility and user engagement',
        gradient: 'linear-gradient(135deg, #FFA500, #FF4500)',
        url: 'https://gulshanprofile.vercel.app/'
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
            const timer = setInterval(goToNextSlide, 1000);
            return () => clearInterval(timer);
        }
    }, [isPaused, currentSlide]);

    const handleLearnMoreClick = () => {
        window.location.href = slides[currentSlide].url;
    };

    return (
        <div className='w-full h-full flex flex-col gap-10 bg-gradient-to-r from-gray-100 from-10% via-pink-100 via-80% to-slate-200 to-90% p-6 shadow-md'>
            {/* Projects We've Delivered */}
            <div className="flex flex-col justify-center items-center gap-4 mt-4">
                <div className="flex justify-center items-center gap-3">
                    <h1 className="text-4xl text-[#FF3115] font-bold bg-clip-text leading-none tracking-tighter whitespace-pre-wrap">Projects We’ve</h1>
                    <span className="mt-[2px] whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-4xl font-bold leading-none tracking-tighter text-transparent">
                        Delivered
                    </span>
                </div>
                <h1 className='text-[#121C2D] text-xl font-medium text-center'>At AGKraft, our projects reflect our passion for excellence and our ability to bring visions to life.</h1>
            </div>

            <div
                className="relative w-full lg:h-screen h-[42rem] "
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}>
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

// "use client";

// import { useState } from "react";
// import Image from 'next/image';
// import imageData from '@/data/home-data'; // Import the image data
// import { Montserrat } from '@next/font/google';


// const montserrat = Montserrat({
//     subsets: ['cyrillic'],
//     weight: ['600'], // Adjust weights as needed
// });
// const Portfolio: React.FC = () => {
//     const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//     return (
//         <div className="w-full h-full flex flex-col gap-10 bg-gradient-to-r from-gray-100 from-10% via-pink-100 via-80% to-slate-200 to-90% p-6 shadow-md">



//             {/* Image Grid */}
//             <div className="grid grid-cols-4 gap-4 justify-center items-center px-10 rounded-xl cursor-pointer">
//                 {imageData.map((item, index, title) => (
//                     <div
//                         key={item.id}
//                         className="relative flex justify-center items-center"
//                     >
//                         <div className="relative group rounded-xl">
//                             <Image
//                                 src={item.image}
//                                 alt={`Image ${item.id}`}
//                                 width={280}
//                                 height={400}
//                                 className="transition-all duration-300 ease-in-out rounded-xl"
//                                 onMouseEnter={() => setHoveredIndex(index)}
//                                 onMouseLeave={() => setHoveredIndex(null)}
//                             />
//                             <p className={`absolute rounded-xl bottom-0 left-0 text-center text-white font-medium text-base w-full h-20 bg-slate-900 transition-opacity bg-opacity-50 py-4 ${montserrat.className}`}>{item.title}</p>

//                             {/* Hovered Index */}
//                             {hoveredIndex === index && (
//                                 <div
//                                     className="absolute inset-0 flex flex-col items-start px-7 gap-3 py-4 bg-[#E9E9E8] bg-opacity-100 transition-opacity duration-2000 border border-[#B82529] rounded-xl"
//                                     style={{ pointerEvents: 'none' }}>
//                                     <h1 className="text-black text-xl font-semibold">{item.text}</h1>
//                                     <p className="text-[#2A2438] text-sm font-normal text-pretty">{item.description}</p>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Portfolio;







