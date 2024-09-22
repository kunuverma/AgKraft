'use client';
import Header from "../common/Header";
import About from "./about";
import Cards from "./cards";
import Portfolio from "./portfolio";
import Reviews from "./reviews";

const HomePage = () => {
  return (
    <div className="bg-[#F9F9F9] flex flex-col justify-center gap-10 ">
      <Header />
      <About />
      <Cards />
      <Portfolio />
      <Reviews/>
    </div>
  )
}
export default HomePage;