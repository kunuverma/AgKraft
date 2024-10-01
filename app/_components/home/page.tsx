'use client';
import Header from "../common/Header";
import About from "./about";
import Cards from "./Cards";
import EnquiryForm from "./enquiry-from";
import Feature from "./feature";
import Portfolio from "./Portfolio";
import Reviews from "./reviews";

const HomePage = () => {
  return (
    <div className="bg-[#191A1E] flex flex-col justify-center gap-10 ">
      <Header />
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