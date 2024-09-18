'use client';
import Header from "../common/Header";
import Cards from "./Cards";
import Portfolio from "./Portfolio";

const HomePage = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <Header />
      <Cards />
      <Portfolio />
    </div>
  )
}
export default HomePage;