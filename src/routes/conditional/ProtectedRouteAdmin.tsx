import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store/Store";

interface ProtectedRouteProps {
	children: ReactNode;
  }
  
  const ProtectedRouteAdmin: React.FC<ProtectedRouteProps> = ({ children }) => {
	const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated);
  
	if (isAuthenticated) {
	  return <>{children}</>;
	} else {
	  return <Navigate to="/" />;
	}
  };
  
  export default ProtectedRouteAdmin;