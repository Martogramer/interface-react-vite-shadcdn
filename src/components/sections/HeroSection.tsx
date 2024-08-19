import React from "react";

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

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  strong,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row">
      <div className="absolute inset-0 bg-gray-900/75 bg-gradient-to-r from-gray-900/95 to-gray-900/25"></div>
      <div className="relative mx-auto max-w-screen-xxl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            {title}
            <strong className="block font-extrabold text-rose-500">
              {" "}
              {strong}{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href={primaryAction.href}
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              {primaryAction.text}
            </a>
            <a
              href={secondaryAction.href}
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              {secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
