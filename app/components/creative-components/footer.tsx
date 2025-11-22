// Footer Section Component
const FooterSection = () => {
  return (
    <footer className="bg-white dark:bg-secondary-dark-gray dark text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 mb-4">
          © 2025 Express Analytics. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;