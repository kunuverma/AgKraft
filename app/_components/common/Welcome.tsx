import { motion } from "framer-motion";
import React from "react";

const Welcome: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-black via-dark-blue to-black flex items-center justify-center z-50">
      {/* Company Name with Fade-in and Slide-up animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center"
      >
        {/* Company Name */}
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
          AGKraft
        </h1>
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg text-gray-300 mt-4"
        >
          Crafting the Future of Web & AI Solutions
        </motion.p>
      </motion.div>

      {/* Subtle Loader */}
      <motion.div
        className="absolute bottom-10 w-10 h-10 border-4 border-t-orange-500 border-r-red-500 border-b-transparent border-l-transparent rounded-full animate-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
    </div>
  );
};

export default Welcome;
