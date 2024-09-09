"use client";
import "@/app/globals.css";
import Navbar from "../_components/navbar/navbar";
import Footer from "../_components/footer/footer";

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
