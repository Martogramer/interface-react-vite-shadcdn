import Footer from "@/components/footers/Footer";
import { Axis3DIcon, LucideRedoDot, TableRowsSplitIcon } from "lucide-react";
import React from "react";
import clsx from "clsx";
import { useTheme } from "@/context/ThemeContext";
import CustomNav from "@/components/navs/CustomNav";

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
      { label: "Custom Components 2024", href: "/colaboradores/componentes" },
      { label: "Guía de Colaboradores", href: "/colaboradores/guide" },
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

const LayoutMain: React.FC<Props> = ({ children }) => {
  const { themeClasses, currentTheme } = useTheme();
  const themeText = currentTheme === "light" ? "Day" : "Night";
  return (
    <>
      <div className={clsx(themeClasses.background, themeClasses.text)}>
        <CustomNav textButton={themeText} navItems={navItems} basePath={""} />
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
          companyName="@telescopiens"
        />
      </div>
    </>
  );
};

export default LayoutMain;
