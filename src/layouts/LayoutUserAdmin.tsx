import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveContainer from "@/components/_Customs2024/containers/ResponsiveContainer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const LayoutUserAdmin: React.FC = () => {
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    return [
      { name: "", path: "/" },
      ...pathnames.map((name, index) => ({
        name,
        path: `/${pathnames.slice(0, index + 1).join("/")}`,
      })),
    ];
  };
  const BreadcrumbLinkWrapper: React.FC<{
    to: string;
    children: React.ReactNode;
  }> = ({ to, children }) => (
    <BreadcrumbLink asChild>
      <Link to={to}>{children}</Link>
    </BreadcrumbLink>
  );

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div>
      <div className="relative md:ml-12 bg-black-600 hover:backdrop-blur-0 border-zinc-100">
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
      </div>
      <ResponsiveContainer>
        <Outlet />
      </ResponsiveContainer>
    </div>
  );
};

export default LayoutUserAdmin;
