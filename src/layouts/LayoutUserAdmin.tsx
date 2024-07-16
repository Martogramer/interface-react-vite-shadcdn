import React from "react";
import { Outlet } from "react-router-dom";
import PromoSection from "@/components/sections/PromoSectionAlternative";

const LayoutUserAdmin: React.FC = () => {
  return (
    <div>
      <div className="relative md:ml-12 bg-black-600 hover:backdrop-blur-0 border-zinc-100">
      </div>
      <Outlet />
      <PromoSection
      title="Understand User Flow."
      subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!"
      primaryAction={{ text: 'Get Started', href: '#' }}
      secondaryAction={{ text: 'Learn More', href: '#' }}
      />
    </div>
  );
};

export default LayoutUserAdmin;
