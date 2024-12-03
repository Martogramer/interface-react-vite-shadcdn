import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Search, X, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/context/ThemeContext";
import ThemedShimmerButton from "@/components/_Customs2024/buttons/ThemedButton";

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
}

const BreadcrumbLinkWrapper: React.FC<{
  to: string;
  children: React.ReactNode;
}> = ({ to, children }) => (
  <BreadcrumbLink asChild>
    <Link to={to}>{children}</Link>
  </BreadcrumbLink>
);

const ShadAutoNav: React.FC<HeaderProps> = ({
  navItems,
  basePath,
  textButton,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();
  const { themeClasses, toggleTheme } = useTheme();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cerrar todos los desplegables cuando se navega a una nueva página
    setExpandedItems([]);

    // Guardar el estado del nav en localStorage
    localStorage.setItem(
      "navState",
      JSON.stringify({
        isOpen,
        expandedItems,
        searchQuery,
      })
    );
  }, [location.pathname]);

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

  useEffect(() => {
    // Recuperar el estado del nav de localStorage al cargar la página
    const savedState = localStorage.getItem("navState");
    if (savedState) {
      const { isOpen, expandedItems, searchQuery } = JSON.parse(savedState);
      setIsOpen(isOpen);
      setExpandedItems(expandedItems);
      setSearchQuery(searchQuery);
    }
    // Agregar event listener para cerrar desplegables al hacer clic fuera
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setExpandedItems([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const breadcrumbs = generateBreadcrumbs();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Búsqueda:", searchQuery);
    setIsOpen(false);
  };

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [label]
    );
  };
  const navigate =()=> {
    window.location.href = `/contacto`;
  }

  const renderNavItem = (item: NavItem, isMobile: boolean = false) => {
    if (item.subItems) {
      return (
        <div
          key={item.label}
          className={clsx("relative", isMobile && "w-full")}
        >
          <button
            onClick={() => toggleExpand(item.label)}
            className={clsx(
              "flex items-center justify-between w-full text-sm font-medium transition-colors hover:text-primary py-2",
              themeClasses.text
            )}
          >
            {item.label}
            <ChevronDown
              className={clsx(
                "ml-1 h-4 w-4 transition-transform duration-200",
                expandedItems.includes(item.label) ? "transform rotate-180" : ""
              )}
            />
          </button>
          <AnimatePresence>
            {expandedItems.includes(item.label) && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={clsx(
                  "mt-2 space-y-2 overflow-hidden",
                  isMobile
                    ? "pl-4 border-l-2"
                    : "absolute left-0 min-w-[200px] p-2 rounded-md shadow-lg",
                  themeClasses.background,
                  themeClasses.border
                )}
              >
                {item.subItems.map((subItem) => (
                  <motion.div
                    key={subItem.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={subItem.href}
                      className={clsx(
                        "block py-2 px-4 text-sm font-medium rounded-md transition-colors",
                        "hover:bg-gray-100 dark:hover:bg-gray-700",
                        themeClasses.text
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }
    return (
      <Link
        key={item.label}
        to={item.href || "#"}
        className={clsx(
          "block py-2 text-sm font-medium transition-colors hover:text-primary",
          themeClasses.text
        )}
        onClick={() => setIsOpen(false)}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header
      ref={navRef}
      className={clsx(
        "sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:px-6",
        themeClasses.background,
        themeClasses.border
      )}
    >
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className={clsx("w-[300px] sm:w-[400px]", themeClasses.background)}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className={clsx("text-lg font-bold", themeClasses.text)}>
                Menú
              </h2>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <form onSubmit={handleSearchSubmit} className="mb-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar..."
                  className={clsx("w-full pl-8", themeClasses.border)}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </form>
            <nav className="flex flex-col space-y-4 flex-grow overflow-y-auto">
              {navItems.map((item) => renderNavItem(item, true))}
            </nav>
            <div className="mt-auto pt-4">
              <ThemedShimmerButton
                text={textButton}
                variant="primary"
                bgGradient="linear-gradient(110deg,#1e3a8a,45%,#3b82f6,55%,#1e3a8a)"
                animationDuration="3s"
                textColor="text-white"
                onClick={navigate}
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <Link
        to={"https://github.com/Martogramer"}
        className="flex items-center space-x-2"
      >
        <img src="/192x192.png" className="h-7 w-7" alt="Logo" />
        <span className={clsx("font-bold hidden sm:inline", themeClasses.text)}>
          @martogramer
        </span>
      </Link>

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

      <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
        {navItems.map((item) => renderNavItem(item))}
      </nav>

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

      <div className="flex items-center space-x-2">
        <ThemedShimmerButton
          text={textButton}
          variant="primary"
          bgGradient="linear-gradient(110deg,#1e3a8a,45%,#3b82f6,55%,#1e3a8a)"
          animationDuration="3s"
          textColor="text-white"
          onClick={navigate}
        />
      </div>
    </header>
  );
};

export default ShadAutoNav;
