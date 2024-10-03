
import ShimmerButton from "@/components/magicui/shimmer-button";
import Image from 'next/image';
import { CardSpotlight } from "@/components/ui/card-spotlight";

export const About = () => {
    return (
        <CardSpotlight className="relative flex flex-row items-center justify-center min-h-screen mx-10 my-5 shadow-[0px_0px_5px_0px_#f7fafc] overflow-hidden">
            {/* Spotlight effect */}
            <div className="absolute  inset-0 bg-gradient-to-r from-transparent via-[#1f528550] to-transparent animate-spotlight"></div>
            <div className='flex flex-col w-full lg:w-[50%] text-left gap-y-5 z-40'>
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <span className="text-white whitespace-pre-wrap text-left relative z-20 mt-2 bg-clip-text text-3xl sm:text-4xl font-bold leading-none tracking-tighter text-transparent">
                            What We
                        </span>
                        <span className='whitespace-pre-wrap text-left relative z-20 mt-2 bg-clip-text text-3xl sm:text-4xl font-bold leading-none tracking-tighter text-transparent bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff]'>Stand For</span>
                    </div>
                    <span className='text-sm sm:text-md text-left text-gray-200 font-medium subpixel-antialiased tracking-wide line-clamp-4'>
                        At AGKraft, we stand for excellence, innovation, and trust. Our focus is on creating user-friendly websites through collaboration and integrity. We are committed to sustainable growth and continuous improvement, ensuring our clients thrive in the digital landscape. We believe that the future of technology lies in the intelligent application of AI and modern technology to create meaningful and impactful solutions.
                    </span>

                    <div className='flex justify-center mt-10'>
                        <ShimmerButton
                            className="shadow-2xl" >
                            <span className="whitespace-pre-wrap text-center text-sm md:text-lg font-medium leading-none tracking-tight text-white">
                                Explore More
                            </span>
                        </ShimmerButton>
                    </div>
                </div>

            <div className='z-30'>
                <Image 
                    src="/assest/circle.png" 
                    alt="Description"
                    width={900} 
                    height={700} 
                    className="max-w-full h-auto" 
                />
            </div>
        </CardSpotlight>
    );
}




