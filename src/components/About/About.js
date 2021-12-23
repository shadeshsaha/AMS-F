import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  const service = [
    {
      id: 1,
      text: "5 YEARS WARRENTY",
      image: "../../../assets/smartph.png",
    },
    {
      id: 2,
      text: "EASY SHIPPING",
      image: "../../../assets/travel.png",
    },
    {
      id: 3,
      text: "BEST GAMING LAPTOP AWARD",
      image: "../../../assets/sleep.png",
    },
  ];
  return (
    <section className="max-w-screen-xl mx-auto px-6">
      {/* heading  */}
      <Fade left>
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-logo text-gray-800 text-3xl font-semibold">
            About Republic Of Gamers
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
            Gaming laptops are basically the same as standard or business laptops only with upgraded features. But it's these upgraded features which make all the difference. A gaming laptop means high speed, huge memory, better graphics, and fast processing power. <br/>
            There's plenty of power to be found in gaming laptops, too. Modern GPUs easily have enough power to handle gaming at 1080p and 1440p, at high refresh-rates and in esports games that demand triple-figure framerates. And, if you spend enough, it's possible to get a good gaming laptop that can play games at 4K. <br/>
            Most games recommend 16GB of memory for speedy, high-performance play. Having this much RAM in your computer will allow you to change what games you play, and to avoid issues with lag and stuttering. At an absolute minimum 8GB is usually a good starting point for most games.
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
