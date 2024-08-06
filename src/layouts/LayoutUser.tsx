import React, { useEffect, useState } from "react";
import { fetchUsers } from "@/services/handlers/users/usersAction";
import { Outlet, useLocation } from "react-router-dom";
import SidebarMobileMenu from "@/components/navs/user/SidebarMobileMenuUser";
import Footer from "@/components/footers/Footer";
import { Axis3DIcon, FileBadge, Inspect, LucideRedoDot, TableRowsSplitIcon } from "lucide-react";
import LoadingScreen from "@/components/_Customs2024/loading/LoadingScreen";

/* ---
  --- routes: usuarios/['', 'perfil', 'ventas', 'clientes', 'payments', 'productos', 'login', 'signup', 'foro', 'nosotros', '_PRUEBAS']
 --- */

const LayoutUser: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location]);

  const socialLinks = [
    { href: "#", label: "Linkedin", icon: <TableRowsSplitIcon className="h-6 w-6" /> },
    { href: "#", label: "GitHub", icon: <Axis3DIcon className="h-6 w-6" /> },
    { href: "#", label: "Reddit", icon: <LucideRedoDot className="h-6 w-6" /> },
  ];

  const services = ["1on1 Coaching", "Company Review", "Accounts Review", "HR Consulting", "SEO Optimisation"];
  const companyInfo = ["About", "Meet the Team", "Accounts Review"];
  const contactHours = ["Monday to Friday: 10am - 5pm", "Weekend: 10am - 3pm"];

  return (
    <>
    {isLoading && <LoadingScreen />}
      <SidebarMobileMenu />
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Outlet />
      </main>
      <Footer
        contactNumber="CONTACT"
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
