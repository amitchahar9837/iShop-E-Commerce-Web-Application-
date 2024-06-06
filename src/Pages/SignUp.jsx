import React, { useEffect } from "react";
import Helmet from "../shared/Helmet";
import logo from "../assets/images/SVGIcons/iSHOP Logo.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
      },[])
  return (
    <Helmet title="Create new iShop ID">
      <div className="dark:bg-gray-900 dark:text-white duration-200 py-8">
        <div className="container flex flex-col items-center gap-4 md:gap-8">
          <div className="flex items-center flex-col sm:flex-row gap-1 md:gap-2">
            <h1 className=" text-2xl md:text-4xl font-bold opacity-90">Create Your </h1>
            <img src={logo} alt="" className="w-[80px] md:w-[auto]" />
            <h1 className="text-2xl md:text-4xl font-bold opacity-90">Account</h1>
          </div>
          <form action="#" className="flex flex-col gap-5 w-[90%] lg:w-[55%] items-center">
            <div className="flex justify-between sm:flex-row flex-col gap-4 w-full">
              <input
                type="text"
                placeholder="First Name"
                className="border-2 border-gray-300 px-4 py-2 rounded-sm w-full dark:text-black focus:border-primary focus:outline-none  text-md md:text-lg font-semibold "
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-2 border-gray-300 px-4 py-2 rounded-sm  w-full dark:text-black focus:border-primary focus:outline-none  text-md md:text-lg font-semibold"
              />
            </div>
            <input
                type="email"
                placeholder="Email Id"
                className="border-2 border-gray-300 px-4 py-2 rounded-sm w-full dark:text-black focus:border-primary focus:outline-none text-md md:text-lg font-semibold "
              />
              <input
                type="password"
                placeholder="Password"
                className="border-2 border-gray-300 px-4 py-2 rounded-sm w-full dark:text-black focus:border-primary focus:outline-none text-md md:text-lg font-semibold "
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="border-2 border-gray-300 px-4 py-2 rounded-sm w-full dark:text-black focus:border-primary focus:outline-none text-md md:text-lg font-semibold "
              />
            <button
              type="submit"
              className="px-10 py-2 bg-primary inline-block w-fit text-xl font-semibold text-white rounded-sm"
            >
              Sign up
            </button>
          </form>
          <div className="flex flex-col items-center gap-2">
            <p className="text-center text-[1rem] md:text-[1.2rem] font-semibold">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-primary text-[1rem] md:text-[1.2rem] hover:underline duration-300"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default SignUp;
