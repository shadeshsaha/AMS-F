import React, { useState } from "react";
import { useForm } from "react-hook-form";
import sweetAlert from "sweetalert";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    setEmail(data.email);
    const email = data.email;
    const user = { email };
    fetch("https://ancient-castle-52925.herokuapp.com/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          sweetAlert("done", "admin was set successfully", "success");
        }
      })
      .catch((error) => {
        sweetAlert("Something went wrong!", `${error.message}`, "error");
      });
    reset();
  };

  return (
    <section className="bg-white rounded-lg shadow-xl p-6 box-border m-12">
      {/* heading  */}
      <div className="flex flex-col space-y-3 mb-4">
        <h1 className="font-primary text-xl text-gray-700">Make Admin</h1>
        <div className="w-36 h-1 rounded-full bg-gray-400"></div>
      </div>

      {/* form  */}
      {/* <AddNewForm /> */}
      <div className="py-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* title  */}
          <input
            className="input-primary"
            placeholder="type admin email"
            {...register("email", { required: true })}
          />
          <button type="submit" className="btn-primary w-36 ml-auto">
            Set
          </button>
        </form>
      </div>
    </section>
  );
};

export default MakeAdmin;
