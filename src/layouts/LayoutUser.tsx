import React, { useEffect } from "react";
import { fetchUsers } from "@/services/handlers/users/usersAction";
import { Outlet } from "react-router-dom";
import SidebarMobileMenu from "@/components/navs/user/SidebarMobileMenuUser";
import PromoSection from "@/components/sections/PromoSectionAlternative";

/* ---
  --- routes: usuarios/['', 'perfil', 'ventas', 'clientes', 'payments', 'productos', 'login', 'signup', 'foro', 'nosotros', '_PRUEBAS']
 --- */

const LayoutUser: React.FC = () => {
  useEffect(() => {
    fetchUsers();
  }, []);

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
    </>
  );
};

export default LayoutUser;
