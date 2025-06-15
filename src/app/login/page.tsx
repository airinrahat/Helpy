import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import img from "../../../public/images/login.png";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="bg-[#010313] hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex justify-center items-center">
          <Image src={img} className="w-full md:w-96" alt="login" />
        </div>

        <div className="card flex-shrink-0 w-96 min-w-72 shadow-2xl bg-[#0e0d21] ">
          <Link
            href={"/"}
            className="text-3xl mt-4 font-extrabold text-center text-[#c29a4b] text-opacity-50"
          >
            Sign In Please
          </Link>

          <LoginForm />

          <span className="flex justify-center items-center px-9 -mt-6 mb-3">
            <div className="border border-gray-800 w-full h-0"></div>{" "}
            <span className="px-3 text-white">Or</span>{" "}
            <div className="border border-gray-800 w-full h-0"></div>
          </span>

          <div className="text-3xl px-7 space-y-5 mb-4">
            <button
              type="submit"
              className="btn btn-outline btn-[#140d32] w-full text-white bg-[#0e0d21] hover:bg-[#140d32]"
            >
              <FcGoogle className="transition-all text-xl hover:scale-125"></FcGoogle>
              <span className="normal-case text-xs">Sign in with Google</span>
            </button>

            <button
              type="submit"
              className="btn btn-outline btn-[#140d32] w-full text-white bg-[#0e0d21] hover:bg-[#140d32]"
            >
              <FaGithub className="text-xl transition-all hover:scale-125"></FaGithub>
              <span className="normal-case text-xs">Sign in with Github</span>
            </button>
          </div>

          <p className="mb-7 w-full  flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
            <span className="text-white">Do Not have an account?</span>
            <Link
              href={"/signUp"}
              className="ml-1  block font-sans text-sm font-bold leading-normal text-[#c5a35e] antialiased"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
