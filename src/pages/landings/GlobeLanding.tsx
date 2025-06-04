import React from "react";
import { motion } from "framer-motion";
import { GlobeDemo } from "../../components/_Customs2024/GlobeGithubNew";
import { FlipWordsDemo } from "@/components/_Customs2024/FlipWordsDemo";

interface HeroSectionProps {
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <GlobeDemo />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 py-24 sm:px-6 lg:px-8">
        {children}
      </div>
    </>
  );
};

const GlobeLanding: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <HeroSection>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <FlipWordsDemo />
          </h1>
      </HeroSection>
    </motion.div>
  );
};

export default GlobeLanding;
