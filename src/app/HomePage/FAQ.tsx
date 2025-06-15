"use client";

import {
  Accordion,
  AccordionItem as BaseAccordionItem,
} from "@szhsin/react-accordion";
import Image from "next/image";
import chevronDown from "../../../public/images/chevron-down.svg";
// import styles from "./styles.module.css"; // Make sure this file exists or remove this

const AccordionItem = ({ header, ...rest }) => (
  <BaseAccordionItem
    {...rest}
    header={
      <div className="flex items-center justify-between w-full">
        {header}
        <Image
          src={chevronDown}
          alt="Chevron Down"
          width={20}
          height={20}
          className="transition-transform duration-300 group-[.szh-accordion__item--expanded]:rotate-180"
        />
      </div>
    }
    className="border-b border-gray-300"
    buttonProps={{
      className:
        "flex justify-between w-full py-4 font-medium text-left text-[#1C3A5F] focus:outline-none",
    }}
    contentProps={{
      className: "py-2 text-gray-700",
    }}
    panelProps={{
      className: "pt-0 pb-4",
    }}
  />
);

const FAQ = () => {
  return (
    <div className="bg-gray-100 pt-10 pb-20">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Gallery Section */}
        <div className="-m-1 flex flex-wrap md:-m-2">
          {/* First Column */}
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src="https://i.ibb.co/PwpjScn/bg3.png"
                width={200}
                height={200}
                alt="gallery"
                className="w-full rounded-lg shadow-2xl hover:shadow-orange-400"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src="https://i.ibb.co/TbbZ9Rr/contact.jpg"
                width={200}
                height={200}
                alt="gallery"
                className="w-full rounded-lg shadow-2xl hover:shadow-orange-400"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src="https://i.ibb.co/HLwmDvfq/92ea30eb-19fc-43f7-b4c2-3721c8cf6694.jpg"
                width={200}
                height={200}
                alt="gallery"
                className="w-full rounded-lg shadow-2xl hover:shadow-orange-400"
              />
            </div>
          </div>

          {/* Second Column */}
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                src="https://i.ibb.co/Y3tM7LL/sssip.jpg"
                width={200}
                height={200}
                alt="gallery"
                className="w-full rounded-lg shadow-2xl hover:shadow-orange-400"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src="https://i.ibb.co/ZTLF5mR/Group-1.png"
                width={200}
                height={200}
                alt="gallery"
                className="w-full rounded-lg shadow-2xl hover:shadow-orange-400"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src="https://i.ibb.co/LzqsS9zD/ca89b58a-c8e9-4d9b-987b-7ad522604792.jpg"
                width={200}
                height={200}
                alt="gallery"
                className="w-full rounded-lg shadow-2xl hover:shadow-orange-400"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="pb-4 text-center">
            <p className="font-medium text-[#1C3A5F]">Still have questions?</p>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#1C3A5F]">
              Most commonly asked questions
            </h2>
          </div>

          <Accordion transition transitionTimeout={250} className="space-y-2">
            <AccordionItem header="How does the car shipping process work?">
              The car shipping process begins with researching and selecting a
              reputable shipping company that aligns with your specific
              requirements.
            </AccordionItem>
            <AccordionItem header="How much does it cost to ship a car?">
              Costs vary depending on distance, transport type, and more.
              Typically between $500–$2000.
            </AccordionItem>
            <AccordionItem header="What is the difference between open and enclosed transport?">
              Open transport is cheaper and more common but exposes the car to
              the elements.
            </AccordionItem>
            <AccordionItem header="Will my car be insured during transport?">
              Yes, most companies offer basic liability coverage. Always ask for
              details.
            </AccordionItem>
            <AccordionItem header="How long does it take to ship a car?">
              Shipping usually takes 1–2 weeks depending on distance and carrier
              availability.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
