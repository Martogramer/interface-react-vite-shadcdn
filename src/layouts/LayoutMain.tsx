import Footer from "@/components/footers/Footer";
import { Axis3DIcon, LucideRedoDot, TableRowsSplitIcon } from "lucide-react";
import React from "react";
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
  { name: "Diseño Web", route: "/servicios/webdesign" },
  { name: "Seo & Posicionamiento", route: "/servicios/seo" },
  { name: "Ads & Publicidad", route: "/servicios/ads" },
  { name: "Estrategias de Mkt", route: "/servicios/mkt" },
];
const companyInfo = ["About", "Meet the Team", "Accounts Review"];
const contactHours = ["Monday to Friday: 10am - 5pm", "Weekend: 10am - 3pm"];

const LayoutMain: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div>
        <CustomNav textButton={'Contacto'} navItems={navItems} basePath={""} />
        <div>
          <>{children}</>
        </div>
        <Footer
          contactNumber="@martogramer"
          contactHours={contactHours}
          socialLinks={socialLinks}
          services={services}
          companyInfo={companyInfo}
          year={2025}
          companyName="telescopiens"
        />
      </div>
    </>
  );
};

/* <div className=" ml-20 mt-4 fixed z-50 blur-sm">
          <span className="mr-2 whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
            Live
          </span>
          <span className="text-xs hidden min-[680px]:inline-block font-semibold cursor-default">
            <span className="mx-1 text-purple-700 hover:text-navy-700">/</span>
            <label className="capitalize text-navy-100 hover:underline">
              {location.pathname.split("/")[1]}
              {location.pathname.split("/").length > 2 &&
                ` / ` + location.pathname.split("/")[2]}
              {location.pathname.split("/").length > 3 &&
                ` / ` + location.pathname.split("/")[3]}
            </label>
          </span>
        </div>

      <div className=" ml-20 mt-4 fixed z-50">
        <span className="mr-2 whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
          Live
        </span>
        <span className="text-xs hidden min-[680px]:inline-block font-semibold cursor-default">
          <span className="mx-1 text-navy-700 hover:text-navy-700">/</span>
          <label className="capitalize text-navy-700 hover:underline">
            {location.pathname.split("/")[1]}
            {location.pathname.split("/").length > 2 &&
              ` / ` + location.pathname.split("/")[2]}
            {location.pathname.split("/").length > 3 &&
              ` / ` + location.pathname.split("/")[3]}
          </label>
        </span>
      </div> */

export default LayoutMain;