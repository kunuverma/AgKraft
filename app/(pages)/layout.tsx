"use client";
import { usePathname } from "next/navigation";
import "@/app/globals.css";
import Nav from "../_components/common/Navbar";
import NavbarHome from "../_components/common/Navbar-home"
import Footer from "../_components/common/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      {/* Show Nav only on the home page */}
      {pathname === '/' ? <NavbarHome /> : <Nav />}
      
      {/* Render the main page content */}
      {children}
      
      <Footer />
    </div>
  );
}
