import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row md:h-[70vh] w-[80vw] md:w-[60vw] overflow-hidden rounded-xl bg-gray-200">
        <div className="hidden md:flex h-full w-1/3 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            src="https://cdn.cosmos.so/5e160cb8-a7fe-4f3a-86aa-b8c0dd8d7d5f.mp4"
            className="w-full h-full object-cover"
          ></video>
        </div>
        <div className="h-full w-full md:w-2/3 p-5">
          <form action="" >
            <h1 className="text-xl font-bold mx-8 my-5">
              Login To your Account
            </h1>

            <label htmlFor="email" className="font-semibold">
              Enter Your Email
            </label>
            <input
              className=" w-full p-3 text-sm outline-none font-medium  border-b"
              placeholder="abc@gmail.com"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
            <label htmlFor="password" className="font-semibold">
              password
            </label>
            <input
              className=" w-full p-3 text-sm outline-none font-medium  border-b"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
             
            />
            <button className="mt-2 px-5 py-1.5 rounded-xl w-full my-3 border border-black hover:bg-black hover:text-white transition-all duration-300">
              Login
            </button>
            <p className="font-medium">
              Don't Have Any Account ?
              <Link to='/SignUp' className="underline">
                Register</Link>
            </p>
            <button className="mt-2 px-5 py-1.5 rounded-xl w-full my-3 border bg-black text-white ">
              Sign Up With Google <i className="ri-google-fill mx-2"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
