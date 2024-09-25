import React from "react";
import { MenuItem, MenuItemProps } from "./MenuItemAceternity";

export interface MenuProps {
  items: Omit<MenuItemProps, "setActive" | "active">[];
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  active: string | null;
}

export const Menu: React.FC<MenuProps> = ({ items, setActive, active }) => {
  return (
    <div className="menu">
      {items.map((item) => (
        <MenuItem
          key={item.item}
          setActive={setActive}
          active={active}
          item={item.item}
        >
          {item.children}
        </MenuItem>
      ))}
    </div>
  );
};
