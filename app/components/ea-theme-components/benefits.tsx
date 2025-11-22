import { GrLineChart } from "react-icons/gr";
import { GoZap } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";
import { GiOnTarget } from "react-icons/gi";
import { FiShield } from "react-icons/fi";
import { IconType } from "react-icons";
import Image from "next/image";

interface BenefitItemProps {
  icon: IconType;
  title: string;
  description: string;
}

// Benefit Item Component
const BenefitItem = ({ icon: Icon, title, description }: BenefitItemProps) => {
  return (
    <div className="flex gap-4 items-center mb-5 h-full">
      <div className="bg-red-100 dark:bg-primary_red p-3 rounded-lg">
        <Icon className="w-6 h-6 text-red-600 dark:text-white" />
      </div>
      <div>
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {title}
        </h4>
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
    <section className="py-16 px-6 bg-white dark:bg-[#374151] min-h-[50vh]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Partnership Benefits
        </h2>

        <p className="text-xl text-gray-600 dark:text-white mb-12 text-center">
          Tangible advantages for enterprises modernizing their data
          infrastructure
        </p>

        {/* Centered Container */}
        <div className="flex gap-12 flex-col md:flex-row items-center justify-center md:items-start mx-auto md:max-w-5xl">
          {/* Left Image */}
          <div className="w-[300px] h-full md:h-[420px]">
            <Image
              src="/eaabout1.webp"
              width={300}
              height={100}
              className="w-full h-full object-cover object-top rounded-lg shadow-lg"
              alt="Partnership Benefits Image"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-8 md:w-[540px] w-full md:h-[420px]">
            <div className="flex flex-col h-full">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} {...benefit} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
