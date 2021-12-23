import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/testimonial", data)
      .then((response) => {
        // console.log(response);
        if (response.statusText === "OK") {
          swal("Success!", "Thanks for your kind words", "Success").then(() =>
            reset()
          );
        }
      })
      .catch((error) => {
        swal("Something went wrong!", `${error.message}`, "error");
      });
  };

  return (
    <section className="bg-white rounded-lg shadow-xl p-6 box-border m-12">
      {/* heading  */}
      <div className="flex flex-col space-y-3 mb-4">
        <h1 className="font-primary text-xl text-gray-700">
          Share Your Experience With Your Gaming Laptop
        </h1>
        <div className="w-36 h-1 rounded-full bg-gray-400"></div>
      </div>

      {/* form  */}
      {/* <AddNewForm /> */}
      <div className="py-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          <div className="flex flex-col space-y-4">
            {/* title  */}
            <input
              className="input-primary"
              placeholder="Your Name"
              {...register("username", { required: true })}
            />
            {/* description  */}
            <textarea
              cols="30"
              rows="9"
              className="input-primary resize-none"
              placeholder="Your Message"
              {...register("review", { required: true })}
            ></textarea>
          </div>

          <div className="flex flex-col space-y-4">
            {/* Image URL  */}
            <input
              className="input-primary"
              placeholder="Image Link"
              {...register("image", { required: true })}
            />
            {/* duration  */}
            <input
              className="input-primary"
              placeholder="Rating Out Of 5"
              {...register("rating", { required: true })}
            />
            <button className="btn-primary w-36 ml-auto">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Review;
