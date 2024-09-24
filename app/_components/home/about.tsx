import React from 'react'
import ShimmerButton from "@/components/magicui/shimmer-button";
import Image from 'next/image';
import about from '@/public/assest/about.png'


const About = () => {
    return (
        <div className="w-full">
            <div className="flex justify-center items-center gap-24 w-full h-full p-10 rounded shadow-md">
                <div>
                    <Image
                        src={about}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>

                <div className=' w-[40rem]'>
                    <div className='flex flex-col items-center gap-5'>
                        <span className="whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-6xl font-bold leading-none tracking-tighter text-transparent">
                            What We Stand For
                        </span>
                        <h1 className='text-[#121C2D] text-xl font-medium'>Empowering businesses through technology</h1>
                        <p className='text-lg text-[#121C2D] font-normal text-pretty text-center'>Embark on a journey of digital transformation with AGKraft,
                            where innovation meets expertise. where innovation meets expertise to propel your business forward in the ever-evolving digital landscape.
                            With a steadfast commitment to delivering unparalleled IT solutions, we offer a compelling blend of creativity,
                            technical proficiency, and client-centric approach that sets us apart from the rest.</p>

                        <div className="">
                            <ShimmerButton className="shadow-2xl">
                                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                    Explore More
                                </span>
                            </ShimmerButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
