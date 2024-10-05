import React from "react";
import clsx from "clsx";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const CustomTitle: React.FC<TitleProps> = ({ children, className }) => {

  return (
      <h2
        className={clsx(
          "relative flex-col border-none md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-slate-600 via-white to-slate-600 flex items-center gap-2 md:gap-8",
          className 
        )}
      >
        {children}
      </h2>
  );
};

export default CustomTitle;
