import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { SlUserFollowing } from "react-icons/sl";
import apps from "../../../public/images/Apps.png";
import iconTwo from "../../../public/images/footer icon (1).png";
import iconThree from "../../../public/images/footer icon (2).png";
import iconOne from "../../../public/images/footer icon.png";

// Contact Info Section Component
const ContactInfoSection = ({ icon, title, details }) => {
  return (
    <div className="flex flex-col items-center text-center mb-8 lg:mb-0">
      <div className="relative">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={50}
          height={50}
          className="mb-3"
          priority
        />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#2CACDD] rounded-full animate-ping"></div>
      </div>
      <h3 className="text-xl font-bold text-[#D1E8F2]">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className="text-sm text-white mt-2">
          {detail}
        </p>
      ))}
    </div>
  );
};

// Social Media Icons Component
const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4 mt-3">
      <a
        href="https://www.facebook.com/alsshippinglinellc/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <FaFacebookF className="text-xl text-[#2CACDD] hover:text-blue-500 transition-colors" />
      </a>
      <a
        href="https://x.com/aslshippingllc"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <FaTwitter className="text-xl text-[#2CACDD] hover:text-blue-400 transition-colors" />
      </a>
      <a
        href="https://www.instagram.com/aslshippinglinellc/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <FaInstagram className="text-xl text-[#2CACDD] hover:text-pink-500 transition-colors" />
      </a>
      <a
        href="https://www.tiktok.com/@aslshippinglinellc"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <IoLogoTiktok className="text-xl text-[#2CACDD] hover:text-black transition-colors" />
      </a>
    </div>
  );
};

// Main Component
const CallUs = () => {
  const contactInfo = [
    {
      icon: iconOne,
      title: "Get In Touch",
      details: ["0529751028", "042241592"],
    },
    {
      icon: iconTwo,
      title: "Opening Hours",
      details: [
        "Monday-Friday: 8:00 am - 5:00 pm",
        "Saturday: 8:00 am - 1:00 pm",
        "Sunday: Closed",
      ],
    },
    {
      icon: iconThree,
      title: "Locations",
      details: ["Dubai", "United Arab Emirates"],
    },
  ];

  return (
    <div>
      <section
        className="contact-info grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-white py-16 px-6"
        style={{
          background:
            "linear-gradient(90deg, rgb(36, 58, 78) 0%, rgb(39, 74, 96) 50%, #186080 100%)",
        }}
      >
        {contactInfo.map((info, index) => (
          <ContactInfoSection key={index} {...info} />
        ))}

        {/* Follow Us Section */}
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <SlUserFollowing
              size={50}
              className="mb-4 text-[#2CACDD] hover:text-[#1F8FB8] transition-colors duration-300"
            />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#2CACDD] rounded-full animate-ping"></div>
          </div>
          <h3 className="text-xl font-bold text-[#D1E8F2]">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <SocialMediaIcons />
          </div>
        </div>

        {/* Download Apps Section */}
        <div className="flex flex-col items-center text-center mt-5">
          <h3 className="text-xl font-bold text-[#D1E8F2] mb-4">
            Download Apps
          </h3>
          <a href="#" className="block hover:opacity-90 transition">
            <Image
              src={apps}
              alt="GET it on Google Play"
              width={150}
              height={50}
              className="hover:opacity-90 transition"
              priority // Optimize image loading
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CallUs;
