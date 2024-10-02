
import Image from 'next/image';
import { CardSpotlight } from "@/components/ui/card-spotlight";
export const About = () => {
    return(
        <CardSpotlight className="flex flex-row items-center justify-center min-h-screen mx-10 my-5 shadow-[0px_0px_5px_0px_#f7fafc]">
       <div className='text-white flex flex-col w-[50%] text-left gap-y-3 z-40'>
       <span className="whitespace-pre-wrap text-left relative z-20 mt-2  bg-clip-text text-4xl font-bold leading-none tracking-tighter text-transparent">
               What We  
               <span className='bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text'>Stand</span>For
            </span>
            <span className='text-md text-left text-gray-200'>
            At AGKraft, we stand for excellence, innovation, and trust. Our focus is on creating user-friendly websites through collaboration and integrity. We are committed to sustainable growth and continuous improvement, ensuring our clients thrive in the digital landscape.
            </span>
       </div>
        <div className='z-40'>
        <Image 
            src="/assest/circle.png" 
            alt="Description"
            width={900} 
            height={700} 
            className="max-w-full h-auto " 
        />
        </div>
    </CardSpotlight>
    )
    
}