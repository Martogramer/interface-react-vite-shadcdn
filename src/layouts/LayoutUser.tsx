import SidebarShad from "@/components/navs/SidebarShad";
import SidebarShadVariant from "@/components/navs/SidebarShadVariant";
import { AuthContext } from "@/context/AuthContext";
import { LucidePersonStanding } from "lucide-react";
import React, { useContext, useEffect } from "react";
import { Outlet, Route, RouteProps } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { currentUser } = useContext<any>(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/", { replace: true });
    }
  }, [currentUser, navigate]);
  if (currentUser === null) {
    return <LucidePersonStanding />;
  }
  return <div {...rest}>{children}</div>;
};

const LayoutUser: React.FC = () => {
  return (
    <>
      <SidebarShad />
      <div className="pt-20">
          <Outlet />
      </div>
    </>
  );
};

export default LayoutUser;
