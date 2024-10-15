import ShimmerButton from "@/components/magicui/shimmer-button";
import Image from 'next/image';
import { CardSpotlight } from "@/components/ui/card-spotlight";

const About = () => {
    return (
        <CardSpotlight className="relative flex flex-col sm:flex-row items-center justify-center mx-5 sm:mx-10 my-5 gap-9 shadow-[0px_0px_5px_0px_#f7fafc] overflow-hidden">
            {/* Spotlight effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f1571050] to-transparent animate-spotlight"></div>

            {/* Text Section */}
            <div className='flex flex-col w-full sm:w-[40%] text-left gap-y-5 z-40'>
                <div className='flex items-center gap-2 sm:gap-3'>
                    <span className="text-white whitespace-pre-wrap text-left relative z-20 mt-2 bg-clip-text text-xl sm:text-2xl lg:text-4xl font-bold leading-none tracking-tighter text-transparent">
                        What We
                    </span>
                    <span className='whitespace-pre-wrap text-left relative z-20 mt-2 bg-clip-text text-xl sm:text-2xl lg:text-4xl font-bold leading-none tracking-tighter text-transparent bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff]'>
                        Stand For
                    </span>
                </div>
                <span className='text-sm sm:text-md text-left text-gray-200 font-medium subpixel-antialiased tracking-wide line-clamp-4'>
                    At AGKraft, we stand for excellence, innovation, and trust. Our focus is on creating user-friendly websites through collaboration and integrity. We are committed to sustainable growth and continuous improvement, ensuring our clients thrive in the digital landscape. We believe that the future of technology lies in the intelligent application of AI and modern technology to create meaningful and impactful solutions.
                </span>

                <div className=' mt-6 hidden md:block'>
                    <ShimmerButton className="shadow-2xl ">
                        <span className="whitespace-pre-wrap text-center text-sm md:text-lg font-medium leading-none tracking-tight text-white">
                            Explore More
                        </span>
                    </ShimmerButton>
                </div>
            </div>

            {/* Image Section */}
            <div className='z-40 w-full sm:w-[60%] flex justify-center'>
                <Image
                    src="/assest/circle.png"
                    alt="Description"
                    width={400}
                    height={400}
                    className="w-full max-w-xs sm:max-w-sm lg:max-w-lg"
                />
            </div>

            <div className=' flex md:hidden'>
                <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm md:text-lg font-medium leading-none tracking-tight text-white">
                        Explore More
                    </span>
                </ShimmerButton>
            </div>
        </CardSpotlight>
    );
}

export default About
