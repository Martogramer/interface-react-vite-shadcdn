import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";
import { loginUser } from "@/services/handlers/auth/authActions";
import useAuthStore from "@/services/authState";
interface LoginFormData {
  username: string;
  password: string;
}
export const LoginShad: React.FC = () => {
  const { isAuthenticated, login } = useAuthStore();
  const [data, setData] = useState<LoginFormData>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await loginUser(data);
      console.log(data.username + " logged in");
      navigate("/dashboard/info");
      // Redirigir al usuario a la página de inicio o a otra página relevante
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message || "An unknown error occurred");
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        {isAuthenticated ? (
          <CardDescription>Ya estas logueado</CardDescription>
        ) : (
          <CardDescription>Necesitas estar logueado</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Usuario</Label>
              <input
                id="username"
                name="username"
                value={data.username}
                onChange={handleInputChange}
                required
                minLength={3}
                maxLength={20}
                type="text"
                className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-md"
                placeholder="Enter email"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <NavLink
                  to={"#"}
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </NavLink>
              </div>
              <dl></dl>
              <input
                id="password"
                name="password"
                type="password"
                value={data.password}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-md"
                placeholder="Enter password"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full shadow-md"
            >
              Login
            </Button>
            <Button className="w-full shadow-md">Login with Google</Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <NavLink to={"register"} className="underline">
              Sign up
            </NavLink>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
