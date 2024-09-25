import React from 'react';
import ShimmerButton from "@/components/magicui/shimmer-button";
import Image from 'next/image';
import about from '@/public/assest/about.png';

const About = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 w-full h-full p-6 md:p-10 rounded shadow-md">
                <div className="flex justify-center md:justify-start">
                    <Image
                        src={about}
                        alt="Picture of the author"
                        className="w-64 h-64 md:w-96 md:h-96"
                        width={500}
                        height={500}
                    />
                </div>

                <div className='w-full md:w-[40rem] text-center md:text-left'>
                    <div className='flex flex-col items-center md:items-start gap-5'>
                        <span className="whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-4xl md:text-6xl font-bold leading-none tracking-tighter text-transparent">
                            What We Stand For
                        </span>
                        <h1 className='text-[#121C2D] text-lg md:text-xl font-medium'>
                            Empowering businesses through technology
                        </h1>
                        <p className='text-base md:text-lg text-[#121C2D] font-normal text-center md:text-left'>
                            Embark on a journey of digital transformation with AGKraft, where innovation meets expertise to propel your business forward in the ever-evolving digital landscape. With a steadfast commitment to delivering unparalleled IT solutions, we offer a compelling blend of creativity, technical proficiency, and a client-centric approach that sets us apart from the rest.
                        </p>

                        <div className="mt-4">
                            <ShimmerButton className="shadow-2xl">
                                <span className="whitespace-pre-wrap text-center text-sm md:text-lg font-medium leading-none tracking-tight text-white">
                                    Explore More
                                </span>
                            </ShimmerButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
