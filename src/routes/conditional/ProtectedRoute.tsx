import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.ts';

interface Props {
  children: JSX.Element;
  requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin = false }: Props) => {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) return <Navigate to="/admin/login" />;
  if (requireAdmin && !isAdmin) return <Navigate to="/unauthorized" />;

  return children;
};

export default ProtectedRoute;
