import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { login } from "@/features/auth/authSlice";
import logo from "../assets/cool.png";

const LoginUserAdmin: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
    const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

    if (
      formData.email === ADMIN_EMAIL &&
      formData.password === ADMIN_PASSWORD
    ) {
      const user = {
        id: import.meta.env.VITE_ADMIN_ID,
        name: import.meta.env.VITE_ADMIN_NAME,
        email: ADMIN_EMAIL,
        role: "admin" as const,
        token: import.meta.env.VITE_ADMIN_TOKEN,
      };

      dispatch(login(user));
      toast.success("Welcome Admin");

      // Debug
      console.log("🔐 Usuario logueado:", user);

      navigate("/");
    } else {
      toast.error("Invalid admin credentials");
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center justify-center h-screen m-8">
        <img src={logo} alt="Cool-LOGO" className="w-[17vw] mb-8" />
        <form className="w-full max-w-md p-6" onSubmit={handleSubmit}>
          <motion.h2 className="text-5xl font-bold mb-6 font-poppy">
            Admin Login
          </motion.h2>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="w-full px-3 py-2 mb-4 border rounded bg-gray-100"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-3 py-2 mb-4 border rounded bg-gray-100"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-orange-700 w-full text-white py-2 rounded hover:bg-orange-600"
          >
            Login
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginUserAdmin;
