import React from "react";
import HeroSection from "@/app/components/ea-theme-components/hero"; 
import PressReleaseSection from "@/app/components/ea-theme-components/quotes";
import FooterSection from "@/app/components/ea-theme-components/footer"; 
import ExpertiseSection from "@/app/components/ea-theme-components/expertise";
import BenefitsSection from "@/app/components/ea-theme-components/benefits";
import SolutionsSection from "@/app/components/ea-theme-components/solutions";
import OverviewSection from "@/app/components/ea-theme-components/overview";

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
    </div>
  );
};

export default eaTheme;
