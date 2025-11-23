import Image from "next/image";
import Link from "next/link";

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="text-white py-20 px-6 min-h-[50vh] items-center flex bg-gray-50 dark:bg-primary-dark-gray transition-colors">
      <div className="max-w-6xl mx-auto flex items-center flex-col">
        <div className="flex items-center gap-13 mb-6">
          {/* Express Analytics Logo */}
          <Link href="https://www.expressanalytics.com" target="_blank">
            <Image
              src="/ealogo.avif"
              alt="EA Logo"
              width={300}
              height={70}
              className="cursor-pointer"
            />
          </Link>
          <span className="text-3xl font-bold text-gray-500">+</span>
          {/* Fivetran Logos (dark/light) */}
          <Link href="https://www.fivetran.com" target="_blank">
            <Image
              src="/fivetran-logo-blue.svg"
              alt="Fivetran Logo"
              width={220}
              height={70}
              className="cursor-pointer dark:hidden"
            />
            <Image
              src="/fivetran-logo-white.svg"
              alt="Fivetran Logo"
              width={220}
              height={70}
              className="cursor-pointer hidden dark:block"
            />
          </Link>
        </div>
        <h1 className="text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-600 via-red-600 to-purple-600 bg-clip-text text-transparent dark:text-white">
          Powering Enterprise Data Intelligence in the AI Era
        </h1>
        <p className="text-xl mb-8 max-w-3xl text-accent_gray dark:text-gray-300 text-center">
          Express Analytics joins Fivetran Partner Program to deliver advanced
          data integration and analytics solutions across hybrid environments,
          accelerating insights and AI readiness.
        </p>
        <div className="flex gap-4">
          <Link href={"https://www.expressanalytics.com/contact-us"} target="_blank" className="cursor-pointer animate-fadeInUp bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-bold transition-colors">
            Talk to Us
          </Link>
          <Link
            href="https://www.expressanalytics.com"
            target="_blank"
            className="border-2 border-primary_red dark:border-white hover:bg-primary_red dark:hover:bg-white text-primary_red dark:text-white hover:text-white dark:hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
