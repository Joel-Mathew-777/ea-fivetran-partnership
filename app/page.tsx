import StatusMonitor from "./components/StatusMonitor";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";
import { IoColorPaletteOutline } from "react-icons/io5";

const buttons_links = [
  {
    title: "Express Analytics",
    url: "https://www.express-analytics.com/",
    external: true,
  },
  { title: "Fivetran", url: "https://www.fivetran.com/", external: true },
  {
    title: "EA Theme",
    url: "/pages/fivetran-partnership/ea-theme",
    external: false,
  },
  {
    title: "Creative Theme",
    url: "/pages/fivetran-partnership/creative",
    external: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl font-bold text-gray-700 dark:text-white text-center">
            Express Analytics × Fivetran
          </h1>
          <h2 className="text-5xl font-bold text-gray-700 dark:text-white mb-6">
            Partnership Page Showcase
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Explore two distinct design implementations of the Express Analytics
            and Fivetran partnership announcement page.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            This project demonstrates the ability to create modular, responsive
            Next.js pages with clean component architecture, proper state
            management, and attention to both brand consistency and creative
            design.
          </p>
        </div>

        {/* Theme Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* EA Theme Card */}
          <Link
            href="/pages/fivetran-partnership/ea-theme"
            className="group block bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-[#DC1B36]"
          >
            <div className="bg-gray-100 dark:bg-gray-700 group-hover:bg-[#DC1B36] p-8 text-gray-700 dark:text-white group-hover:text-white transition-all duration-300">
              <LuBuilding2 className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-3xl font-bold mb-2">EA Brand Theme</h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-red-100 transition-colors duration-300">
                Official Express Analytics Design
              </p>
            </div>
          </Link>

          {/* Creative Theme Card */}
          <Link
            href="/pages/fivetran-partnership/creative"
            className="group block bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-[#DC1B36]"
          >
            <div className="bg-gray-100 dark:bg-gray-700 group-hover:bg-[#DC1B36] p-8 text-gray-700 dark:text-white group-hover:text-white transition-all duration-300">
              <IoColorPaletteOutline className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-3xl font-bold mb-2">Creative Theme</h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-red-100 transition-colors duration-300">
                Custom Design Implementation
              </p>
            </div>
          </Link>
        </div>

        {/* About Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-700 dark:text-white mb-4">
            About This Project
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 dark:text-gray-300">
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-white mb-2">
                Technical Stack:
              </h4>
              <ul className="space-y-2">
                <li>• Next.js with TypeScript</li>
                <li>• Tailwind CSS for styling</li>
                <li>• React Icons for iconography</li>
                <li>• Component-based architecture</li>
                <li>• Responsive design patterns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-white mb-2">
                Key Features:
              </h4>
              <ul className="space-y-2">
                <li>• Real-time website status monitoring</li>
                <li>• Dark mode support</li>
                <li>• Accessible, semantic HTML</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Full-Stack Developer Assignment • Express Analytics
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
      {/* Status Monitor Component */}
      <StatusMonitor />
    </div>
  );
}
