import React, { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  padding?: string;
  maxWidth?: string;
}

const ResponsiveContainer: React.FC<ContainerProps> = ({
  children,
  className,
  padding = "p-4",
  maxWidth = "max-w-4xl",
}) => {
  return (
    <div
      className={clsx(
        "container mx-auto border-none",
        padding,
        maxWidth,
        className
      )}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;
