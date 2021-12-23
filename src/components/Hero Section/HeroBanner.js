import React from "react";
import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="hero-section">
      <Flip left>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-logo font-semibold text-white text-center select-none leading-tight">
          Gaming is our passion<br />
          We create fun games that you’ll love
          </h1>
          <p className="my-2 font-primary text-gray-400 text-center text-sm w-96 select-none">
          A gamer is a person who plays interactive games, especially video games, tabletop role-playing games, and skill-based card games, and who plays for usually long periods of time. Some gamers are competitive, meaning they routinely compete in some games for money, prizes or awards. 
          </p>
          <Link to="/explore">
            <button className="btn-primary-2 w-36 mt-5">Explore</button>
          </Link>
        </div>
      </Flip>
    </section>
  );
};

export default HeroBanner;
