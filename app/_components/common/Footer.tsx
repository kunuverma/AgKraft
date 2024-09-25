import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import logo from "@/public/assest/logo.png"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  // Define the logo color as orange-red
  const logoColor = '#FF5733'; // Change this to match the exact color from the logo

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
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="flex space-x-4 text-2xl">
            <FaFacebook className="cursor-pointer hover:text-orange-400" style={{ color: logoColor }} />
            <FaTwitter className="cursor-pointer hover:text-orange-400" style={{ color: logoColor }} />
            <FaYoutube className="cursor-pointer hover:text-orange-400" style={{ color: logoColor }} />
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
              <span className="text-orange-500 text-xl"><FaLocationDot /></span> 2443 Oak Ridge Omaha, QA 45065
            </li>
            <li className='flex items-center gap-2'>
              <span className="text-orange-500 text-xl"><FaPhone /></span> 9262975957
            </li>
            {/* <li>
              <span className="text-orange-500">📱</span> 082-245-7253
            </li> */}
            <li className='flex items-center gap-2'>
              <span className="text-orange-500 text-xl"><MdEmail /></span> agkraft@gmail.com
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
