import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface HoveredLinkProps {
  href: string;
  children: React.ReactNode;
}

export const HoveredLink: React.FC<HoveredLinkProps> = ({ href, children }) => {
  return (
    <Link to={href} className={cn("hovered-link")}>
      {children}
    </Link>
  );
};
