import { GrLineChart } from "react-icons/gr";
import { GoZap } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";
import { GiOnTarget } from "react-icons/gi";
import { FiShield } from "react-icons/fi";
import { IconType } from "react-icons";
import { Particles } from "./backgrounds/particles";

interface BenefitItemProps {
  icon: IconType;
  title: string;
  description: string;
}

// Benefit Item Component
const BenefitItem = ({ icon: Icon, title, description }: BenefitItemProps) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="bg-red-100 dark:bg-gray-800 p-3 rounded-lg flex-shrink-0">
        <Icon className="w-6 h-6 text-red-600" />
      </div>
      <div>
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{title}</h4>
        <p className="text-gray-700 dark:text-white">{description}</p>
      </div>
    </div>
  );
};

// Benefits Section Component
const BenefitsSection = () => {
  const benefits = [
    {
      icon: GoZap,
      title: "Automation & Agility",
      description:
        "Pipelines that auto-adjust to changing data schemas and structures",
    },
    {
      icon: GrLineChart,
      title: "Scalability",
      description: "Hybrid support across cloud and on-premises environments",
    },
    {
      icon: GiOnTarget,
      title: "Faster Insights",
      description:
        "Activate dormant data for predictive and Agentic AI use cases",
    },
    {
      icon: FiShield,
      title: "AI-Ready Infrastructure",
      description:
        "Stable, schema-resilient data movement for advanced analytics",
    },
    {
      icon: CiCircleCheck,
      title: "Real Efficiency",
      description: "Streamlined workflows across teams and departments",
    },
  ];

  return (
    <section className="relative py-16 px-6 min-h-[50vh]">
      <Particles 
      className="absolute inset-0 w-full h-full overflow-hidden -z-1"/>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Partnership Benefits
        </h2>
        <p className="text-xl text-gray-600 dark:text-white mb-12 text-center">
          Tangible advantages for enterprises modernizing their data
          infrastructure
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection