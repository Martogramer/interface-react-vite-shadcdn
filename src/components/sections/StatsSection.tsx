"use client";

import React from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

interface Career {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
}

interface CareerPathProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  careers: Career[];
}

const CareerCard: React.FC<Career> = ({ title, description }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseMove = React.useCallback(
    ({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    },
    [mouseX, mouseY]
  );

  return (
    <div
      className="group/spotlight p-6 rounded-md relative border border-neutral-800 bg-black dark:border-neutral-800"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: "#262626",
          maskImage: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3}
          />
        )}
      </motion.div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-gray-300">{description}</p>
    </div>
  );
};

const CareerPath: React.FC<CareerPathProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
  careers,
}) => {
  return (
    <section className="bg-gray-900 py-12 sm:py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-gray-400">{description}</p>
            <a
              href={ctaLink}
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              {ctaText}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {careers.map((career, index) => (
              <CareerCard key={index} {...career} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPath;