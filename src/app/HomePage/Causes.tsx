import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import Link from "next/link";
import {
  FaHandHoldingMedical,
  FaBookReader,
  FaHandHoldingHeart,
  FaTint,
  FaDonate,
  FaAppleAlt,
} from "react-icons/fa";

interface Service {
  id: number;
  name: string;
  logo: string;
  image: string;
  description: string;
}

// Icon mapping
const iconMap: { [key: string]: JSX.Element } = {
  FaHandHoldingMedical: <FaHandHoldingMedical className="text-white text-xl" />,
  FaBookReader: <FaBookReader className="text-white text-xl" />,
  FaHandHoldingHeart: <FaHandHoldingHeart className="text-white text-xl" />,
  FaTint: <FaTint className="text-white text-xl" />,
  FaDonate: <FaDonate className="text-white text-xl" />,
  FaAppleAlt: <FaAppleAlt className="text-white text-xl" />,
};

const Causes: React.FC = async () => {
  const serviceCollection = dbConnect(collectionNamesObj.serviceCollection);
  const services: Service[] = await serviceCollection.find({}).toArray();

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
                <div className="absolute inset-0 bg-opacity-30 hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="p-6">
                  <div className="bg-gray-100 h-[140px] translate-y-64 rounded-lg shadow-md relative">
                    <div className="flex justify-center items-center text-center p-4 relative">
                      <div className="absolute p-2 bg-[#1C3A5F] rounded-full -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 rounded-full flex justify-center items-center">
                          {iconMap[service.logo]}
                        </div>
                      </div>

                      <div className="text-xl font-bold pt-[140px] absolute w-full text-center">
                        <h3 className="text-[#1C3A5F]">{service.name}</h3>
                        <Link href={`/services/${service._id}`}>
                          <button className="text-sm px-4 py-2 mb-4 font-bold text-white bg-[#274A66] rounded-full shadow-lg hover:bg-[#1F345D] transition-all duration-300 mt-2">
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Causes;
