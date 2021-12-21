import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import useAuth from "../hooks/useAuth";
import useFirebase from "../hooks/useFirebase";

const SignInScreen = () => {
  const { signInUser } = useAuth();
  const { handleGoogleSignIn } = useFirebase();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    await signInUser(data);
    reset();
  };

  return (
    <div>
      <Navbar
        bg="bg-transparent"
        textColor="text-white"
        width="max-w-screen-xl"
      />
      <section className="register-screen h-screen">
        <div className=" flex flex-col items-center justify-center h-screen">
          <div className="register-container flex flex-col justify-center items-center space-y-4 p-6 box-border rounded-lg w-1/4 h-64">
            <h1 className="text-2xl font-primary text-center">Login</h1>
            {/* email register form */}
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-1 text-black py-2 flex flex-col mx-auto ">
                  <input
                    className="p-3 m-1 rounded-lg px-20 bg-gray-100"
                    type="email"
                    {...register("email")}
                    placeholder="E-mail"
                  />
                  <input
                    className="p-3 m-1 rounded-lg px-20 bg-gray-100"
                    type="password"
                    {...register("password")}
                    placeholder="Password"
                  />
                  <input
                    className="text-white mt-1 p-3 rounded-lg bg-red-600 hover:scale-105 transform transition duration-300 cursor-pointer hover:bg-red-700"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="text-gray-400 ml-1">
                new in this site?{" "}
                <Link
                  to="/register"
                  className="text-white font-semibold hover:text-red-500 transform transition duration-300"
                >
                  Register
                </Link>
              </p>
            </div>
            {/* google button  */}
            <div
              className=" bg-white px-6 py-3 border border-gray-200 flex items-center space-x-4 justify-center rounded-full cursor-pointer select-none hover:scale-105 transform transition duration-300"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle className="text-2xl" />
              <span className="text-gray-700 font-primary">
                Continue with Google
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignInScreen;
