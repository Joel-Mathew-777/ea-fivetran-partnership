import { CiCircleCheck } from "react-icons/ci";

// Expertise Section Component
const ExpertiseSection = () => {
  const stats = [
    { value: "40+", label: "Years of Leadership" },
    { value: "100+", label: "Enterprise Projects" },
    { value: "20+", label: "Years Industry Experience" },
  ];

  const capabilities = [
    "Predictive Modeling",
    "Segmentation",
    "Attribution",
    "GenAI Capabilities",
    "Certified Fivetran Partner",
  ];

  return (
    <section className="py-16 px-6 bg-secondary-dark-gray text-white min-h-[50vh]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Experience & Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-5xl font-bold text-red-600 mb-2">
                {stat.value}
              </p>
              <p className="text-xl text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 md:text-center">
            Core Capabilities
          </h3>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center flex-wrap justify-center">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center gap-3">
                <CiCircleCheck className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-300">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
