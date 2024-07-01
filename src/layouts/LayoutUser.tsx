import React, { useEffect } from "react";
import { fetchUsers } from "@/services/handlers/users/usersAction";
import { Outlet } from "react-router-dom";
import SidebarMobileMenu from "@/components/navs/user/SidebarMobileMenuUser";
import PromoSection from "@/components/sections/PromoSectionAlternative";
import Footer from "@/components/footers/Footer";
import { Axis3DIcon, FileBadge, Inspect, LucideRedoDot, TableRowsSplitIcon } from "lucide-react";

/* ---
  --- routes: usuarios/['', 'perfil', 'ventas', 'clientes', 'payments', 'productos', 'login', 'signup', 'foro', 'nosotros', '_PRUEBAS']
 --- */

const LayoutUser: React.FC = () => {
  useEffect(() => {
    fetchUsers();
  }, []);
  const socialLinks = [
    { href: "#", label: "Facebook", icon: <FileBadge className="h-6 w-6" /> },
    { href: "#", label: "Instagram", icon: <Inspect className="h-6 w-6" /> },
    { href: "#", label: "Twitter", icon: <TableRowsSplitIcon className="h-6 w-6" /> },
    { href: "#", label: "GitHub", icon: <Axis3DIcon className="h-6 w-6" /> },
    { href: "#", label: "Dribbble", icon: <LucideRedoDot className="h-6 w-6" /> },
  ];

  const services = ["1on1 Coaching", "Company Review", "Accounts Review", "HR Consulting", "SEO Optimisation"];
  const companyInfo = ["About", "Meet the Team", "Accounts Review"];
  const contactHours = ["Monday to Friday: 10am - 5pm", "Weekend: 10am - 3pm"];

  return (
    <>
      <SidebarMobileMenu />
      <div className="pt-20">
        <Outlet />
      </div>
      <PromoSection
      title="Understand User Flow."
      subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!"
      primaryAction={{ text: 'Get Started', href: '#' }}
      secondaryAction={{ text: 'Learn More', href: '#' }}
      />
      <Footer
        contactNumber="0123456789"
        contactHours={contactHours}
        socialLinks={socialLinks}
        services={services}
        companyInfo={companyInfo}
        year={2024}
        companyName="Company Name"
      />
    </>
  );
};

export default LayoutUser;
