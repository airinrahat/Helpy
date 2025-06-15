"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import user1 from "../../../public/images/Engr. Ahmad.png";
import user2 from "../../../public/images/Asif khan.png";
import user3 from "../../../public/images/ab khan.png";
import user4 from "../../../public/images/uAltaf Hussain Awal Zada.png";
import user5 from "../../../public/images/zafar.png";

const Stories = () => {
  const testimonials = [
    {
      name: "Engr. Ahmad",
      username: "@engrahmad . 23 days ago",
      review:
        "Best shipping services provider for used cars from USA to UAE. competitive prices and no compromise on quality. i recommend ASL to every used car dealer and car lover.",
      image: user1,
    },
    {
      name: "Asif khan",
      username: "@asifkhan . 9 months ago",
      review:
        "One of the best shipping company in market they provide best services and deliver vehicles safely to UAE. Highly recommend for used car dealers ",
      image: user2,
    },
    {
      name: "ab khan",
      username: "@ab khan . 24 days ago",
      review:
        "Amaya Shipping LLC provides great services. Their services are fast and reliable, and they offer the best prices.",
      image: user3,
    },
    {
      name: "Altaf Hussain Awal Zada",
      username: "@altafhussain . 20 days ago",
      review:
        "I shipped my cars with AMAYA SHIPPING LINE LLC. They provided excellent service, ensuring my vehicles were shipped safely and arrived on time. I highly recommend their reliable used car shipping services!",
      image: user4,
    },
    {
      name: "Zafar Iqbal",
      username: "@zafariqbal · 7 months ago",
      review:
        "Amaya Shipping Line is exceptionally reliable with their schedules and prices. Always delivering the shipments on time, which is crucial for the business. Their customer service is also top-notch, quick to respond and resolve any issues.",
      image: user5,
    },
  ];
  return (
    <div className="mb-14">
      <section className="  max-w-screen-xl mx-auto ">
        <h3 className=" text-3xl  text-[#1C3A5F] my-5  md:text-4xl font-extrabold mb-5 text-center   mt-5 ">
          Stories from the Heart
        </h3>
        <div className="  ">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="pb-10"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="p-4">
                <div className="border rounded-xl shadow-lg px-6 py-4 w-full h-[400px] flex flex-col">
                  <div className="flex justify-center mb-2">
                    <FcGoogle className="text-4xl" />
                  </div>

                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className="text-yellow-500 text-xl">
                        ★
                      </span>
                    ))}
                  </div>

                  <div className=" text-gray-700 text-sm mb-1 overflow-auto">
                    {testimonial.review}
                  </div>

                  <div className="flex flex-col items-center mt-auto">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full  border"
                    />
                    <p className="font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.username}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Stories;
