// import React, { useRef } from 'react';
// import ShimmerButton from "@/components/magicui/shimmer-button";
// import Image from 'next/image';
// import about from '@/public/assest/about.png';
// import { OrbitingCirclesDemo } from './orbiting-circle';

// const About = () => {
//     const videoRef = useRef<HTMLVideoElement>(null);
//     return (
//         <div className="w-full mt-16">
//             <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 w-full h-full  bg-[#191A1E]">
//                 <div className="flex justify-center md:justify-start">
//                     {/* <Image
//                         src={about}
//                         alt="Picture of the author"
//                         className="w-64 h-64 md:w-96 md:h-96"
//                         width={500}
//                         height={500}
//                     /> */}
//                     <video
//                         ref={videoRef}
//                         autoPlay
//                         loop
//                         muted
//                         className="w-64 h-64 md:w-96 md:h-96 rounded-2xl">
//                         <source src="/assest/about.mp4" type="video/mp4" />
//                     </video>
//                 </div>
//                 {/* <OrbitingCirclesDemo/> */}

//                 <div className='w-full md:w-[40rem] text-center md:text-left'>
//                     <div className='flex flex-col items-center md:items-start gap-5'>
//                         <span className="whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-5xl font-bold leading-none tracking-tighter text-transparent">
//                             What We Stand For
//                         </span>
//                         <h1 className='text-white text-lg md:text-xl font-medium'>
//                             Empowering businesses through technology
//                         </h1>
//                         <p className='text-base md:text-lg text-white font-normal text-center md:text-left'>
//                             Embark on a journey of digital transformation with AGKraft, where innovation meets expertise to propel your business forward in the ever-evolving digital landscape. With a steadfast commitment to delivering unparalleled IT solutions, we offer a compelling blend of creativity, technical proficiency, and a client-centric approach that sets us apart from the rest.
//                         </p>

//                         <div className="mt-4">
//                             <ShimmerButton className="shadow-2xl">
//                                 <span className="whitespace-pre-wrap text-center text-sm md:text-lg font-medium leading-none tracking-tight text-white">
//                                     Explore More
//                                 </span>
//                             </ShimmerButton>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default About;

import { CardSpotlight } from "@/components/ui/card-spotlight";

export function About() {
    return (
        <CardSpotlight className="w-full flex flex-col justify-center items-center mt-5 h-full gap-4">
            <span className="whitespace-pre-wrap relative z-20 mt-2 text-white bg-clip-text text-5xl font-bold leading-none tracking-tighter text-transparent">
                What We Stand For
            </span>
            <h1 className='text-white text-lg md:text-xl font-medium relative z-20 mt-2'>
                Empowering businesses through technology
            </h1>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm text-center">
                AGKraft is a cutting-edge software development company dedicated to harnessing the power of artificial intelligence and the latest technological advancements. We specialize in delivering innovative solutions that drive digital transformation,
                empowering businesses to stay ahead in a fast-evolving tech landscape. At AGKraft, we are committed to excellence, ensuring that our products and services push the boundaries of innovation.</p>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm text-center">AGKraft is a dynamic and forward-thinking software development company, committed to creating innovative solutions that shape the future of technology.
                At the core of our mission is the integration of Artificial Intelligence (AI) with the latest technological advancements to provide next-generation software solutions. We focus on empowering businesses and individuals through cutting-edge products,
                offering a range of services that span across web development, mobile app development, and custom software solutions.
                Our team of highly skilled developers, engineers, and technology enthusiasts work collaboratively to deliver impactful and scalable solutions tailored to meet the specific needs of our clients.</p>

                <p className="text-neutral-300 mt-4 relative z-20 text-sm text-center">we believe that the future of technology lies in the intelligent application of AI and modern technology to create meaningful and impactful solutions. Our passion for innovation drives us to continuously improve, ensuring that 
                    we remain a trusted partner for businesses seeking to navigate the complexities of the digital age. Let AGKraft be your technology partner, helping you unlock new opportunities and achieve success in an increasingly competitive and tech-driven world.</p>
        </CardSpotlight>
    );
}



