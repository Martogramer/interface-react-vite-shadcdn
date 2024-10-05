import React from "react";
import clsx from "clsx";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const CustomParagraph: React.FC<ParagraphProps> = ({ children, className }) => {

  return (
    <p
      className={clsx(
        "text-lg max-w-5xl mx-auto text-center tracking-tight border-none font-medium",
        className
      )}
    >
      {children}
    </p>
  );
};

export default CustomParagraph;
