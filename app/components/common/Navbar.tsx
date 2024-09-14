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
        name: "Legal Aid",
        submenus: ["Court Cases", "Legal Advice", "Consultations", "Reports"],
        },
        {
        name: "Partners",
        submenus: ["Corporate Partners", "NGOs", "Collaborations", "Government"],
        },
        {
        name: "Resources",
        submenus: ["Legal Articles", "Guides", "Templates", "E-Books"],
        },
        {
        name: "Blogs",
        submenus: ["Latest Posts", "Trending", "Categories", "Archives"],
        },
        {
            name: "About Us",
            path: "/about", 
            submenus: [
              { name: "Our Mission", path: "/about" },
              { name: "Our Vision", path: "/about" },
              { name: "why mAICourt?", path: "/about" },
              { name: "Contact Us", path: "/contact" },
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
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white opacity-100 shadow-lg h-[5.9rem]" : "bg-transparent h-20"
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
                            className="text-black text-3xl cursor-pointer"
                            onClick={() => setIsMenuOpen(true)}
                        />
                    )}
                </div>

                {/* Navbar Links for Desktop */}
                <ul className="hidden md:flex space-x-1 text-black">
                    {navItems.map((item, idx) => (
                        <li key={idx} className="relative group">
                            <Link
                                href={`#${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                                className="hover:text-white hover:bg-slate-500 px-4 py-2 rounded-lg text-lg font-semibold transition"
                            >
                                {item.name}
                            </Link>

                            {/* Dropdown Menu for Desktop */}
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
                        </li>
                    ))}

                    {/* Premium Button */}
                    <li className="ml-5 -mt-[6px]">
                        <button className="bg-gradient-to-r from-[#e7431a] to-[#fa6a09] hover:bg-gradient-to-r hover:from-[#b96c00] hover:to-[#3f2706] text-white font-semibold px-6 py-2 rounded-lg">
                            Premium Services
                        </button>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${isMenuOpen ? "block" : "hidden"
                    } md:hidden bg-white text-center absolute w-full z-50 py-6`}
            >
                <ul className="space-y-6 text-lg font-semibold">
                    {navItems.map((item, idx) => (
                        <li key={idx}>
                            <a
                                href={`#${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                                className="block text-gray-700 hover:text-yellow-600 transition"
                                onClick={() => toggleSubmenu(idx)} // Toggle the submenu in mobile view
                            >
                                {item.name}
                            </a>

                            {/* Dropdown Submenu for Mobile */}
                            {activeSubmenu === idx && (
                                <ul className="mt-2 space-y-2 bg-gray-300">
                                    {item.submenus.map((submenu, subIdx) => (
                                        <li key={subIdx}>
                                            <a
                                                href={`#${typeof submenu === 'object'
                                                    ? submenu.name.toLowerCase().replace(/\s+/g, "-")
                                                    : submenu.toLowerCase().replace(/\s+/g, "-")
                                                    }`}
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                            >
                                                {typeof submenu === 'object' ? submenu.name : submenu}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}

                    <li>
                        <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded-lg w-full">
                            Premium Services
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;