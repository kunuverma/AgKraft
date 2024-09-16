import { Navitems } from "@/data/navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (idx: any) => {
    setActiveSubmenu(activeSubmenu === idx ? null : idx); // Toggle the active submenu
  };

  return (
    <nav
      className={`sticky top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-xl p-[1px] border-b-2 border-transparent gradient-border"
          : "bg-transparent p-[1px] border-b-0"
      }`}
    >
      <div className="flex items-center justify-between px-6">
        {/* Logo */}
        <div className="font-bold text-2xl text-white">
          <Link href={"/"}>
            <Image
              src="/assest/logo.png"
              alt="Logo"
              className="w-[4.5rem] md:w-[6rem]"
              width={144}
              height={80}
            />
          </Link>
        </div>

        {/* Navbar Links for Desktop */}
        <div>
          <ul className="hidden md:flex">
            {Navitems.map((item, idx) => (
              <li key={idx} className="relative group">
                {item.path ? (
                  <Link
                    href={item.path}
                    className={`hover:bg-slate-500 px-4 py-2 rounded-lg text-sm font-semibold transition ${
                      scrolled
                        ? "text-gray-900 hover:text-white"
                        : "text-white hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <span
                      className={`hover:bg-slate-500 px-4 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
                        scrolled
                          ? "text-gray-900 hover:text-white"
                          : "text-white hover:text-gray-900"
                      }`}
                    >
                      {item.name}
                    </span>
                    {item.submenus && (
                      <div className="absolute hidden group-hover:block lg:bg-white bg-gray-600 shadow-lg rounded-lg mt-2 w-48 z-50">
                        {item.submenus.map((submenu, subIdx) => (
                          <Link
                            key={subIdx}
                            href={
                              typeof submenu === "object"
                                ? submenu.path
                                : `#${submenu
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`
                            }
                            className="block px-4 py-2 lg:text-gray-700 text-gray-300 hover:bg-gray-200"
                          >
                            {typeof submenu === "object"
                              ? submenu.name
                              : submenu}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Premium Button */}
        <div className="hidden md:flex">
          {/* <button className="bg-gradient-to-r from-[#e7431a] to-[#fa6a09] hover:bg-gradient-to-r hover:from-[#e78167] hover:to-[#fa802f] text-white font-semibold px-6 py-2 rounded-lg">
            Premium Services
          </button> */}
          <Button
            className="bg-gradient-to-r from-[#e7431a] to-[#fa6a09] hover:bg-gradient-to-r hover:from-[#e78167] hover:to-[#fa802f] text-white font-semibold"
            variant="outline"
          >
            Premium Services
          </Button>
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
        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden absolute top-20 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 z-50">
            {Navitems.map((item, idx) => (
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
                            {typeof submenu === "object" ? (
                              <Link href={submenu.path}>
                                <span
                                  className="block px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-md"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {submenu.name}
                                </span>
                              </Link>
                            ) : (
                              <span
                                className="block px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {submenu}
                              </span>
                            )}
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
