"use client";

import { teamMembers } from "@/data/team"; // Import your team data
import Image from "next/image";
import { motion } from "framer-motion";
import BoxReveal from "@/components/ui/box-reveal";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Staggering the appearance of each child (card)
    },
  },
};

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
//   hover: { scale: 1.1, transition: { type: "spring", stiffness: 260, damping: 20 } },
// };

// const imageVariants = {
//   hover: { rotate: 10, transition: { type: "spring", stiffness: 200, damping: 10 } },
// };

const OurTeam = () => {
  return (
    <div className="bg-[#191A1E] relative w-full min-h-screen flex justify-center overflow-hidden">
      {/* Spotlight */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#35343a] to-transparent animate-spotlight z-0"></div>
      <div className="flex flex-col gap-8 w-full max-w-[1440px] z-30">
        {/* Hero Section */}
        <section
          className="relative h-[250px] bg-cover bg-center rounded-md"
          style={{ backgroundImage: "url(/assest/2.png)" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 h-full text-center text-white">
            <h1 className="text-center text-white bg-clip-text text-3xl sm:text-4xl font-bold leading-none tracking-wide text-transparent">
              Strategic Software Design
            </h1>
            <p className="text-center text-gray-100 dark:text-gray-400 tracking-wide">
              Our team builds solutions that are not only innovative but also
              strategically crafted.
            </p>
          </div>
        </section>

        {/* Team Photos and Info */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center w-[50%] text-white bg-clip-text text-xl sm:text-4xl font-bold leading-none tracking-wide text-transparent">
            We have got an entire team dedicated to supporting you and your business
          </h1>

          {/* Card Layout */}
          <motion.div
            className="flex flex-col items-center justify-center gap-10 mt-12 mb-5 w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.slice(0, 3).map((member) => (
              <div
                key={member.id}
                className="flex p-6 rounded-lg shadow-lg w-[80%] justify-center items-center  hover:bg-[#343746] transition-colors duration-300"
                
                
              >
                {/* Info Section */}
                <div className="ml-6 flex flex-col justify-center">
                 <BoxReveal>
                 <h1 className="bg-gradient-to-b from-[#f17240] via-[#b64504] to-[#e26919] bg-clip-text text-transparent text-4xl font-bold w-[70%]">
                    {member.highlight}
                  </h1>
                 </BoxReveal>
                <BoxReveal>
                <h2 className="text-white text-lg font-semibold mt-10">
                    {member.name}
                  </h2>
                  </BoxReveal>
                  <BoxReveal>
                  <p className="text-gray-300 text-lg mb-2">{member.title}</p>
                  </BoxReveal>
                  <BoxReveal>
                  <p className="text-gray-400 text-md mb-4 w-[60%]">
                    {member.description}
                  </p>
                  </BoxReveal>
                </div>
                {/* Image Section */}
                <div
                  className="flex-shrink-0"
                  
                >
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="w-[10rem] h-[10rem] rounded-full object-cover"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
