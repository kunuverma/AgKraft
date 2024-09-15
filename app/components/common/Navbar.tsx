import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const navItems = [
    {
      name: "Gallery",
      path: "/about",
    },
    {
      name: "Events",
      submenus: ["Latest Posts", "Trending", "Categories", "Archives"],
    },
    {
      name: "About Us",
      path: "/about",
      submenus: [
        { name: "Our Mission", path: "/about" },
        { name: "Our Vision", path: "/about" },
        { name: "Why mAICourt?", path: "/about" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
    {
      name: "Contact Us",
      path: "/contact",
      submenus: [
        { name: "Support", path: "/contact" },
        { name: "FAQ", path: "/contact" },
        { name: "Customer Service", path: "/contact" },
        { name: "Reach Us", path: "/contact" },
      ],
    },
    {
      name: "Join Us",
      submenus: [
        { name: "LogIn", path: "/login" },
        { name: "SignUp", path: "/register" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (idx) => {
    setActiveSubmenu(activeSubmenu === idx ? null : idx); // Toggle the active submenu
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-800 opacity-100 shadow-lg h-[5.9rem]" : "bg-transparent h-20"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-1">
        {/* Logo */}
        <div className="font-bold text-2xl text-white">
          <Link href={"/"}>
            <Image
              src="/assest/logo.png"
              alt="Logo"
              className="h-[6rem] w-[7rem]"
              width={144}
              height={80}
            />
          </Link>
        </div>

        {/* Toggle Button for Mobile View */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <AiOutlineClose
              className="text-red-500 text-3xl cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <AiOutlineMenu
              className="text-white text-3xl cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>

        {/* Navbar Links for Desktop */}
        <ul className="hidden md:flex space-x-1 text-black">
          {navItems.map((item, idx) => (
            <li key={idx} className="relative group">
              {item.path ? (
                <Link
                  href={item.path}
                  className=" text-white hover:text-white hover:bg-slate-500 px-4 py-2 rounded-lg text-lg font-semibold transition"
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <span className=" text-white hover:text-white hover:bg-slate-500 px-4 py-2 rounded-lg text-lg font-semibold transition cursor-pointer">
                    {item.name}
                  </span>
                  {item.submenus && (
                    <div className="absolute hidden group-hover:block lg:bg-white bg-gray-600 shadow-lg rounded-lg mt-2 w-48 z-50">
                      {item.submenus.map((submenu, subIdx) => (
                        <Link
                          key={subIdx}
                          href={
                            typeof submenu === 'object'
                              ? submenu.path
                              : `#${submenu.toLowerCase().replace(/\s+/g, "-")}`
                          }
                          className="block px-4 py-2 lg:text-gray-700 text-gray-300 hover:bg-gray-200"
                        >
                          {typeof submenu === 'object' ? submenu.name : submenu}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
          {/* Premium Button */}
          <li className="ml-5 -mt-[6px]">
            <button className="bg-gradient-to-r from-[#e7431a] to-[#fa6a09] hover:bg-gradient-to-r hover:from-[#e78167] hover:to-[#fa802f] text-white font-semibold px-6 py-2 rounded-lg">
              Premium Services
            </button>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden absolute top-20 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 z-50">
            {navItems.map((item, idx) => (
              <li key={idx} className="w-full text-center">
                {item.path ? (
                  <Link href={item.path}>
                    <span
                      className="block text-white hover:bg-gray-600 px-4 py-2 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </span>
                  </Link>
                ) : (
                  <>
                    <span
                      className="block text-white hover:bg-gray-600 px-4 py-2 rounded-md cursor-pointer"
                      onClick={() => toggleSubmenu(idx)}
                    >
                      {item.name}
                    </span>
                    {activeSubmenu === idx && item.submenus && (
                      <ul className="flex flex-col space-y-2 mt-2">
                        {item.submenus.map((submenu, subIdx) => (
                          <li key={subIdx}>
                            <Link href={submenu.path}>
                              <span
                                className="block px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {submenu.name}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
            {/* Premium Button in Mobile */}
            <li>
              <button className="bg-gradient-to-r from-[#e7431a] to-[#fa6a09] hover:bg-gradient-to-r hover:from-[#e78167] hover:to-[#fa802f] text-white font-semibold px-6 py-2 rounded-lg">
                Premium Services
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
