// 'use client';
// import { motion } from 'framer-motion';
// import React from 'react';
// import AppleIcon from '@mui/icons-material/Apple';
// import AndroidIcon from '@mui/icons-material/Android';
// import WebIcon from '@mui/icons-material/Web';
// import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
// import AdbIcon from '@mui/icons-material/Adb';
// import DesignServicesIcon from '@mui/icons-material/DesignServices';
// import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
// import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
// import PaletteIcon from '@mui/icons-material/Palette';

// const Cards = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-12">
//       {/* Title and Description */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold bg-gradient-to-r from-[#ff6022] to-[#ca6410] bg-clip-text text-transparent">Explore Our Services</h1>
//         <p className="text-lg text-gray-600 mt-4">
//           We provide top-notch solutions for mobile apps and UI/UX design
//         </p>
//       </div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 w-full max-w-6xl">
//         {/* Card 1 - Mobile App Development */}
//         <motion.div
//           className="relative p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out overflow-hidden"
//           style={{
//             backgroundImage: 'url(/assest/ios.jpeg)',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//           whileHover={{ scale: 1.05 }}
//         >
//           {/* Color Overlay */}
//           <div className="absolute inset-0 bg-[#050427] opacity-40 hover:opacity-60 transition duration-300"></div>

//           {/* Card Content */}
//           <div className="relative z-10 cursor-pointer">
//             <h2 className="text-2xl font-bold text-[#ff6022] mb-4">Mobile App Development</h2>
//             <ul className="space-y-4">
//               <li className="flex items-center space-x-3 text-white">
//                 <AppleIcon />
//                 <span>iOS App</span>
//               </li>
//               <li className="flex items-center space-x-3 text-white">
//                 <AndroidIcon />
//                 <span>Android App</span>
//               </li>
//               <li className="flex items-center space-x-3 text-white">
//                 <AdbIcon />
//                 <span>Native App</span>
//               </li>
//               <li className="flex items-center space-x-3 text-white">
//                 <AllInclusiveIcon />
//                 <span>Hybrid App</span>
//               </li>
//               <li className="flex items-center space-x-3 text-white">
//                 <WebIcon />
//                 <span>Web App</span>
//               </li>
//             </ul>
//           </div>
//         </motion.div>

//         {/* Card 2 - UI & UX Design */}
//         <motion.div
//           className="relative p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out overflow-hidden"
//           style={{
//             backgroundImage: 'url(/assest/ecom.jpeg)',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//           whileHover={{ scale: 1.05 }}
//         >
//           {/* Color Overlay */}
//           <div className="absolute inset-0 bg-[#1e1e29] opacity-40 hover:opacity-60 transition duration-300"></div>

//           {/* Card Content */}
//           <div className="relative z-10 cursor-pointer">
//             <h2 className="text-2xl font-bold text-[#ff6022] mb-4">UI & UX Design</h2>
//             <ul className="space-y-4">
//               <li className="flex items-center space-x-3 text-white">
//                 <DesignServicesIcon />
//                 <span>Mobile & Web Design</span>
//               </li>
//               <li className="flex items-center space-x-3 text-white">
//                 <ViewQuiltIcon />
//                 <span>Product Design</span>
//               </li>
//               <li className="flex items-center space-x-3 text-white">
//                 <BrandingWatermarkIcon />
//                 <span>Brand & Logo Design</span>
//               </li>
//               <li className="flex items-center space-x-3 text-white">
//                 <PaletteIcon />
//                 <span>Prototype & Wireframe</span>
//               </li>
//               <li className="flex items-center space-x-3 text-white">
//                 <PaletteIcon />
//                 <span>Visual Design</span>
//               </li>
//             </ul>
//           </div>
//         </motion.div>

//         {/* Card 3 - Branding */}
//         <motion.div
//           className="relative p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out overflow-hidden"
//           style={{
//             backgroundImage: 'url(/assest/brand.jpeg)',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//           whileHover={{ scale: 1.05 }}
//         >
//           {/* Color Overlay */}
//           <div className="absolute inset-0 bg-[#1e1e29] opacity-40 hover:opacity-60 transition duration-300"></div>

//           {/* Card Content */}
//           <div className="relative z-10 cursor-pointer">
//             <h2 className="text-2xl font-bold text-[#ff6022] mb-4">Branding & Marketing</h2>
//             <ul className="space-y-4">
//               <li className="flex items-center space-x-3 text-white">
//                 <BrandingWatermarkIcon />
//                 <span>Brand Identity</span>
//               </li>
//               <li className="flex items-center space-x-3 text-white">
//                 <PaletteIcon />
//                 <span>Visual Design</span>
//               </li>
//               <li className="flex items-center space-x-3 text-white">
//                 <BrandingWatermarkIcon />
//                 <span>Brand Identity</span>
//               </li>
//               <li className="flex items-center space-x-3 text-white">
//                 <PaletteIcon />
//                 <span>Visual Design</span>
//               </li>
//               <li className="flex items-center space-x-3 text-white">
//                 <ViewQuiltIcon />
//                 <span>UI/UX Strategy</span>
//               </li>
//             </ul>
//           </div>
//         </motion.div>

//         {/* Card 4 - Web Development */}
//         <motion.div
//           className="relative p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out overflow-hidden"
//           style={{
//             backgroundImage: 'url(/assest/web1.jpeg)',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//           whileHover={{ scale: 1.05 }}
//         >
//           {/* Color Overlay */}
//           <div className="absolute inset-0 bg-[#1e1e29] opacity-40 hover:opacity-60 transition duration-300"></div>

//           {/* Card Content */}
//           <div className="relative z-10 cursor-pointer">
//             <h2 className="text-2xl font-bold text-[#ff6022] mb-4">Web Development</h2>
//             <ul className="space-y-4">
//               <li className="flex items-center space-x-3 text-white">
//                 <WebIcon />
//                 <span>Responsive Web Design</span>
//               </li>
//               <li className="flex items-center space-x-3 text-white">
//                 <AdbIcon />
//                 <span>Web Applications</span>
//               </li>
//               <li className="flex items-center space-x-3 text-white">
//                 <AllInclusiveIcon />
//                 <span>Progressive Web Apps</span>
//               </li>
//               <li className="flex items-center space-x-3 text-white">
//                 <BrandingWatermarkIcon />
//                 <span>Brand Identity</span>
//               </li>
//               <li className="flex items-center space-x-3 text-white">
//                 <PaletteIcon />
//                 <span>Visual Design</span>
//               </li>
//             </ul>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Cards;

"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projects } from "@/data/home-data";

const Cards = () => {
  return (

    <div className="flex flex-col justify-center items-center bg-[#191A1E] h-full">
      <h1 className="text-4xl text-white font-bold bg-clip-text leading-none tracking-tighter whitespace-pre-wrap mt-6">Our Core Services</h1>

      <div className="h-full relative w-full overflow-hidden bg-[#191A1E] flex flex-col items-center justify-center shadow-md">
        <div className="absolute inset-0 w-full h-full bg-[#191A1E] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none shadow-md" />
        <Boxes />
        <div className="px-20 max-w-[1560px] mx-auto">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>

  );
}

export default Cards

