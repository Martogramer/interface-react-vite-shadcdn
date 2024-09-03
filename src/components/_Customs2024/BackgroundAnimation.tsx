import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { PlaceholdersAndVanishInputDemo } from "../inputs/PlaceholdersAndVanishInputDemo";

export const BackgroundGradientAnimationDemo:React.FC=()=> {
  return (
    <BackgroundGradientAnimation>
      
        <PlaceholdersAndVanishInputDemo />
    </BackgroundGradientAnimation>
  );
}
