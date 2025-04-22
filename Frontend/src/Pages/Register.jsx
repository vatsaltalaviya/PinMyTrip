import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex flex-col md:flex-row md:h-[70vh] w-[80vw] md:w-[60vw] overflow-hidden rounded-xl bg-gray-200">
          <div className="hidden md:flex h-full w-1/3 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              src="https://cdn.cosmos.so/76ada1e0-fd2b-41e9-b31d-bb1c963d7dcf.mp4"
              className="w-full h-full object-cover"
            ></video>
          </div>
          <div className="h-full w-full md:w-2/3 p-5">
            <form action="">
              <h1 className="text-xl font-bold mx-8 my-5">
                Signup To your Account
              </h1>
              <label htmlFor="name" className="font-semibold">
                {" "}
                Enter Your Name
              </label>
              <input
                className="mb-2 w-full p-3 text-sm outline-none font-medium  border-b"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="your name"
              />
              <label htmlFor="email" className="font-semibold">
                {" "}
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
                SignUp
              </button>
              <p className="font-medium">
                Already Have An Account ?
                <Link to="/Login" className="underline">
                  Login
                </Link>
              </p>
              <button className="mt-2 px-5 py-1.5 rounded-xl w-full my-3 border bg-black text-white ">
                Sign Up With Google <i className="ri-google-fill mx-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
