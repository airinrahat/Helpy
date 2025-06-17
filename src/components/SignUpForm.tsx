"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import React, { useState } from "react";
import SocialLogin from "./SocialLogin";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    toast.success("sign up Success");
    router.push("/login");
    form.reset();

    await registerUser({ name, email, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">
              User Name <span className="text-red-700">*</span>
            </span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full Name"
            className="input bg-black text-white input-bordered placeholder:text-xs"
          />

          <span className="text-red-700 mt-3 text-xs">
            This field is required
          </span>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">
              Email <span className="text-red-700">*</span>
            </span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input bg-black text-white input-bordered placeholder:text-xs"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">
              Password <span className="text-red-700">*</span>
            </span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your new password"
            className="input input-bordered bg-black text-white placeholder:text-xs"
          />

          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="checkbox"
              data-ripple-dark="true"
            >
              <input
                onClick={() => setShowPassword(!showPassword)}
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                id="checkbox"
              />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
              </span>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-gray-700"
              htmlFor="checkbox"
            >
              <span className="text-white">
                {showPassword ? "Hide Password" : "Show Password"}
              </span>
            </label>
          </div>
        </div>

        <div className="form-control mt-6 ">
          {/* <input
            type="submit"
            value="Sign Up"
            className="btn border-none w-full text-white bg-[#2c1e6d] hover:bg-[#140d32]"
          /> */}
          <button
            type="submit"
            className="btn border-none w-full text-white bg-[#2c1e6d] hover:bg-[#140d32]"
          >
            Sign Up
          </button>
        </div>
        <div className="w-full">
          <SocialLogin />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
