import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import TourPackCard from "./TourPackCard";

const TourPackageSection = () => {
  const [toursPack, setToursPack] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Laptop")
      .then((res) => res.json())
      .then((data) => setToursPack(data));
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-6 relative -top-36">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {toursPack?.slice(0, 6)?.map((item) => {
          return (
            <Fade key={item._id} bottom>
              <TourPackCard {...item} />
            </Fade>
          );
        })}
      </div>
    </section>
  );
};

export default TourPackageSection;
