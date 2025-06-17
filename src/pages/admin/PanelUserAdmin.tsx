import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { RootState } from "../../store/Store";
import { useSelector } from "react-redux";

const users = [
  { id: "u1", name: "Alice", email: "alice@example.com", role: "comercial" },
  { id: "u2", name: "Bob", email: "bob@example.com", role: "analitico" },
];

const PanelUserAdmin: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  <Outlet />;

  const handleRoleChange = (id: string, newRole: string) => {
    // Aquí podrías usar dispatch para actualizar Redux o enviar a una API
    console.log(`Update user ${id} to role: ${newRole}`);
  };
  if (currentUser?.role !== "admin") {
    return <p>No access</p>;
  }

  return (
    <div>
      <h1>Panel de Administración de Usuarios</h1>
      <Link to="/admin/protected">volver</Link>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
        {users.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center mb-2 border p-2 rounded"
          >
            <span>
              {user.name} ({user.email})
            </span>
            <select
              value={user.role}
              onChange={(e) => handleRoleChange(user.id, e.target.value)}
              className="border px-2 py-1 rounded"
            >
              <option value="comercial">Comercial</option>
              <option value="analitico">Analítico</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanelUserAdmin;
// src/pages/admin/UserManagement.tsx
