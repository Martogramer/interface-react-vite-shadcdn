import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Triangle,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Menu  from "../Menu";
import { Button } from "../../ui/button";

export interface SidebarItem {
  to: string;
  icon: React.ReactNode;
  label: string;
  ariaLabel: string;
  tooltip: string;
}

export interface SidebarProps {
  items: SidebarItem[];
  user: {
    name: string,
    email: string,
    avatar: string,
  };
}

const StoreSidebar: React.FC<SidebarProps> = ({ items, user }) => {
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
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.name}</AvatarFallback>
          </Avatar>

          {items.map((item, index) => (
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