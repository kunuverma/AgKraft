import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import logo from "@/public/assest/logo.png";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  const logoColor = '#FF5733'; // Define the logo color as orange-red

  return (
    <footer className="bg-[#121C2D] text-gray-400 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            {/* AGKraft Logo */}
            <Image src={logo} alt="AGKraft Logo" width={80} height={80} />
            <h2 className="text-white font-bold text-2xl">AGKRAFT</h2>
          </div>
          <p className="text-gray-300 mb-4">
          Expertly crafting custom websites to elevate your offline business online. Let us build the perfect website for you.
          </p>
          <div className="flex space-x-4 text-2xl">
            <FaFacebook className="cursor-pointer hover:text-[#356dc0] text-white" />
            <FaTwitter className="cursor-pointer hover:text-[#47ccdd] text-white"  />
            <FaYoutube className="cursor-pointer hover:text-[#fd5151] text-white"  />
            <FaLinkedin className="cursor-pointer hover:text-[#4e8ae6] text-white"  />
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-white font-bold mb-4">Our Store</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">About</a></li>
            <li><a href="#" className="hover:text-orange-500">Service</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-white font-bold mb-4">Get In Touch</h3>
          <ul className="space-y-4">
            <li className='flex items-center gap-2'>
              <span className="text-[#f76329] text-xl"><FaLocationDot /></span> Pitampura, North-West Delhi, New Delhi, 110081
            </li>
            <li className='flex items-center gap-2'>
              <span className="text-[#f76329] text-xl"><FaPhone /></span> 
              <a href="tel:9262975957" className="hover:text-orange-500">9262975957</a>
            </li>
            <li className='flex items-center gap-2'>
              <span className="text-[#f76329] text-xl"><MdEmail /></span> 
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=agkraft01@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                agkraft01@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-10">
        <p>Copyright © 2024 AGKraft | Powered by AGKraft</p>
      </div>
    </footer>
  );
};

export default Footer;
