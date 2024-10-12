"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import "@/app/globals.css";
import Nav from "../_components/common/Navbar";
import NavbarHome from "../_components/common/Navbar-home";
import Footer from "../_components/common/Footer";
import Welcome from "../_components/common/Welcome";  // Import Welcome screen component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {pathname === "/" && showWelcome && <Welcome />}

      {!showWelcome && (pathname === "/" ? <NavbarHome /> : <Nav />)}

      {/* Render the main page content */}
      {!showWelcome && children}

      {!showWelcome && <Footer />}
    </div>
  );
}
