import React from 'react'
import { HeroParallaxDemo } from "@/components/_Customs2024/Parallax";
import { Outlet } from "react-router-dom";
import { VortexDemo } from '@/components/_Customs2024/backgrounds/VortexDemo';

const LayoutServices:React.FC = () => {
  return (
    <div>
      <VortexDemo />
    <HeroParallaxDemo />
      <Outlet />
    </div>
  )
}

export default LayoutServices
