import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronDown, PanelLeft, Search, X } from "lucide-react"; // Añadido icono X para cerrar
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShimmerButton } from "@/components/_Customs2024/buttons/ShimmerButton";
import ThemedButton from "@/components/_Customs2024/buttons/ThemedButton";
import { useTheme } from "@/context/ThemeContext";

interface NavSubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  subItems?: NavSubItem[];
}

interface HeaderProps {
  navItems: NavItem[];
  basePath: string;
  textButton: string;
  avatarSrc: string;
  onLogout: () => void;
}

const BreadcrumbLinkWrapper = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <BreadcrumbLink asChild>
    <Link to={to}>{children}</Link>
  </BreadcrumbLink>
);

const CustomNav: React.FC<HeaderProps> = ({ navItems, basePath, textButton }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const { themeClasses, toggleTheme } = useTheme();

  // Función mejorada para generar breadcrumbs
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    return [
      { name: basePath, path: "/" },
      ...pathnames.map((name, index) => ({
        name,
        path: `/${pathnames.slice(0, index + 1).join("/")}`,
      })),
    ];
  };

  const breadcrumbs = generateBreadcrumbs();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implementar lógica de búsqueda aquí
    console.log("Búsqueda:", searchQuery);
  };

  const toggleExpand = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
    );
  };

  // Componente de renderizado de ítem de navegación mejorado
  const renderNavItem = (item: NavItem, isMobile: boolean = false) => {
    if (item.subItems) {
      return (
        <div key={item.label} className="relative">
          <button
            onClick={() => toggleExpand(item.label)}
            className={clsx(
              "flex items-center text-sm font-medium transition-colors hover:text-primary",
              themeClasses.text
            )}
          >
            {item.label}
            <ChevronDown
              className={clsx(
                "ml-1 h-4 w-4",
                expandedItems.includes(item.label) ? "transform rotate-180" : ""
              )}
            />
          </button>
          {(isMobile || expandedItems.includes(item.label)) && (
            <div
              className={clsx(
                "mt-2 space-y-2",
                isMobile
                  ? ""
                  : "absolute left-0 bg-white dark:bg-gray-800 p-2 rounded shadow-md"
              )}
            >
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.label}
                  to={subItem.href}
                  className={clsx(
                    "block text-sm font-medium hover:text-primary",
                    themeClasses.text
                  )}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }
    return (
      <Link
        key={item.label}
        to={item.href || "#"}
        className={clsx(
          "text-sm font-medium transition-colors hover:text-primary",
          themeClasses.text
        )}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header
      className={clsx(
        "sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:px-6",
        themeClasses.background,
        themeClasses.border
      )}
    >
      {/* Menú móvil */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost" className="md:hidden">
            <PanelLeft className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className={clsx("w-[300px] sm:w-[400px]", themeClasses.background)}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className={clsx("text-lg font-bold", themeClasses.text)}>
              {textButton}
            </h2>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => renderNavItem(item))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Logo y nombre */}
      <Link
        to={"https://github.com/Martogramer"}
        className="flex items-center space-x-2"
      >
        <img src="/192x192.png" className="h-7 w-7" alt="Logo" />
        <span className={clsx("font-bold hidden sm:inline", themeClasses.text)}>
          @martogramer
        </span>
      </Link>

      {/* Breadcrumbs */}
      <div className="hidden sm:block flex-1 overflow-x-auto">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.path}>
                {index < breadcrumbs.length - 1 ? (
                  <BreadcrumbItem>
                    <BreadcrumbLinkWrapper to={crumb.path}>
                      {crumb.name}
                    </BreadcrumbLinkWrapper>
                  </BreadcrumbItem>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                )}
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Navegación para pantallas medianas y grandes */}
      <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
        {navItems.map((item) => renderNavItem(item))}
      </nav>

      {/* Barra de búsqueda */}
      <form
        onSubmit={handleSearchSubmit}
        className="relative hidden md:block flex-1 max-w-md"
      >
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar..."
          className={clsx("w-full pl-8", themeClasses.border)}
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>

      {/* Botones de tema */}
      <div className="flex items-center space-x-2">
        <ThemedButton onClick={toggleTheme} variant="secondary">
          *
        </ThemedButton>
        <ShimmerButton text="night" animationDuration="1.5s" />
      </div>
    </header>
  );
};

export default CustomNav;
