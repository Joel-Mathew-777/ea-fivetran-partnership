"use client";
import { useState } from "react";
import Image from "next/image";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";

const PressReleaseSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const quotes = [
    {
      name: "Hemant Warudkar",
      image: "/Hemant Warudkar.jpg",
      title: "Founder & CEO, Express Analytics",
      companyLogo: "/ealogo.avif",
      company: "Express Analytics",
      quote:
        "Our partnership with Fivetran is a significant step forward in democratizing access to clean, actionable data. With Fivetran's automation and our analytics expertise, we're helping enterprises transform raw data into strategic intelligence; faster, smarter, and with greater precision.",
      color: "border-red-600",
    },
    {
      name: "Todd Odess",
      image: "/Todd Odess.jpeg",
      title: "Director, Systems Integrator Partners, Fivetran",
      companyLogo: "/fivetran-logo-blue.svg",
      company: "Fivetran",
      quote:
        "We're excited to welcome Express Analytics as a Fivetran Partner. By being experts in Fivetran hybrid deployment and reverse ETL workflows, Express Analytics will help customers unlock the full value of their data by making it more accessible, automated, and actionable across every environment.",
      color: "border-[#306bea]",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % quotes.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + quotes.length) % quotes.length);

  return (
    <section className="py-16 px-6 bg-white dark:bg-secondary-dark-gray">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE TEXT SECTION */}
        <div>
          <span className="uppercase text-sm tracking-widest text-gray-500 dark:text-gray-300">
            testimonials
          </span>

          <h2 className="text-[44px] font-extrabold text-accent_gray dark:text-white leading-tight mt-2">
            Hear From Our
            <span className="block text-primary_red dark:text-white">
              Leaders & Partners
            </span>
          </h2>

          {/* <div className="flex items-center gap-4 mt-6">
            <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition">
              Schedule a Free Consultation
            </button>

            <div className="flex items-center gap-2">
              <Image
                src="/google-icon.svg"
                alt="Google rating"
                width={32}
                height={32}
              />
              <div>
                <p className="font-bold text-lg text-gray-900 dark:text-white">
                  5.0
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300 -mt-1">
                  GOOGLE REVIEWS
                </p>
              </div>
            </div>
          </div> */}
        </div>

        {/* RIGHT SIDE SLIDER CARD */}
        <div className="relative">
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl min-h-[300px] flex flex-col md:flex-row items-center md:items-start gap-6">

            {/* WRAPPER FOR LEFT SIDE IMAGE */}
            <div className="flex flex-col items-center md:items-start">
              {/* PERSON IMAGE */}
              <Image
                src={quotes[currentSlide].image}
                width={100}
                height={100}
                className="rounded-full object-cover flex-shrink-0"
                alt={quotes[currentSlide].name}
              />
            </div>

            {/* QUOTE SECTION */}
            <div className={`mt-4 md:mt-0 md:pl-6 w-full ${quotes[currentSlide].color}`}>
              <p className="text-gray-600 dark:text-gray-300 text-[15px] mb-2 leading-snug text-center md:text-left">
                <span className="font-bold">" </span>
                {quotes[currentSlide].quote}
              </p>

              {/* NAME + TITLE + LOGO */}
              <div className="flex flex-col md:flex-row items-center md:items-center gap-4 mt-4">
                {/* Name + Title */}
                <div className="text-center md:text-left">
                  <p className="font-bold text-gray-900 dark:text-white">
                    {quotes[currentSlide].name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 -mt-1">
                    {quotes[currentSlide].title}
                  </p>
                </div>

                {/* Company Logo */}
                <Image
                  src={quotes[currentSlide].companyLogo}
                  width={90}
                  height={40}
                  className="object-contain opacity-90 flex-shrink-0"
                  alt={`${quotes[currentSlide].company} logo`}
                />
              </div>
            </div>
          </div>


          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-10 top-1/2 -translate-y-1/2 p-3 transition"
          >
            <IoChevronBackOutline className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-primary_red" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-10 top-1/2 -translate-y-1/2 p-3 transition"
          >
            <IoChevronForward className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-primary_red" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {quotes.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full cursor-pointer transition-all ${
                  currentSlide === index ? "bg-red-600 w-8" : "bg-gray-300 w-2"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressReleaseSection;
