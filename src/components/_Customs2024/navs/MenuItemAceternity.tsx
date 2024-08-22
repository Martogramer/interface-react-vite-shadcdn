import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface MenuItemProps {
  item: string;
  children: ReactNode;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  active: string | null;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item, children, setActive, active }) => {
  const isActive = active === item;

  return (
    <div className={cn("menu-item", { "menu-item-active": isActive })} onClick={() => setActive(isActive ? null : item)}>
      <div className="menu-item-header">{item}</div>
      {isActive && <div className="menu-item-content">{children}</div>}
    </div>
  );
};
