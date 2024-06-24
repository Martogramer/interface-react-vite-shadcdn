import React, { useEffect } from "react";
import { fetchUsers } from "@/services/handlers/users/usersAction";
import { Outlet } from "react-router-dom";
import SidebarMobileMenu from "@/components/navs/user/SidebarMobileMenuUser";
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
    </>
  );
};

export default LayoutUser;
