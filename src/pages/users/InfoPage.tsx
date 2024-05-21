import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card } from "@/components/ui/card";
import useAuthStore from "@/services/authState";
import { fetchProfileData } from "@/services/handlers/profile/profileActions";

interface LoginFormData {
  username: string;
  password: string;
  email: string;
  avatar: {};
}

export const InfoPage: React.FC = () => {
  const { user, logout, profileData, isAuthenticated } = useAuthStore();
  const [data, setData] = useState<LoginFormData>({
    username: user?.username || "",
    password: "",
    email: user?.email || "",
    avatar: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setData((prevData) => ({ ...prevData, avatar: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetchProfileData();
      setIsLoading(false);
      // Redirigir al usuario a la página de perfil o a otra página relevante
    } catch (err) {
      setIsLoading(false);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message || "An unknown error occurred");
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchProfileData();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Card className="mx-auto max-w-sm align-middle">
        <div>
          <h2>{user?.username || "No username"}</h2>
          <h2>{user?.email || "No email"}</h2>
        </div>
      </Card>
      <Card className="mx-auto max-w-sm align-middle">
        <div>
          <h1>{user?.username}'s Profile</h1>
          {profileData && (
            <div>
              <h2>Posts</h2>
              {profileData.userPosts.map((post: any) => (
                <div key={post.id}>{post.content}</div>
              ))}
              <h2>Saved Posts</h2>
              {profileData.savedPosts.map((post: any) => (
                <div key={post.id}>{post.content}</div>
              ))}
            </div>
          )}
        </div>
      </Card>
      <Card className="mx-auto max-w-sm align-middle">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="username" className="font-bold">
                  Username:
                </label>
                <input
                  id="username"
                  name="username"
                  value={data.username}
                  onChange={handleInputChange}
                  minLength={3}
                  maxLength={20}
                  type="text"
                  className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-bold">
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleInputChange}
                  type="email"
                  className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-md"
                />
              </div>
              <div>
                <label htmlFor="password" className="font-bold">
                  Password:
                </label>
                <input
                  id="password"
                  name="password"
                  value={data.password}
                  onChange={handleInputChange}
                  type="password"
                  className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-md"
                />
              </div>
              <div>
                <label htmlFor="avatar" className="font-bold">
                  Avatar:
                </label>
                <input
                  id="avatar"
                  name="avatar"
                  type="file"
                  onChange={handleAvatarChange}
                  className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-md"
                />
              </div>
            </div>
            {error && (
              <div className="mt-4 text-red-500 font-bold">{error}</div>
            )}
            <div className="mt-6">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full shadow-md"
              >
                Update Profile
              </Button>
            </div>
          </form>
          <div className="mt-6">
            <Button onClick={handleLogout} className="w-full shadow-md">
              Logout
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InfoPage;