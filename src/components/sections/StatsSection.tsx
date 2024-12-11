import React from "react";
import CardHoverEffect from "../_Customs2024/cards/CardHoverEffect";
import CustomTitle from "../_Customs2024/text/CustomTitle";
import CustomParagraph from "../_Customs2024/text/CustomParagraph";

interface Career {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface CareerPathProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  careers: Career[];
}

const CareerPath: React.FC<CareerPathProps> = ({
  title,
  description,
  careers,
}) => {
  return (
    <section className="bg-gray-900 py-8 sm:py-12 lg:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center items-center my-9">
            <CustomTitle>{title}</CustomTitle>
            <CustomParagraph className="mt-4 text-gray-400">{description}</CustomParagraph>
          </div>

          <div className="grid grid-cols-1 items-center gap-6 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
            {careers.map((career, index) => (
              <div className="gap-20">
                  <CardHoverEffect
                    key={index}
                    title={career.title}
                    description={career.description}
                    animationSpeed={1.5}
                    colors={[
                      [49, 130, 246],
                      [139, 92, 246],
                    ]}
                    dotSize={5}
                    showGradient={true}
                  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPath;
