import { BackgroundLines } from "@/components/ui/background-lines";
import { useTheme } from "@/context/ThemeContext";
import clsx from "clsx";
import React from "react";
import { Outlet } from "react-router-dom";

const LayoutServices: React.FC = () => {
  const { themeClasses } = useTheme();
  return (
    <>
      <div>
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className={clsx(themeClasses.text,"bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight")}>
            🚀 ¿Listo para transformar tu negocio?
          </h2>
          <p className="max-w-xl mx-auto text-md md:text-lg text-neutral-600 dark:text-neutral-400 text-center">
            El mundo digital no se detiene, y tu negocio tampoco debería.
          </p>
        </BackgroundLines>
        <Outlet />
      </div>
    </>
  );
};

export default LayoutServices;
/* className={clsx(
  "text-sm font-medium transition-colors hover:text-primary",
  themeClasses.text
)} */