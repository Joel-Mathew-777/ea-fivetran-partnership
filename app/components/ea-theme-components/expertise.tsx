import { CiCircleCheck } from "react-icons/ci";
// import Image from 

// Expertise Section Component
const ExpertiseSection = () => {
  const stats = [
    { value: "40+", label: "Years of Leadership" },
    { value: "100+", label: "Enterprise Projects" },
    { value: "20+", label: "Years Industry Experience" },
  ];

  const capabilities = [
    "Predictive Modeling",
    "Customer-First Approach",
    // "Data Cleaning & Transformation", // extra field added to make it even
    "Segmentation",
    "Attribution",
    "GenAI Capabilities",
    "Certified Fivetran Partner",
  ];

  return (
    <section className="text-white min-h-[50vh]">
      <div className="flex flex-col mx-auto">
        <div className="mx-auto flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 via-red-600 to-purple-600 w-full p-8">
          <h2 className="text-4xl font-bold p-10 text-center flex justify-center text-white">
            Experience & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8 p-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-xl text-white font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8">
          <h3 className="text-2xl font-bold mb-6 text-primary_red dark:text-white text-center">
            Core Capabilities
          </h3>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center flex-wrap justify-center">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center gap-3">
                <CiCircleCheck className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-800 dark:text-white">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
