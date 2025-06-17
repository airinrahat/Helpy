"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();
  const handleSocialLogin = (providerName: string) => {
    console.log("social login", providerName);
    signIn(providerName);
  };
  useEffect(() => {
    if (session?.status == "authenticated") {
      router.push("/");
      toast("successfully logged in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.status]);
  return (
    <div className="text-3xl px-7 space-y-5 mb-4">
      <button
        onClick={() => handleSocialLogin("google")}
        type="button"
        className="btn btn-outline btn-[#140d32] w-full text-white bg-[#0e0d21] hover:bg-[#140d32]"
      >
        <FcGoogle className="transition-all text-xl hover:scale-125"></FcGoogle>
        <span className="normal-case text-xs">Sign in with Google</span>
      </button>

      <button
        type="button"
        onClick={() => handleSocialLogin("github")}
        className="btn btn-outline btn-[#140d32] w-full text-white bg-[#0e0d21] hover:bg-[#140d32]"
      >
        <FaGithub className="text-xl transition-all hover:scale-125"></FaGithub>
        <span className="normal-case text-xs">Sign in with Github</span>
      </button>
    </div>
  );
};

export default SocialLogin;
