import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GiProcessor } from "react-icons/gi";
import { HiOutlineCreditCard } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useBooking from "../../hooks/useBooking";

const TourPackCard = (props) => {
  const {
    _id,
    title,
    description,
    image,
    duration,
    groupMembers,
    price,
    country,
  } = props;
  const { handleBookings } = useBooking();
  const { admin } = useAuth();
  const history = useHistory();

  const [booking, setUser] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/Laptop")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  //handing booking
  const handleBooking = () => {
    handleBookings(props);
    history.push(`/booking/${_id}`);
  };

  // ------------------handleDelete
  const handleDelete = (id) => {
    console.log(id);
    const url = `http://localhost:5000/Laptop${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const remaining = booking.filter((_id) => _id !== id);
        setUser(remaining);
        window.location.reload();
      });
  };

  return (
    <div className="bg-white rounded-xl p-4 box-border overflow-hidden relative flex flex-col justify-between">
      {/* country badge  */}
      <div className="absolute top-10 text-sm left-0 z-50 bg-yellow-400 font-primary px-4 py-1 rounded-lg">
        {country}
      </div>
      {/* image  */}
      <div className="overflow-hidden rounded-xl h-52">
        <img
          className="transform hover:scale-125 transition duration-700 w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </div>

      <div className="flex flex-col flex-grow">
        {/* title and description */}
        <div className="flex flex-col space-y-1 my-4">
          <h2 className="text-gray-700 font-primary text-lg">{title}</h2>
          <p className="text-gray-500 text-sm">
            {description.slice(0, 120)}...{" "}
            <span className="text-gray-600 font-semibold">More</span>
          </p>
        </div>

        {/* others info  */}
        <div className="flex items-center justify-between border-t border-gray-200 border-b  py-4">
          {/* duration  */}
          <div className="flex items-center space-x-3">
            <GiProcessor className="text-gray-900 text-xl" />
            <div className="flex flex-col">
              <p className="text-sm font-primary text-gray-700">Processor</p>
              <span className="text-sm text-gray-500">{duration}</span>
            </div>
          </div>
          {/* group  */}
          <div className="flex items-center space-x-3">
            <HiOutlineCreditCard className="text-gray-900 text-2xl" />
            <div className="flex flex-col">
              <p className="text-sm font-primary text-gray-700">GPU</p>
              <span className="text-sm text-gray-500">
                {groupMembers} 
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* card footer  */}
      <div className="flex items-center justify-between pt-3">
        <h1 className="font-primary font-semibold text-gray-900 text-2xl">
        ৳ {price}
        </h1>
        {admin && (
          <div className="flex items-center justify-center space-x-3">
            <AiOutlineDelete
              onClick={() => handleDelete(_id)}
              className="cursor-pointer text-2xl text-red-600"
            />
            <button className="btn-primary px-6" onClick={handleBooking}>
              Book Now
            </button>
          </div>
        )}
        {!admin && (
          <button className="btn-primary px-6" onClick={handleBooking}>
            Book Now
          </button>
        )}
      </div>
    </div>
  );
};

export default TourPackCard;
