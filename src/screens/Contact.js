import React from "react";
import { useForm } from "react-hook-form";
import Fade from "react-reveal/Fade";
import swal from "sweetalert";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    swal("done!", "Message sent successfully", "success");
    reset();
  };

  return (
    <section className="max-w-screen-xl mx-auto px-6 ">
      {/* heading  */}
      <Fade left>
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-logo text-gray-800 text-3xl font-semibold">
            Custom Super Car Lamborghini Manufacture Request
          </h1>
          <div className="h-1 w-72 bg-gray-400 rounded-full"></div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="py-4 my-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            <div className="flex flex-col space-y-4">
              {/* title  */}
              <input
                className="input-primary"
                placeholder="Your Name"
                {...register("title", { required: true })}
              />
              {/* description  */}
              <textarea
                cols="30"
                rows="9"
                className="input-primary resize-none"
                placeholder="Your Message"
                {...register("description", { required: true })}
              ></textarea>
            </div>

            <div className="flex flex-col space-y-4">
              {/* Image URL  */}
              <input
                className="input-primary"
                placeholder="Any Custom Design You Want Or In Your Mind?"
                {...register("image", { required: true })}
              />
              {/* duration  */}
              <input
                className="input-primary"
                placeholder="Which Exhaust You Will Add?"
                {...register("duration", { required: true })}
              />
              {/* group members  */}
              <input
                type="number"
                className="input-primary"
                placeholder="Max Numbers Of People It Can Capture"
                {...register("groupMembers", { required: true })}
              />
              {/* price  */}
              <input
                type="number"
                className="input-primary"
                placeholder="Your Budget"
                {...register("price", { required: true })}
              />
              {/* country  */}
              <input
                type="text"
                className="input-primary"
                placeholder="Your Color"
                {...register("color", { required: true })}
              />
              <button className="btn-primary w-36 ml-auto">Send</button>
            </div>
          </form>
        </div>
      </Fade>
    </section>
  );
};

export default Contact;
