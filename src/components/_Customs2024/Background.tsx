"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { ShimmerButton } from "./buttons/ShimmerButton";

interface BackgroundBeamsDemoProps {
  title: string;
  description: string;
  inputPlaceholder: string;
  height?: string;
  titleColor?: string;
}

export const BackgroundBeamsDemo: React.FC<BackgroundBeamsDemoProps> = ({
  title,
  description,
  inputPlaceholder,
  height = "40rem",
  titleColor = "from-neutral-200 to-neutral-600",
}) => {
  return (
    <div
      className={`h-[${height}] mt-20 w-full mr-0 rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden`}
    >
      <div className="max-w-8xl p-10 z-10">
        <h1
          className={`relative text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b ${titleColor} text-center font-sans font-bold`}
        >
          {title}
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative">
          {description}
        </p>
        <div className="mt-6 flex justify-center">
        <input
          type="text"
          placeholder={inputPlaceholder}
          className="rounded-lg w-full relative mr-1 bg-neutral-950 placeholder:text-neutral-500 inline-flex h-12 items-center justify-center border border-slate-800 px-6 font-medium transition-colors text-slate-400"
        />
          <ShimmerButton
            text="Shimmer"
            onClick={() => console.log("Button clicked")}
            animationDuration="3s"
            bgGradient="linear-gradient(110deg,#001,45%,#2e3641,55%,#001)"
            textColor="text-blue-400"
          />
        </div>
      </div>
      <BackgroundBeams className="absolute inset-0" />
    </div>
  );
};