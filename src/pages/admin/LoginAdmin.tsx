import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const envEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const envPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (email === envEmail && password === envPassword) {
      const user = {
        name: import.meta.env.VITE_ADMIN_NAME,
        email,
        role: import.meta.env.VITE_ADMIN_ROLE,
        token: import.meta.env.VITE_ADMIN_TOKEN,
      };
      dispatch(login(user));
      navigate('/admin');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
