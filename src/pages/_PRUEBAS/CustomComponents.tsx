import DropdownMenu from "@/components/_Customs2024/dropdown/dropdownSimple/DropdownMenu";
import React from "react";

type ItemType = {
  label: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "link";
};

const menuItems: ItemType[] = [
  { label: "View on Storefront", href: "#" },
  { label: "View Warehouse Info", href: "#" },
  { label: "Duplicate Product", href: "#" },
  { label: "Unpublish Product", href: "#" },
  {
    label: "Delete Product",
    onClick: () => alert("Product Deleted"),
    type: "button",
  },
];
const CustomComponents: React.FC = () => {
  return (
    <>
      <DropdownMenu items={menuItems} />
    </>
  );
};

export default CustomComponents;
