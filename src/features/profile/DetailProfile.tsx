import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card } from "@/components/ui/card";
import useAuthStore from "@/services/authState";
import { fetchProfileData } from "@/services/handlers/profile/profileActions";
import ImageContainer from "@/components/_Customs2024/images/LazyImage";

interface UserData {
  username: string;
  email: string;
  avatar: string;
}

interface LoginFormData {
  username: string;
  password: string;
  email: string;
  avatar: File | null;
}

// Mock user data
const mockUser: UserData = {
  username: "JohnDoe",
  email: "johndoe@example.com",
  avatar: "https://example.com/avatar.jpg",
};

export const DetailProfile: React.FC = () => {
  const { logout, isAuthenticated } = useAuthStore();
  const [userData, setUserData] = useState<UserData>(mockUser);
  const [formData, setFormData] = useState<LoginFormData>({
    username: userData.username,
    password: "",
    email: userData.email,
    avatar: null,
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        avatar: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Here you would typically send the formData to your API
      // For now, we'll just update the local state
      setUserData({
        ...userData,
        username: formData.username,
        email: formData.email,
      });
      setIsLoading(false);
      // You might want to show a success message here
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

  return (
    <div className="container mx-auto px-4 py-8">
      <ImageContainer />
      
      {/* User Details Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-2xl font-bold mb-4">User Details</h2>
        <div className="flex items-center">
          <img src={userData.avatar} alt="User Avatar" className="w-20 h-20 rounded-full mr-4" />
          <div>
            <p className="text-xl font-semibold">{userData.username}</p>
            <p className="text-gray-600">{userData.email}</p>
          </div>
        </div>
      </Card>

      {/* Update Profile Form */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="username" className="block font-bold mb-1">
                Username:
              </label>
              <input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                minLength={3}
                maxLength={20}
                type="text"
                className="w-full rounded-lg border-gray-300 p-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold mb-1">
                Email:
              </label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                className="w-full rounded-lg border-gray-300 p-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-bold mb-1">
                New Password:
              </label>
              <input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                type="password"
                className="w-full rounded-lg border-gray-300 p-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="avatar" className="block font-bold mb-1">
                New Avatar:
              </label>
              <input
                id="avatar"
                name="avatar"
                type="file"
                onChange={handleAvatarChange}
                className="w-full rounded-lg border-gray-300 p-2 text-sm"
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
              className="w-full"
            >
              {isLoading ? "Updating..." : "Update Profile"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <Button onClick={handleLogout} className="w-full">
            Logout
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DetailProfile;