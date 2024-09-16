"use client";
import "@/app/globals.css";
import Navbar from "../_components/common/Navbar";
import Footer from "../_components/common/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
