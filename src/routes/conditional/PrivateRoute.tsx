import { AuthContext } from "@/context/AuthContext";
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