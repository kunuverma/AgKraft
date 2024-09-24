'use client';
import Header from "../common/Header";
import About from "./about";
import Cards from "./Cards";
import EnquiryForm from "./enquiry-from";
import Portfolio from "./Portfolio";
import Reviews from "./reviews";

const HomePage = () => {
  return (
    <div className="bg-[#F9F9F9] flex flex-col justify-center gap-10 ">
      <Header />
      <About />
      <Cards />
      <Portfolio />
      <Reviews/>
      <EnquiryForm/>
    </div>
  )
}
export default HomePage;