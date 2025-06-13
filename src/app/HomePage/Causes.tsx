"use client";
import Image from "next/image";
import { useState } from "react";
import { FaShip, FaTruckLoading } from "react-icons/fa";

interface Service {
  id: number;
  name: string;
  logo: string | JSX.Element;
  image: string;
  description: string;
}

const Causes: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const services: Service[] = [
    {
      id: 1,
      name: "Fast Shipping",
      logo: "https://i.ibb.co/tk3CQb6/Group.png",
      image: "https://i.ibb.co/23fTfYYD/vl-cause-1-1.png",
      description:
        "Road freight service is a mode of transporting various goods by road using trucks that can handle different loads and distances.",
    },
    {
      id: 2,
      name: "Clearance",
      logo: "https://i.ibb.co/gMCWVVGv/Group2.png",
      image: "https://i.ibb.co/7NBKr2ML/vl-cause-1-2.png",
      description:
        "Sea freight service is shipping goods overseas by sea using cargo ships of different sizes and capacities.",
    },
    {
      id: 3,
      name: "Half-Cut Vehicle Shipping",
      logo: "https://i.ibb.co/Gffx3XRC/Vector.png",
      image: "https://i.ibb.co/S7ZTMMS6/vl-cause-1-3.png",
      description:
        "Train freight service is transporting goods by rail using freight cars of different types and capacities.By rail using cars.",
    },
    {
      id: 4,
      name: "Towing",
      logo: "https://i.ibb.co/fzQ0jg5T/Vector1.png",
      image: "https://i.ibb.co/rKPcMjSb/Untitled-design-18.jpg",
      description: `We arrange for the pickup of your vehicle from over 300
                      locations across the USA, ensuring a convenient and efficient
                      start to the shipping process.`,
    },
    {
      id: 5,
      name: "Shipment Tracking",
      logo: <FaShip className="text-4xl text-white" />,
      image: "https://i.ibb.co/C5vyYDt8/Untitled-design-17.jpg",
      description: `Our official tracking system allows you to monitor the status
                      of your vehicle and container in real-time, ensuring
                      transparency and peace of mind throughout the shipping
                      journey.`,
    },
    {
      id: 6,
      name: "Loading",
      logo: <FaTruckLoading className="text-4xl text-white" />,
      image: "https://i.ibb.co/355hKzx9/Untitled-design-17.jpg",
      description: `Your vehicle is securely loaded into a shipping container,
                      utilizing advanced techniques to prevent any movement during
                      transit, thereby minimizing the risk of damage.`,
    },
  ];

  return (
    <div>
      <div className="bg-gray-50 my-16">
        <div className="py-2 bg-gray-50 text-gray-800 w-full">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-center text-[#1C3A5F]">
            Our Latest Causes
          </h2>
          <div className="lg:mx-60 mx-4">
            <p className="text-lg md:text-xl leading-relaxed md:leading-8 font-medium text-gray-700 text-center">
              Long-term recovery requires sustainable livelihoods. We support
              individuals & families in rebuilding.
            </p>
          </div>
        </div>

        <div className="m-auto flex justify-center items-center py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-2 xl:p-0">
            {services.map((service) => (
              <div
                key={service.id}
                className="w-[370px] lg:w-[300px] xl:w-[370px] h-[440px] bg-cover bg-center relative shadow-2xl rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url('${service.image}')` }}
              >
                <div className="absolute inset-0  bg-opacity-30 hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="p-6">
                  <div className="bg-gray-100 h-[140px] translate-y-64 rounded-lg shadow-md relative">
                    <div className="flex justify-center items-center text-center p-4 relative">
                      <div className="absolute p-2 bg-[#1C3A5F] rounded-full -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 rounded-full flex justify-center items-center">
                          {typeof service.logo === "string" ? (
                            <Image
                              height={80}
                              width={80}
                              alt="img"
                              className="h-10 w-10 object-contain"
                              src={service.logo}
                            />
                          ) : (
                            <div className="h-10 w-10 flex justify-center items-center">
                              {service.logo}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="text-xl font-bold pt-[140px] absolute w-full text-center">
                        <h3 className="text-[#1C3A5F]">{service.name}</h3>
                        <button
                          onClick={() => openModal(service)}
                          className="text-sm px-4 py-2 mb-4 font-bold text-white bg-[#274A66] rounded-full shadow-lg hover:bg-[#1F345D] transition-all duration-300 mt-2"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isModalOpen && selectedService && (
            <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
              <div className="bg-white p-6 relative rounded-lg shadow-lg max-w-md w-full">
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 px-4 py-2 bg-[#274A66] text-white rounded-full hover:bg-[#1F345D] transition-all duration-300"
                >
                  X
                </button>
                <Image
                  src={selectedService.image}
                  alt={selectedService.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />

                <h2 className="text-2xl font-bold text-[#1C3A5F] mt-4">
                  {selectedService.name}
                </h2>

                <p className="text-gray-700 mt-2">
                  {selectedService.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Causes;
