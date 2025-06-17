import { User } from "@/features/auth/authSlice";
interface Users {
    id: string;
    email: string;
    username: string;
    password: string;
    avatar: string | null;
    createdAt: string;
    chatIDs: string[];
  }

  // src/utils/mockUsers.ts


export const mockUsers: User[] = [
  {
    id: "admin-1",
    name: "Super Admin",
    email: "admin@empresa.com",
    role: "admin",
    token: "admin-token-123",
  },
  {
    id: "com-1",
    name: "Carlos Comercial",
    email: "carlos@empresa.com",
    role: "comercial",
    token: "com-token-123",
  },
  {
    id: "ana-1",
    name: "Ana Analítica",
    email: "ana@empresa.com",
    role: "analitico",
    token: "ana-token-123",
  },
];

  
  const users: Users[] = [
    {
      id: "1",
      email: "john.doe@example.com",
      username: "johndoe",
      password: "password123",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      createdAt: "2023-01-15T08:00:00Z",
      chatIDs: ["chat1", "chat2"],
    },
    {
      id: "2",
      email: "jane.smith@example.com",
      username: "janesmith",
      password: "password456",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      createdAt: "2023-01-16T09:00:00Z",
      chatIDs: ["chat3", "chat4"],
    },
    {
      id: "3",
      email: "bob.jones@example.com",
      username: "bobjones",
      password: "password789",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      createdAt: "2023-01-17T10:00:00Z",
      chatIDs: ["chat5", "chat6"],
    },
    {
      id: "4",
      email: "alice.johnson@example.com",
      username: "alicejohnson",
      password: "password101",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      createdAt: "2023-01-18T11:00:00Z",
      chatIDs: ["chat7", "chat8"],
    },
    {
      id: "5",
      email: "michael.brown@example.com",
      username: "michaelbrown",
      password: "password202",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      createdAt: "2023-01-19T12:00:00Z",
      chatIDs: ["chat9", "chat10"],
    },
  ];
  
  export default users;