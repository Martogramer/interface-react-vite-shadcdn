import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bot,
  Code2,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Triangle,
  Users2,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Menu  from "../Menu";
import { Button } from "../../ui/button";
const sidebarData = [
  {
    to: "",
    icon: <Home className="h-5 w-5" />,
    label: "Homepage",
    ariaLabel: "Homepage",
    tooltip: "Homepage",
  },
  {
    to: "perfil",
    icon: <Users2 className="h-5 w-5" />,
    label: "Perfil",
    ariaLabel: "Perfil",
    tooltip: "Perfil",
  },
  {
    to: "ventas",
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
    icon: <Bot className="h-5 w-5" />,
    label: "Payments",
    ariaLabel: "Payments",
    tooltip: "Payments",
  },
  {
    to: "productos",
    icon: <Code2 className="h-5 w-5" />,
    label: "Productos",
    ariaLabel: "Productos",
    tooltip: "Productos",
  },
  {
    to: "login",
    icon: <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />,
    label: "Login",
    ariaLabel: "Login",
    tooltip: "Login",
  },
  {
    to: "signup",
    icon: <LineChart className="h-5 w-5" />,
    label: "Signup",
    ariaLabel: "Signup",
    tooltip: "Signup",
  },
  {
    to: "foro",
    icon: <LineChart className="h-5 w-5" />,
    label: "Foro",
    ariaLabel: "Foro",
    tooltip: "Foro",
  },
  {
    to: "nosotros",
    icon: <LineChart className="h-5 w-5" />,
    label: "Nosotros",
    ariaLabel: "Nosotros",
    tooltip: "Nosotros",
  },
];

const StoreSidebar: React.FC = () => {
  return (
    <div>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-slate-50 sm:flex">
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home">
            <Triangle className="size-5 fill-foreground" />
          </Button>
        </div>

        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>Store</AvatarFallback>
          </Avatar>

          {sidebarData.map((item, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <NavLink
                    to={item.to}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    aria-label={item.ariaLabel}
                  >
                    {item.icon}
                  </NavLink>
                </TooltipTrigger>
                <TooltipContent side="right">{item.tooltip}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Menu />
        </nav>
      </aside>
    </div>
  );
};

export default StoreSidebar;