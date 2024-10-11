import Image from 'next/image';
import React from 'react';

const Feature = () => {
    return (
        <div className="relative flex flex-row justify-between items-center py-12 bg-transparent px-7">
            <div className="max-w-screen-xl">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                    Experience the future of <span className="bg-gradient-to-r from-[#f84012]  to-[#f35831] bg-clip-text text-transparent">software development</span> with Development Tools Hub.
                </h1>
                {/* Call to Action Button */}
                <div className="mt-8">
                    <a
                        href="#"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-[#f84012] to-[#f35831]  hover:bg-gradient-to-r hover:from-[#ffb6a3] hover:to-[#f3d1c8]  hover:border-2 hover:border-[#f84012] text-white font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-black"
                    >
                        Sign up for free <span className="inline-block ml-2">→</span>
                    </a>
                </div>
            </div>

            {/* Gradient Design */}
            <div className="max-w-[1440px] w-full">

                <Image
                    src="/assest/feature.png" alt="feature" width={1000} height={1000} />
                {/* <div className="relative flex justify-center items-center bg-black">
                    
                    <div className="absolute top-0 left-0 transform -rotate-12 w-60 h-60 bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 opacity-90 rounded-lg"></div>
                    <div className="absolute bottom-0 right-0 transform rotate-12 w-60 h-60 bg-gradient-to-tr from-pink-500 via-purple-600 to-purple-700 opacity-90 rounded-lg"></div>

                    
                    <div className="relative w-96 h-96 bg-gradient-to-b from-black via-gray-900 to-black rounded-lg flex justify-center items-center">
                        <div className="absolute inset-0 backdrop-opacity-95 bg-gradient-to-r to-transparent"></div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Feature;
