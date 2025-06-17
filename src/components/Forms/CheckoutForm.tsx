"use client";

import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const CheckoutForm = ({ data }) => {
  // console.log("checkout", data);
  const { data: session } = useSession();
  console.log("session", session);
  const handleBookService = async (e) => {
    console.log("session", session);
    toast("Submitting Booking ...");
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const date = form.date.value;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const dueAmount = form.dueAmount.value;
    const phone = form.phone.value;
    const address = form.address.value;

    const bookingPayload = {
      customerName: name,
      email,

      date,
      phone,
      address,
      service_id: data?._id,
      service_name: data?.title,
      service_image: data?.image,
      service_price: data?.price,
    };
    console.log(bookingPayload);
  };
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-xl rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Book Service: {data?.title}
      </h2>
      <form onSubmit={handleBookService} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={session?.user?.name}
            readOnly
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
          />
        </div>
        {/* Due Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Due Amount
          </label>
          <input
            type="number"
            name="dueAmount"
            defaultValue={data?.price}
            readOnly
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            defaultValue={session?.user?.email}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
          />
        </div>
        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            name="date"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            pattern="[0-9]{10,15}"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
          />
        </div>
        {/* Present Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Present Address
          </label>
          <input
            type="text"
            name="address"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
          />
        </div>
        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            value="Order Confirm"
            className="w-full bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition duration-200 font-semibold"
          >
            Proceed to Checkout
          </button>
        </div>
      </form>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default CheckoutForm;
