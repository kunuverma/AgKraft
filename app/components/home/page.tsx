'use client';
import Header from "../common/Header";
import Cards from "./Cards";
import Portfolio from "./Portfolio";

const HomePage = () => {
    return(
        <div className="bg-white">
          <div>
          <Header/>
          </div>
          <div>
            <Cards/>
          </div>
          <div>
            <Portfolio/>
          </div>

        </div>
    )
}
export default HomePage;