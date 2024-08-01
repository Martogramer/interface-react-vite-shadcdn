import React, { useState, useEffect, useRef } from "react";
import StoreSidebar from "./StoreSidebarUser";
import MobileMenu from "./MobileMenuUser";
import { Button } from "@/components/ui/button";
import {
  Code2,
  AtSign,
  LineChart,
  Package,
  ShoppingCart,
  Triangle,
  Users,
  DollarSign,
  Signpost,
  Computer,
  LogIn,
  PackageOpen
} from "lucide-react";
interface SidebarItem {
  to: string;
  icon: React.ReactNode;
  label: string;
  ariaLabel: string;
  tooltip: string;
}
const sidebarData: SidebarItem[] = [
  {
    to: "",
    icon: <Computer className="h-5 w-5" />,
    label: "Homepage",
    ariaLabel: "Homepage",
    tooltip: "Homepage",
  },
  {
    to: "perfil",
    icon: <Users className="h-5 w-5" />,
    label: "Perfil",
    ariaLabel: "Perfil",
    tooltip: "Perfil",
  },
  {
    to: "sales",
    icon: <ShoppingCart className="h-5 w-5" />,
    label: "Ventas",
    ariaLabel: "Ventas",
    tooltip: "Ventas",
  },
  {
    to: "clientes",
    icon: <Package className="h-5 w-5" />,
    label: "Clientes",
    ariaLabel: "Clientes",
    tooltip: "Clientes",
  },
  {
    to: "payments",
    icon: <DollarSign className="h-5 w-5" />,
    label: "Payments",
    ariaLabel: "Payments",
    tooltip: "Payments",
  },
  {
    to: "productos",
    icon: <PackageOpen className="h-5 w-5" />,
    label: "Productos",
    ariaLabel: "Productos",
    tooltip: "Productos",
  },
  {
    to: "foro",
    icon: <Signpost className="h-5 w-5" />,
    label: "Foro",
    ariaLabel: "Foro",
    tooltip: "Foro",
  },
  {
    to: "componentes",
    icon: <Code2 className="h-5 w-5" />,
    label: "Componentes",
    ariaLabel: "Componentes",
    tooltip: "Componentes",
  },
  {
    to: "nosotros",
    icon: <LineChart className="h-5 w-5" />,
    label: "Nosotros",
    ariaLabel: "Nosotros",
    tooltip: "Nosotros",
  },
  {
    to: "login",
    icon: <LogIn className="h-5 w-5 transition-all group-hover:scale-110" />,
    label: "Login",
    ariaLabel: "Login",
    tooltip: "Login",
  },
  {
    to: "signup",
    icon: <AtSign className="h-5 w-5" />,
    label: "Signup",
    ariaLabel: "Signup",
    tooltip: "Signup",
  },
];

// Props interface for the SidebarMobileMenu component
interface SubItem {
  label: string;
  href: string;
}

interface Item {
  label: string;
  href?: string;
  type?: "link" | "button";
  subItems?: SubItem[];
  onClick?: () => void;
}
const user = {
  name: "Cosmos Store",
  email: "store@cosmos.com",
  avatar:
    "https://www.creativefabrica.com/wp-content/uploads/2023/02/11/Galaxy-Astronaut-Monkey-Painting-60761789-1.png",
};
const menuItems: Item[] = [
  {
    label: "Inicio",
    href: "",
  },
  {
    label: "Herramientas",
    subItems: [
      { label: "Perfil de Usuario", href: "perfil" },
      { label: "Panel de Ventas", href: "sales" },
      { label: "Panel de Clientes", href: "clientes" },
      { label: "Gestión de Pagos", href: "payments" },
      { label: "CRUD de Productos", href: "productos" },
      { label: "Sección Foro", href: "payments" },
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
// SidebarMobileMenu component
const SidebarMobileMenu: React.FC = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div>
      {/* Button to toggle mobile menu visibility */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="my-3 ml-6 z-50 text-gray-600 focus:outline-none  fixed focus:ring-2 focus:ring-inset focus:ring-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar for large screens */}
      <div className="hidden md:flex flex-col justify-between border-e bg-white">
        <StoreSidebar items={sidebarData} user={user} />
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg"
            ref={menuRef}
          >
            <div className="px-6 flex items-center justify-between h-20 p-4 border-b border-gray-700">
              <Button variant="outline" size="icon" aria-label="Home">
                <Triangle className="size-5 fill-foreground" />
              </Button>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <MobileMenu items={menuItems} user={user} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarMobileMenu;
