'use client';
import { useState } from 'react';
import Image from 'next/image';
import { IoChevronBackOutline, IoChevronForward } from 'react-icons/io5';
import {RetroGrid} from './backgrounds/subtle-retro-grid';

const PressReleaseSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const quotes = [
    {
      name: "Hemant Warudkar",
      image: "/Hemant Warudkar.jpg",
      title: "Founder & CEO, Express Analytics",
      quote: "Our partnership with Fivetran is a significant step forward in democratizing access to clean, actionable data. With Fivetran's automation and our analytics expertise, we're helping enterprises transform raw data into strategic intelligence; faster, smarter, and with greater precision.",
      color: "red-600"
    },
    {
      name: "Todd Odess",
      image: "/Todd Odess.jpeg",
      title: "Director, Systems Integrator Partners, Fivetran",
      quote: "We're excited to welcome Express Analytics as a Fivetran Partner. By being experts in Fivetran hybrid deployment and reverse ETL workflows, Express Analytics will help customers unlock the full value of their data by making it more accessible, automated, and actionable across every environment.",
      color: "[#306bea]"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % quotes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section className="relative py-10 px-6 min-h-[50vh] bg-white dark:bg-transparent flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="relative">
          <div className={`bg-white dark:bg-secondary-dark-gray border-l-6 border-${quotes[currentSlide].color} p-8 min-h-[500px] flex-col md:flex-row rounded-lg shadow-lg md:min-h-[300px] flex items-center gap-6 sm:max-h-[500px]`}>
            <Image 
              src={quotes[currentSlide].image}
              width={100}
              height={100}
              className="rounded-full object-cover flex-shrink-0"
              alt={quotes[currentSlide].name}
            />
            <div className={`border-l-4 border-${quotes[currentSlide].color} pl-6 flex-1 flex flex-col`}>
              <p className="text-lg text-gray-500 mb-2">
                {quotes[currentSlide].name}, < br/> {quotes[currentSlide].title}
              </p>
              <p className="text-lg text-gray-800 dark:text-white italic sm:text-base">
                "{quotes[currentSlide].quote}"
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-7 p-1 transition-colors"
            aria-label="Previous quote"
          >
            <IoChevronBackOutline className="w-6 h-6 text-gray-700 hover:text-red-600 cursor-pointer" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-7 p-1 transition-colors"
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
                  currentSlide === index ? `bg-primary_red w-8` : 'bg-gray-300'
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <RetroGrid 
        className="absolute inset-0 pointer-events-none -z-1" />
    </section>
  );
};

export default PressReleaseSection;