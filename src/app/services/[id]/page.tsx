import Banner from "@/app/HomePage/Banner";

import Image from "next/image";
import Link from "next/link";

export default async function ServiceDetailsPage({ params }) {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/services/${p.id}`);
  const data = await res.json();
  return (
    <div>
      <Banner />

      <main className="max-w-6xl mx-auto p-6">
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Server Image */}

            <Image
              src={data?.image}
              alt="Image"
              width={600}
              height={400}
              className="rounded-lg"
            />

            {/* Server Info */}
            <div className="md:w-2/3 w-full space-y-4">
              <h1 className="text-3xl font-bold text-gray-800">
                Dedicated Support Server
              </h1>
              <p className="text-gray-600 leading-relaxed">
                {data?.description}
                This server provides 24/7 customer support with automated
                ticketing, multilingual agents, and live chat. Perfect for small
                to mid-sized businesses looking to deliver efficient service.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Status:</span>{" "}
                <span className="text-green-600 font-semibold">Active</span>
              </div>

              <div className="flex gap-4">
                <Link href={`/checkOut/${data._id}`}>
                  {" "}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg shadow-md transition duration-200">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bullet Points / Features */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Key Features
            </h2>

            <ul className="list-disc pl-4">
              {data?.key_features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Extra Info Section */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Important Notice
            </h3>
            <p className="text-gray-600">
              {data?.important_notice}
              Please make sure your business is registered before requesting
              support services. Our support team is available 24/7, but response
              time may vary depending on peak hours and ticket volume.
            </p>
          </div>
        </section>

        {/* <section className="mt-8 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Key Features
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
            <li>Automated Ticket Handling</li>
            <li>Real-time Dashboard</li>
            <li>Analytics and Insights</li>
            <li>Client Feedback Integration</li>
          </ul>
        </section>

     
        <section className="mt-8 p-6 bg-blue-50 rounded-2xl text-center">
          <h3 className="text-lg font-semibold mb-2">Need Customization?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Let us know your requirements and we’ll tailor a server just for
            you.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Contact Us
          </button>
        </section> */}
      </main>
    </div>
  );
}
