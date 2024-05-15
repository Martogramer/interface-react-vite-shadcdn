import { Button } from "@/components/ui/button";
import React, { useContext, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";

interface Props {
  children: React.ReactNode;
}
const handleLogout = () => {
  localStorage.removeItem("token");
};
interface LoginFormData {
  username: string;
  password: string;
  email: string;
  avatar: {};
}
const LayoutMain: React.FC<Props> = ({ children }) => {
  const { currentUser, updateUser } = useContext<any>(AuthContext);
  const [data, setData] = useState<LoginFormData>({
    username: currentUser?.username || "",
    password: "",
    email: currentUser?.email || "",
    avatar: currentUser?.avatar || "",
  });
  return (
    <div className="ml-4 bg-gray text-primary-foreground m-1">
      <div className=" ml-11 mt-2 fixed">
        <span className="mr-2 whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
          Live
        </span>
        <span className="text-xs hidden min-[680px]:inline-block font-semibold cursor-default">
            <span className="mx-1 text-navy-700 hover:text-navy-700">/</span>
          <label className="capitalize text-navy-700 hover:underline">
            {location.pathname.split("/")[1]}
            {location.pathname.split("/").length > 2 &&
              ` / ` + location.pathname.split("/")[2]}
            {location.pathname.split("/").length > 3 &&
              ` / ` + location.pathname.split("/")[3]}
          </label>
          <Button onClick={handleLogout}>{data.username}</Button>
          <p>{data.username}</p>
        </span>
      </div>

      <div className=" md:px-10 mx-auto w-full">
        <div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutMain;
