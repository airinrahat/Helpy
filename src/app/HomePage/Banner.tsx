import Image from "next/image";
import React from "react";
import { FaPaste, FaX } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <div className=" pt-20">
        <div
          className="hero min-h-[800px]"
          style={{
            backgroundImage: "url('/images/banner1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay bg-opacity-60 "></div>
          <div className=" text-center text-neutral-content">
            <div className="hero-content flex-col lg:flex-row gap-10">
              <div className="text-center lg:text-left space-y-6">
                <h1 className="text-3xl lg:text-7xl font-bold ">
                  Reliable Service <br />
                  Every Time
                </h1>
                <p>
                  QuickShip, the epitome of efficiency in the realm of
                  international courier services, stands as a beacon for swift
                  and reliable parcel deliveries across borders.
                </p>
                <div className="join">
                  <div>
                    <div>
                      <input
                        className="input input-bordered join-item text-slate-600 lg:w-80 md:w-80 w-44"
                        placeholder="Tracking id..."
                        required
                      />
                    </div>
                  </div>
                  <div className="indicator flex justify-center items-center">
                    <button className="absolute  text-red-300  mr-52">
                      <FaX className="text-sm" />
                    </button>
                    <button className="absolute text-gray-500 mr-36">
                      <FaPaste />
                    </button>
                    <button className="btn rounded-l-none bg-blue-500 text-white">
                      Track Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/images/banner1.png" width={500} height={580} alt="logo" />
      </div>
    </div>
  );
};

export default Banner;
