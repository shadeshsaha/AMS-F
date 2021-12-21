import React from "react";
import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="hero-section">
      <Flip left>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-logo font-semibold text-white text-center select-none leading-tight">
            It takes time to <br />
            become timeless
          </h1>
          <p className="my-2 font-primary text-gray-400 text-center text-sm w-96 select-none">
          Automobil Lamborghini is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.
          </p>
          <Link to="/explore">
            <button className="btn-primary-2 w-36 mt-5">Explore More</button>
          </Link>
        </div>
      </Flip>
    </section>
  );
};

export default HeroBanner;
