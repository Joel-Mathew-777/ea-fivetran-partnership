'use client';
import { useState } from 'react';
import { IoChevronBackOutline, IoChevronForward } from 'react-icons/io5';

const PressReleaseSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const quotes = [
    {
      name: "Hemant Warudkar",
      title: "Founder & CEO, Express Analytics",
      quote: "Our partnership with Fivetran is a significant step forward in democratizing access to clean, actionable data. With Fivetran's automation and our analytics expertise, we're helping enterprises transform raw data into strategic intelligence; faster, smarter, and with greater precision.",
      color: "border-red-600"
    },
    {
      name: "Todd Odess",
      title: "Director, Systems Integrator Partners, Fivetran",
      quote: "We're excited to welcome Express Analytics as a Fivetran Partner. By being experts in Fivetran hybrid deployment and reverse ETL workflows, Express Analytics will help customers unlock the full value of their data by making it more accessible, automated, and actionable across every environment.",
      color: "border-gray-400"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % quotes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section className="py-16 px-6 bg-red-50 dark:bg-secondary-dark-gray min-h-[50vh] flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="relative">
          <div className="bg-white p-8 rounded-lg shadow-lg min-h-[300px] flex flex-col justify-center">
            <div className={`border-l-4 ${quotes[currentSlide].color} pl-6`}>
              <p className="text-sm text-gray-500 mb-2">
                {quotes[currentSlide].name}, {quotes[currentSlide].title}
              </p>
              <p className="text-lg text-gray-800 italic">
                "{quotes[currentSlide].quote}"
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 shadow-lg transition-colors"
            aria-label="Previous quote"
          >
            <IoChevronBackOutline className="w-6 h-6 text-gray-700 hover:text-red-600 cursor-pointer" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 shadow-lg transition-colors"
            aria-label="Next quote"
          >
            <IoChevronForward className="w-6 h-6 text-gray-700 hover:text-red-600 cursor-pointer" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-red-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressReleaseSection;