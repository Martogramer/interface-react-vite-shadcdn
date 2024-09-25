import React from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";

interface HeroSectionProps {
  title: string;
  strong: string;
  subtitle: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction: {
    text: string;
    href: string;
  };
}

const SimpleLandingPage: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  strong,
}) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero min-h-screen bg-base-200"
      >
        <HeroSection
          title={title}
          strong={strong}
          subtitle={subtitle}
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
      </motion.div>
    </div>
  );
};

export default SimpleLandingPage;
