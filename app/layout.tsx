"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./Redux/store";
 // Adjust import based on export type
import Footer from "./components/common/Footer"; 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ReactNode, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/common/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children } : {children: ReactNode}) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="stylesheet" href="/assets/css/main.scss" /> */}
        <title>mAI Court</title>
      </head>
      <body className=" bg-white">
        {/* <Provider store={store}> */}
          {/* <PersistGate loading={null} persistor={persistor}> */}
            <ToastContainer />
            <Navbar />
            {children}
            <Footer />
          {/* </PersistGate> */}
        {/* </Provider> */}
      </body>
    </html>
  );
}
