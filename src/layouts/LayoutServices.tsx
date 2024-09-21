import React from 'react'
import { HeroParallaxDemo } from "@/components/_Customs2024/Parallax";
import { Outlet } from "react-router-dom";

const LayoutServices:React.FC = () => {
  return (
    <div>
    <HeroParallaxDemo />
      <Outlet />
    </div>
  )
}

export default LayoutServices
