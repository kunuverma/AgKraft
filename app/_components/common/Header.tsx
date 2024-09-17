"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const images = [
    {
      src: "/assest/graph.jpg",
      title: "Empowering Businesses Online ",
      highlight: "Transforming Local Ideas into Global Success",
      description:
        "Our expert web development services help you bring your offline business into the digital world, unlocking new growth opportunities and expanding your reach beyond borders",
    },
    {
      src: "/assest/tablet.png",
      title: "Digital Evolution for Your Business",
      highlight: "Grow Beyond Boundaries",
      description:
        "We specialize in creating tailored websites that drive growth for offline businesses, ensuring you thrive in the online market and achieve greater visibility, engagement, and sales.",
    },
    {
      src: "/assest/hand.png",
      title: "From Offline to Online Success",
      highlight: "Build, Expand, Thrive",
      description:
        "Transform your business with a powerful online presence. Our web development solutions connect you to a wider audience, helping your business grow and succeed in today's digital economy.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setIsAnimating(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header>
      {/* Navbar Section */}
      {/* <Navbar scrolled={scrolled} /> You can pass scrolled state to Navbar if needed */}

      {/* Background Image and Title Section */}
      <div
        className={`relative w-full h-[600px] shadow-[0px_10px_20px_-2px_#ecc94b] bg-cover bg-no-repeat bg-center transition-all duration-1000   ${isAnimating ? "opacity-100" : "opacity-0"
          }`}
        style={{ backgroundImage: `url(${images[currentImage].src})`, }}>
        {/* Title, Description, and Buttons */}
        <div
          className={`absolute left-10 mt-[11rem] lg:w-[40%] w-[60%] h-[20rem] inset-0 flex flex-col justify-center items-center text-center transition-all duration-1000 transform ${isAnimating ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
        >
          <h1 className="lg:text-[2rem] text-xl font-bold mb-4 bg-gradient-to-r from-[#f35d37] to-[#f83a00] bg-clip-text text-transparent">
            {images[currentImage].title}
          </h1>
          <h2 className="lg:text-3xl text-xl font-bold mb-4 text-[#b6b1b1]">
            {images[currentImage].highlight}
          </h2>
          <p className="lg:text-lg text-sm text-left text-gray-100 mb-4">
            {images[currentImage].description}
          </p>
          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="px-6 py-2 bg-[#fa6a09] text-white font-semibold rounded-lg hover:bg-[#e7431a] transition-colors duration-300">
              Explore More
            </button>
            <button className="px-6 py-2 bg-white text-[#fa6a09] font-semibold rounded-lg border-2 border-[#fa6a09] hover:bg-gray-100 transition-colors duration-300">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
