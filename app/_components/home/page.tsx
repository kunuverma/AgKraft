'use client';
import {About} from "./about";
import Cards from "./Cards";
import EnquiryForm from "./enquiry-from";
import Feature from "./feature";
import Portfolio from "./Portfolio";
import Reviews from "./reviews";
import Slider from "@/app/_components/slider/slider";

const HomePage = () => {
  return (
    <div className="bg-[#191A1E]  flex flex-col justify-center">
      <Slider/>
      <About />
      <Cards />
      <Portfolio />
      <Reviews/>
      <EnquiryForm/>
      <Feature/>
    </div>
  )
}
export default HomePage;