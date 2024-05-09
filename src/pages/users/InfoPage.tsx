import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const InfoPage: React.FC = () => {
  const { currentUser, updateUser } = useContext<any>(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    updateUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-bold">Username:</p>
          <p>{currentUser.username}</p>
        </div>
        {/* Agrega más campos según la estructura de tu usuario */}
      </div>
      <div className="mt-6">
        <Button onClick={handleLogout} className="w-full shadow-md">
          Logout
        </Button>
      </div>
    </div>
  );
};