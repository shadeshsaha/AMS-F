import React from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import HeroBanner from "../components/Hero Section/HeroBanner";
import Navbar from "../components/Navbar/Navbar";
import Testimonials from "../components/Testimonial/Testimonials";
import TourPackageSection from "../components/Tour Package/TourPackageSection";
import Contact from "./Contact";

const HomeScreen = () => {
  return (
    <main className="bg-gray-200">
      <Navbar
        bg="bg-transparent"
        textColor="text-white"
        width="max-w-screen-xl"
      />
      <HeroBanner />
      <TourPackageSection />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomeScreen;
