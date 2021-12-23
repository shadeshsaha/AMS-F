import axios from "axios";
import React, { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Testimonial from "./Testimonial";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/testimonial")
      .then((res) => setTestimonialData(res.data));
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-24 mt-16">
      {/* heading  */}
      <Bounce>
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-logo text-gray-800 text-3xl font-semibold">
            Testimonials
          </h1>
          <div className="h-1 w-24 bg-gray-400 rounded-full"></div>
        </div>
      </Bounce>
      {/* testimonials  */}
      <Swiper
        loop={true}
        className="mySwiper py-6"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={true}
        grabCursor={true}
        slidesPerView={1}
        speed={600}
        spaceBetween={20}
      >
        {testimonialData.map((item) => (
          <SwiperSlide key={item.id}>
            <Bounce bottom>
              <Testimonial {...item} />
            </Bounce>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
