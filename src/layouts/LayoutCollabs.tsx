import React from "react";
import { Outlet } from "react-router-dom";
import ShadAutoNav from "@/components/navs/user/ShadAutoNav";
import { NavbarDemo } from "@/components/_Customs2024/navs/NavAce";
const navItems = [
  {
    label: "Inicio",
    href: "/collabs",
  },
  {
    label: "Servicios",
    subItems: [
      { label: "Diseño Web", href: "" },
      { label: "Seo Posicionamiento", href: "" },
      { label: "Ads & Publicidad", href: "" },
      { label: "Estrategias de Mkt", href: "" },
    ],
  },
  {
    label: "Colaboradores",
    subItems: [
      { label: "Custom Components 2024", href: "" },
      { label: "API's & Microservicios", href: "" },
      { label: "Guía de Colaboradores", href: "" },
    ],
  },
  {
    label: "Foro",
    href: "foro",
  },
  {
    label: "Docs",
    href: "documentation",
  },
];
const LayoutCollabs: React.FC = () => {
  const handleLogout = () => {
    console.log("Cerrando sesión...");
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-grow">
       
        <ShadAutoNav
          navItems={navItems}
          basePath={"home"}
          avatarSrc="https://example.com/avatar.jpg"
          onLogout={handleLogout}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutCollabs;
