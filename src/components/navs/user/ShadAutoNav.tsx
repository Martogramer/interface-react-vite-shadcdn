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
import { PanelLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MenuItem, HoveredLink, Menu } from "../../ui/navbar-menu";
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

const ShadAutoNav: React.FC<HeaderProps> = ({
  navItems,
  basePath,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [active, setActive] = useState<string | null>(null);
  const location = useLocation();
  const { themeClasses, toggleTheme } = useTheme();

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    const breadcrumbs = [{ name: basePath, path: "/" }];

    pathnames.forEach((name, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;
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
        <Menu setActive={setActive} key={item.label}>
          <Link
            key={item.label}
            to={item.href || "#"}
            className={clsx(
              "text-sm font-medium transition-colors hover:text-primary",
              themeClasses.text
            )}
          >
            <div
              className={clsx(
                themeClasses.text,
                themeClasses.border,
                themeClasses.shadow
              )}
            >
              <MenuItem
                key={item.label}
                setActive={setActive}
                active={active}
                item={item.label}
              >
                <div
                  className={
                    "flex flex-col text-sm font-medium space-y-2 hover:te"
                  }
                >
                  {item.subItems.map((subItem) => (
                    <HoveredLink key={subItem.label} to={subItem.href}  className={clsx(
                      "flex flex-col text-sm font-medium hover:te",
                      themeClasses.text,
                      themeClasses.border,
                      themeClasses.background
                    )}>
                      {subItem.label}
                    </HoveredLink>
                  ))}
                </div>
              </MenuItem>
            </div>
          </Link>
        </Menu>
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
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="destructive" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className={clsx("w-[300px] sm:w-[400px]", themeClasses.background)}
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => renderNavItem(item))}
          </nav>
        </SheetContent>
      </Sheet>

      <Link
        to={"https://github.com/Martogramer"}
        className="flex items-center space-x-2"
      >
        <img src="/192x192.png" className="h-7 w-7" alt="" />
        <span className={clsx("font-bold", themeClasses.text)}>
          @martogramer
        </span>
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
          className={clsx(
            "w-full md:w-[200px] lg:w-[300px] pl-8",
            themeClasses.border
          )}
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>
      <div className="flex-1" />
      <ThemedButton onClick={toggleTheme} variant="secondary">
        *
      </ThemedButton>
      <div className="m-2">
        <ShimmerButton text="night" animationDuration="1.5s" className="m-2" />
      </div>
    </header>
  );
};

export default ShadAutoNav;
