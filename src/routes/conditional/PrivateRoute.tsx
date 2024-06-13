import NotPass from "@/components/errorPage/NotPass";
import { AuthContext } from "@/context/AuthContext";
import useAuthStore from "@/services/authState";
import { LucidePersonStanding } from "lucide-react";
import React, { useContext, useEffect } from "react";
import { RouteProps } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
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

export const Private: React.FC<RouteProps>  = ({children}) => {
  const { isAuthenticated } = useAuthStore();
   if (!isAuthenticated) {
    return <NotPass/>;
  }
  return (
    <>
    {children}
    </>
  )
}