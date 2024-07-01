interface User {
    id: string;
    email: string;
    username: string;
    password: string;
    avatar: string | null;
    createdAt: string;
    chatIDs: string[];
  }
  
  const users: User[] = [
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