import { GrLineChart } from "react-icons/gr";
import { GoZap } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";
import { IconType } from "react-icons";

interface SolutionCardProps {
  icon: IconType;
  title: string;
  description: string;
}
// Solution Card Component
const SolutionCard = ({
  icon: Icon,
  title,
  description,
}: SolutionCardProps) => {
  return (
    <div className="bg-[#fef2f2] dark:bg-primary_red p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-full h-16 rounded-lg flex items-center text-center justify-center mb-4">
        <Icon className="w-8 h-8 text-red-600 dark:text-white" />
      </div>
      <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 dark:text-white leading-relaxed">{description}</p>
    </div>
  );
};

// Solutions Section Component
const SolutionsSection = () => {
  const solutions = [
    {
      icon: GrLineChart,
      title: "Data Integration & ETL-as-a-Service",
      description:
        "Seamless data movement across cloud and on-premises systems with automated pipelines that adapt to schema changes, ensuring reliable and consistent data flow.",
    },
    {
      icon: GoZap,
      title: "Analytics & GenAI Activation",
      description:
        "Transform dormant data into actionable intelligence with predictive modeling, customer segmentation, and AI-driven insights that power strategic decision-making.",
    },
    {
      icon: CiGlobe,
      title: "Hybrid Data Ecosystem Enablement",
      description:
        "Support for hybrid deployment environments and reverse ETL workflows, enabling efficient management of complex data workflows across diverse infrastructures.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-primary-dark-gray min-h-[50vh]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Solutions & Capabilities
        </h2>
        <p className="text-xl text-gray-600 dark:text-white mb-12 text-center max-w-3xl mx-auto">
          End-to-end data enablement solutions that bridge the gap between raw
          data and strategic intelligence
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;