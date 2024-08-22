import React, { useState } from "react";
import { Menu, MenuProps } from "./MenuAceternity";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
  menuItems: MenuProps["items"];
}

 const Navbar: React.FC<NavbarProps> = ({ className, menuItems }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive} active={active} items={menuItems} />
    </div>
  );
};
export default Navbar