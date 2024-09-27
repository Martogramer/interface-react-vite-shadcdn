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

export default CareerCard;