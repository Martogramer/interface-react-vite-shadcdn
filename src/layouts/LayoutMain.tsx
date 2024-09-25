import ShadAutoNav from "@/components/navs/user/ShadAutoNav";
import Footer from "@/components/footers/Footer";
import { Axis3DIcon, LucideRedoDot, TableRowsSplitIcon } from "lucide-react";

import React from "react";
interface Props {
  children: React.ReactNode;
}
const navItems = [
  {
    label: "Inicio",
    href: "/telescopiens",
  },
  {
    label: "Servicios",
    href: "/servicios",
    subItems: [
      { label: "Diseño Web", href: "/servicios/webdesign" },
      { label: "Seo Posicionamiento", href: "/servicios/seo" },
      { label: "Ads & Publicidad", href: "/servicios/ads" },
      { label: "Estrategias de Mkt", href: "/servicios/mkt" },
    ],
  },
  {
    label: "Colaboradores",
    href: "/colaboradores",
    subItems: [
      { label: "Custom Components 2024", href: "" },
      { label: "API's & Microservicios", href: "" },
      { label: "Guía de Colaboradores", href: "" },
    ],
  },
  {
    label: "Foro",
    href: "/foro",
  },
  {
    label: "Docs",
    href: "/colaboradores/docs",
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
const handleLogout = () => {
  console.log("Cerrando sesión...");
};
const LayoutMain: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="bg-gray text-primary-foreground ">
        <ShadAutoNav
          navItems={navItems}
          basePath={""}
          avatarSrc="https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1727286859/OIG_pt1q5s.jpg?_s=public-apps"
          onLogout={handleLogout}
        />
        <div>
          <>{children}</>
        </div>
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
    </>
  );
};

export default LayoutMain;
