import React from "react";
import HeroSection from "../../../components/ea-theme-components/hero-section";
import { GrLineChart } from "react-icons/gr";
import { GoZap } from "react-icons/go";
import { CiGlobe, CiCircleCheck } from "react-icons/ci";
import { GiOnTarget } from "react-icons/gi";
import { FiShield } from "react-icons/fi";

// Overview Section Component
const OverviewSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Simplifying Hybrid Data Integration
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-600">
            <p className="text-6xl font-bold text-red-600 mb-2">73%</p>
            <p className="text-lg text-gray-700">
              of enterprise data remains unused and untapped for insights
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              By combining Fivetran's automated data movement with Express
              Analytics' expertise in data modeling, marketing analytics, and
              AI-driven insights, organizations can quickly build adaptive data
              pipelines that adjust to schema changes and activate previously
              unused data to power advanced models.
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-700">
          This "better together" approach simplifies the traditionally complex
          process of connecting, transforming, and operationalizing data,
          accelerating time-to-insight and improving business agility.
        </p>
      </div>
    </section>
  );
};

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
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600">
      <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-red-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
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
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Solutions & Capabilities
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
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

interface BenefitItemProps {
  icon: IconType;
  title: string;
  description: string;
}

// Benefit Item Component
const BenefitItem = ({ icon: Icon, title, description }: BenefitItemProps) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
        <Icon className="w-6 h-6 text-red-600" />
      </div>
      <div>
        <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-700">{description}</p>
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
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Partnership Benefits
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center">
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

// Expertise Section Component
const ExpertiseSection = () => {
  const stats = [
    { value: "40+", label: "Years of Leadership" },
    { value: "100+", label: "Enterprise Projects" },
    { value: "20+", label: "Years Industry Experience" },
  ];

  const capabilities = [
    "Predictive Modeling & Analytics",
    "Customer Segmentation",
    "Marketing Attribution",
    "GenAI Capabilities",
    "Certified Fivetran Partner",
  ];

  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
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
          <h3 className="text-2xl font-bold mb-6">Core Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-4">
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

// Press Release Component
const PressReleaseSection = () => {
  return (
    <section className="py-16 px-6 bg-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="border-l-4 border-red-600 pl-6 mb-8">
            <p className="text-sm text-gray-500 mb-2">
              Hemant Warudkar, Founder & CEO, Express Analytics
            </p>
            <p className="text-lg text-gray-800 italic">
              "Our partnership with Fivetran is a significant step forward in
              democratizing access to clean, actionable data. With Fivetran's
              automation and our analytics expertise, we're helping enterprises
              transform raw data into strategic intelligence; faster, smarter,
              and with greater precision."
            </p>
          </div>
          <div className="border-l-4 border-gray-400 pl-6">
            <p className="text-sm text-gray-500 mb-2">
              Todd Odess, Director, Systems Integrator Partners, Fivetran
            </p>
            <p className="text-lg text-gray-800 italic">
              "We're excited to welcome Express Analytics as a Fivetran Partner.
              By being experts in Fivetran hybrid deployment and reverse ETL
              workflows, Express Analytics will help customers unlock the full
              value of their data by making it more accessible, automated, and
              actionable across every environment."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
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

const eaTheme = () => {
  return (
    <div className="justify-center min-h-screen">
      {/* <h1 className='text-3xl font-bold text-primary_red dark:text-white'>EA theme</h1> */}
      <HeroSection />
      <OverviewSection />
      <SolutionsSection />
      <BenefitsSection />
      <ExpertiseSection />
      <PressReleaseSection />
      <FooterSection />
    </div>
  );
};

export default eaTheme;
