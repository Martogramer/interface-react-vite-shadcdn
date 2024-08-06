import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Package2, PanelLeft, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
  avatarSrc: string;
  onLogout: () => void;
}

const BreadcrumbLinkWrapper = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <BreadcrumbLink asChild>
    <Link to={to}>{children}</Link>
  </BreadcrumbLink>
);

const ShadAutoNav: React.FC<HeaderProps> = ({
  navItems,
  basePath,
  avatarSrc,
  onLogout,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    const breadcrumbs = [{ name: basePath, path: '/' }];

    pathnames.forEach((name, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      breadcrumbs.push({ name, path });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Búsqueda:", searchQuery);
  };

  const renderNavItem = (item: NavItem) => {
    if (item.subItems) {
      return (
        <DropdownMenu key={item.label}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center">
              {item.label}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {item.subItems.map((subItem) => (
              <DropdownMenuItem key={subItem.label}>
                <Link to={subItem.href} className="w-full">
                  {subItem.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    return (
      <Link
        key={item.label}
        to={item.href || "#"}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => renderNavItem(item))}
          </nav>
        </SheetContent>
      </Sheet>

      <Link to="/" className="flex items-center space-x-2">
        <Package2 className="h-6 w-6" />
        <span className="font-bold">Tu Logo</span>
      </Link>

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
      <div className="flex-1" />
      
      <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
        {navItems.map((item) => renderNavItem(item))}
      </nav>
                <div className="flex-1" />

      <form onSubmit={handleSearchSubmit} className="relative hidden md:block">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar..."
          className="w-full md:w-[200px] lg:w-[300px] pl-8"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <img
              src={avatarSrc}
              alt="Avatar"
              className="h-8 w-8 rounded-full object-cover"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Perfil</DropdownMenuItem>
          <DropdownMenuItem>Configuración</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onLogout}>Cerrar sesión</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default ShadAutoNav;
