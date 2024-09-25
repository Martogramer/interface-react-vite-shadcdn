import React, { useEffect } from "react";
import { fetchUsers } from "@/services/handlers/users/usersAction";
import { Outlet } from "react-router-dom";
import Footer from "@/components/footers/Footer";
import { Axis3DIcon, LucideRedoDot, TableRowsSplitIcon } from "lucide-react";
import ShadAutoNav from "@/components/navs/user/ShadAutoNav";
import NotificationBar from "@/components/_Customs2024/alerts/NotificationBar";

/* ---
  --- routes: usuarios/['', 'perfil', 'ventas', 'clientes', 'payments', 'productos', 'login', 'signup', 'foro', 'nosotros', '_PRUEBAS']
 --- */
const LayoutUser: React.FC = () => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const socialLinks = [
    {
      href: "#",
      label: "Linkedin",
      icon: <TableRowsSplitIcon className="h-6 w-6" />,
    },
    { href: "#", label: "GitHub", icon: <Axis3DIcon className="h-6 w-6" /> },
    { href: "#", label: "Reddit", icon: <LucideRedoDot className="h-6 w-6" /> },
  ];
  const navItems = [
    {
      label: "Inicio",
      href: "/usuarios",
    },
    {
      label: "Herramientas",
      subItems: [
        { label: "Perfil de Usuario", href: "perfil" },
        { label: "Panel de Ventas", href: "sales" },
        { label: "Panel de Clientes", href: "clientes" },
        { label: "Gestión de Pagos", href: "payments" },
        { label: "CRUD de Productos", href: "productos" },
        { label: "Sección Foro", href: "foro" },
      ],
    },
    {
      label: "Autenticación",
      subItems: [
        { label: "Registrarse", href: "signup" },
        { label: "Loguearse", href: "login" },
      ],
    },
    {
      label: "Foro",
      href: "foro",
    },
    {
      label: "About",
      href: "nosotros",
    },
    {
      label: "Pruebas",
      href: "_PRUEBAS",
    },
  ];

  const handleLogout = () => {
    // Implementa aquí la lógica de cierre de sesión
    console.log("Cerrando sesión...");
  };
  const services = [
    "",
    "Co-workers Reviews",
    "Scrum Master - Metodologías Ágiles",
    "APIs RESTful & Microservicios",
    "SEO Optimisation",
  ];
  const companyInfo = ["About", "Meet the Team", "Accounts Review"];
  const contactHours = ["Monday to Friday: 10am - 5pm", "Weekend: 10am - 3pm"];

  return (
    <>
      <NotificationBar />
      <ShadAutoNav
        navItems={navItems}
        basePath={"home"}
        avatarSrc="https://example.com/avatar.jpg"
        onLogout={handleLogout}
      />
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
