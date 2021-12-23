import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Error = () => {
  return (
    <div>
      <Navbar bg="bg-gray-800" textColor="text-white"></Navbar>
      <img
        src="https://vectorforfree.com/wp-content/uploads/2020/03/Error_404_VectroForFree.png"
        className="mt-8 w-2/4 mx-auto"
        alt=""
        srcset=""
      />
      <Footer></Footer>
    </div>
  );
};

export default Error;
