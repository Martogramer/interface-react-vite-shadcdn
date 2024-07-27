import React from 'react';
import CustomGrid from '../_Customs2024/containers/grid/CustomGrid';
import CustomButton from '../_Customs2024/buttons/CustomButton';

interface HeroSectionProps {
  backgroundUrl: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
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
  backgroundUrl,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  children
}) => {
  return (
    <section
      className={`relative bg-[url(${backgroundUrl})] bg-cover bg-center bg-no-repeat`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/75 to-gray-900/25"></div>

     <div className="relative mx-auto max-w-screen-xl mb px-4 py-32 sm:px-6 lg:h-screen lg:flex lg:items-center lg:justify-center">
        <div className="max-w-xl text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            {title}
            <span className="block font-extrabold text-rose-500"> {subtitle}</span>
          </h1>
          <div className="mt-4">
            {children}
          </div>
           
            <div className="mt-8 text-center">
                <CustomGrid
                  columns={2}
                  content={[
                    <div>
                      <div>
                        <CustomButton
                          text={primaryAction.text}
                          href={primaryAction.href}
                          variant="base"
                        />
                      </div>
                    </div>,
                    <div>
                      <div>
                        <CustomButton
                          text={secondaryAction.text}
                          href={secondaryAction.href}
                          variant="border"
                        />
                      </div>
                    </div>,
                  ]}
                />
              </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
