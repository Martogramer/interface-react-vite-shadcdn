import React from "react";
import { Outlet } from "react-router-dom";
import SidebarMobileMenu from "@/components/navs/store/SidebarMobileMenu";
interface SidebarMobileMenuProps {
  items: {
    label: string;
    href?: string;
    subItems?: { label: string; href: string }[];
    type?: "link" | "button";
    onClick?: () => void;
  }[];
}

const menuItems = [
  {
    label: "General",
    href: "#",
  },
  {
    label: "Teams",
    subItems: [
      { label: "Banned Users", href: "#" },
      { label: "Calendar", href: "#" },
    ],
  },
  {
    label: "Billing",
    href: "#",
  },
  {
    label: "Invoices",
    href: "#",
  },
  {
    label: "Account",
    subItems: [
      { label: "Details", href: "#" },
      { label: "Security", href: "#" },
      {
        label: "Logout",
        type: "button",
        onClick: () => alert("Logging out..."),
      },
    ],
  },
];
const LayoutStore: React.FC = () => {
  return (
    <>
      <SidebarMobileMenu />
      <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
};

export default LayoutStore;
