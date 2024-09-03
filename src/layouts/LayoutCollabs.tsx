import React from "react";
import { Outlet } from "react-router-dom";
import ShadAutoNav from "@/components/navs/user/ShadAutoNav";
import { NavbarDemo } from "@/components/_Customs2024/navs/NavAce";
import Footer from "@/components/footers/Footer";
import { Axis3DIcon, LucideRedoDot, TableRowsSplitIcon } from "lucide-react";
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
const socialLinks = [
  {
    href: "#",
    label: "Linkedin",
    icon: <TableRowsSplitIcon className="h-6 w-6" />,
  },
  { href: "#", label: "GitHub", icon: <Axis3DIcon className="h-6 w-6" /> },
  { href: "#", label: "Reddit", icon: <LucideRedoDot className="h-6 w-6" /> },
];
const services = [
  "",
  "Co-workers Reviews",
  "Scrum Master - Metodologías Ágiles",
  "APIs RESTful & Microservicios",
  "SEO Optimisation",
];
const companyInfo = ["About", "Meet the Team", "Accounts Review"];
const contactHours = ["Monday to Friday: 10am - 5pm", "Weekend: 10am - 3pm"];

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
        <Footer 
        contactNumber="CONTACT"
        contactHours={contactHours}
        socialLinks={socialLinks}
        services={services}
        companyInfo={companyInfo}
        year={2024}
        companyName="Company Name"
      />
      </div>
    </div>
  );
};

export default LayoutCollabs;
