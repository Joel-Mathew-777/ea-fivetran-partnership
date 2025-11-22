import React from "react";
import HeroSection from "@/app/components/creative-components/hero"; 
import PressReleaseSection from "@/app/components/creative-components/quotes";
import FooterSection from "@/app/components/creative-components/footer"; 
import ExpertiseSection from "@/app/components/creative-components/expertise";
import BenefitsSection from "@/app/components/creative-components/benefits";
import SolutionsSection from "@/app/components/creative-components/solutions";
import OverviewSection from "@/app/components/creative-components/overview";
import StatusMonitor from "@/app/components/StatusMonitor";

const eaTheme = () => {
  return (
    <div>
      {/* <h1 className='text-3xl font-bold text-primary_red dark:text-white'>EA theme</h1> */}
      <HeroSection />
      <OverviewSection />
      <SolutionsSection />
      <BenefitsSection />
      <ExpertiseSection />
      <PressReleaseSection />
      <FooterSection />
      <StatusMonitor />
    </div>
  );
};

export default eaTheme;
