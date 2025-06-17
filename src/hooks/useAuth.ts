import { useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectIsAdmin,
  selectIsAuthenticated,
} from '../features/auth/authSelectors';

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);
  const isAdmin = useSelector(selectIsAdmin);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return { user, isAdmin, isAuthenticated };
};
