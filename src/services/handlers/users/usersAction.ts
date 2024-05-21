import apiRequest from "@/services/apiRequest";
import useAuthStore from "@/services/authState";
import axios from "axios";

interface User {
    id: string;
    email: string;
    username: string;
    password: string;
    avatar: string | null;
    createdAt: string;
    chatIDs: string[];
  }

export const fetchUsers = async () => {
    const setUsers = useAuthStore.getState().setUsers;
    try {
      const response = await apiRequest.get<User[]>(`/users`);
      setUsers(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.message);
      } else {
        console.error('An unknown error occurred');
      }
    }
  };