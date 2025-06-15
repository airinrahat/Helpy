import signUpImg from "../../../public/images/signUp.png";
import Link from "next/link";
import Image from "next/image";
import SignUpForm from "@/components/SignUpForm";

const SignUp = () => {
  return (
    <div className="bg-[#010313] w-full hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex justify-center items-center">
          <Image src={signUpImg} className="w-full " alt="signUp"></Image>
        </div>

        <div className="card flex-shrink-0 w-96 min-w-72 shadow-2xl bg-[#0e0d21] ">
          <h1 className="text-3xl mt-4 font-extrabold text-center text-[#c29a4b] text-opacity-50">
            Sign Up Please
          </h1>

          <SignUpForm />
          <p className="mb-7 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
            <span className="text-white">Already have an account?</span>
            <Link
              href={"/login"}
              className="ml-1 block font-sans text-sm font-bold leading-normal text-[#c5a35e] antialiased"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
