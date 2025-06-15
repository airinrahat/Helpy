"use client";
import Image from "next/image";
// import { useState } from "react";
// import PhoneInput from "react-phone-input-2";
const SubmitForm = () => {
  //   const [dialCode, setDialCode] = useState("");
  //   const [primaryPhone, setPrimaryPhone] = useState("");
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-col lg:flex-row items-stretch max-w-screen-xl mx-auto px-4 lg:gap-32 w-full">
        <div className="lg:w-1/2 flex justify-center items-stretch mt-6 md:mt-6 lg:mt-0 mb-6">
          <Image
            // src={
            //   "https://i.ibb.co/Kc2dFQXY/ca89b58a-c8e9-4d9b-987b-7ad522604792.jpg"
            // }
            src={
              "https://i.ibb.co/HLwmDvfq/92ea30eb-19fc-43f7-b4c2-3721c8cf6694.jpg"
            }
            alt="Form Image"
            className="object-cover rounded"
            layout="responsive"
            width={800}
            height={800}
          />
        </div>

        <div className="w-full lg:w-1/2 mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-[#1C3A5F]">
            Submit Your Feedback
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-2 border rounded bg-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-2 border rounded bg-white"
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              required
              className="w-full p-2 border rounded bg-white"
            />

            {/* <PhoneInput
              country={"ae"}
              enableSearch={true}
              inputClass="!w-full !p-2 !text-gray-900 !bg-white !rounded !focus:outline-none !focus:ring-2 !focus:ring-blue-500 !border !border-gray-300"
              buttonClass="!bg-gray-100 !border !border-gray-300 !rounded-l"
              dropdownClass="!bg-white !text-black !border !border-gray-300 !rounded !shadow-lg" //
              containerClass="!w-full"
              placeholder="Enter phone number"
              value={`${dialCode}${primaryPhone}`}
              onChange={(phone, e) => {
                setDialCode(`+${e.dialCode}`);
              

                setPrimaryPhone(phone.slice(e.dialCode.length));
              }}
            /> */}

            <select
              name="service"
              required
              className="w-full p-2 border rounded bg-white"
            >
              <option value="">Select Service</option>
              <option value="Towing">Towing</option>
              <option value="Shipping">Shipping</option>
              <option value="Clearance">Clearance</option>
            </select>

            <select
              name="experience"
              required
              className="w-full p-2 border rounded bg-white"
            >
              <option value="">Select Experience</option>
              <option value="Normal">Normal</option>
              <option value="Good">Good</option>
              <option value="Excellent">Excellent</option>
              <option value="Bad">Bad</option>
              <option value="Worst">Worst</option>
            </select>

            <textarea
              name="feedback"
              placeholder="Your Feedback"
              required
              className="w-full p-2 border rounded h-24 bg-white"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#1C3A5F] text-white p-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;
