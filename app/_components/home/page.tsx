'use client';
import React, { Suspense, lazy } from 'react';
import Slider from "../slider/slider";
import LoadingSpinner from '@/app/_components/common/Loading-spinner';

// Lazy load the components
const About = lazy(() => import('./about'));
const Cards = lazy(() => import('./Cards'));
const EnquiryForm = lazy(() => import('./enquiry-from'));
const Feature = lazy(() => import('./feature'));
const Portfolio = lazy(() => import('./Portfolio'));
const Reviews = lazy(() => import('./reviews'));

// Loading Spinner Component
// const LoadingSpinner = () => (
//   <div className="flex justify-center items-center h-64">
//     <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
//   </div>
// );

const HomePage = () => {
  return (
    <div className="bg-[#191A1E] flex flex-col justify-center">
      {/* Slider without Suspense (if it's not lazy-loaded) */}
      <Slider />

      {/* Add Suspense to each component to show a loading spinner */}
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Cards />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Portfolio />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Reviews />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <EnquiryForm />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Feature />
      </Suspense>
    </div>
  );
}

export default HomePage;
