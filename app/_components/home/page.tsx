'use client';
import Header from "../common/Header";
import Cards from "./Cards";
import Portfolio from "./Portfolio";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Header />
      <Cards />
      <Portfolio />
    </div>
  )
}
export default HomePage;