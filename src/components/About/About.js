import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  const service = [
    {
      id: 1,
      text: "10 YEARS PARTS WARRENTY",
      image: "../../../assets/smartph.png",
    },
    {
      id: 2,
      text: "WORLD-WIDE EASY SHIPPING",
      image: "../../../assets/travel.png",
    },
    {
      id: 3,
      text: "BEST SUPER CAR AWARD",
      image: "../../../assets/sleep.png",
    },
  ];
  return (
    <section className="max-w-screen-xl mx-auto px-6">
      {/* heading  */}
      <Fade left>
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-logo text-gray-800 text-3xl font-semibold">
            About Lamgorghini
          </h1>
          <div className="h-1 w-28 bg-gray-400 rounded-full"></div>
        </div>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8">
        {/* left side image  */}
        <Fade left>
          <div className="flex justify-center lg:justify-start">
            <img src="../../../assets/about.png" alt="about" />
          </div>
        </Fade>
        {/* right side description  */}
        <Fade right>
          <div className="flex flex-col items-center lg:items-start space-y-3">
            {/* description  */}
            <p className="text-gray-500 text-sm font-primary">
            Ferruccio Lamborghini, an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini in 1963 to compete with Ferrari. The company was noted for using a rear mid-engine, rear-wheel drive layout. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis. The firm's ownership changed three times after 1973, including a bankruptcy in 1978. American Chrysler Corporation took control of Lamborghini in 1987 and sold it to Malaysian investment group Mycom Setdco and Indonesian group V'Power Corporation in 1994. In 1998, Mycom Setdco and V'Power sold Lamborghini to the Volkswagen Group where it was placed under the control of the group's Audi division.
            </p>

            {/* heading  */}
            <h1 className="mt-4 font-primary text-gray-800 text-xl font-semibold">
              Why Choose Us
            </h1>

            {/* services  */}
            <div className="flex flex-col space-y-5 my-4">
              {service.map((item) => (
                <div className="flex items-center space-x-3" key={item.id}>
                  <img className="w-12" src={item.image} alt={item.text} />
                  <span className="w-36 text-gray-500 text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
