"use client";

import { ReactTyped } from "react-typed";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Img from "../../../public/images/banner1.png";

type Slide = {
  image: string | StaticImageData;
};

const slides: Slide[] = [
  {
    image: Img,
  },
  {
    image: "https://i.ibb.co/ZpVhxLNf/sustainable-education-jpg.webp",
  },
  {
    image: "https://i.ibb.co/FLd8PkDZ/tree2.jpg",
  },
  {
    image: "https://i.ibb.co/vxzbBTBG/DSC01283-scaled.jpg",
  },
  {
    image: "https://i.ibb.co/ch0YdFD0/cleanup.jpg",
  },
  {
    image:
      "https://i.ibb.co/svNks8kV/donating-blood-donation-areas-in-New-York-Citizen-Advocates-community-action-e1704411064175.png",
  },
];

export default function Banner() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="w-full h-[550px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative w-full h-[640px] bg-cover bg-center "
            style={{
              backgroundImage: `url(${
                typeof slide.image === "string" ? slide.image : slide.image.src
              })`,
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start px-4 lg:pl-52 bg-opacity-40 text-center lg:text-left">
              <h1 className="text-white text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold leading-tight sm:leading-[50px] md:leading-[65px]">
                <ReactTyped
                  backSpeed={50}
                  strings={["Disaster Relief Funding"]}
                  typeSpeed={140}
                  loop
                  className="text-base sm:text-xl uppercase md:text-2xl lg:text-5xl"
                />
              </h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
