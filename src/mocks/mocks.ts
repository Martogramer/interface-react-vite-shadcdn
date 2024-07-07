// src/mocks/mocks.ts
interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
  }
  
  interface BlogPost {
    id: number;
    title: string;
    content: string;
    tags: string[];
  }

export const mockProducts: Product[] = [
  { id: 1, name: "MacBook Pro", category: "Electronics", price: 1999.99 },
  { id: 2, name: "Running Shoes", category: "Sports", price: 129.99 },
  { id: 3, name: "Coffee Maker", category: "Home & Kitchen", price: 79.99 },
  { id: 4, name: "Wireless Headphones", category: "Electronics", price: 199.99 },
  { id: 5, name: "Yoga Mat", category: "Sports", price: 29.99 },
  { id: 6, name: "Smart Watch", category: "Electronics", price: 249.99 },
  { id: 7, name: "Blender", category: "Home & Kitchen", price: 59.99 },
  { id: 8, name: "Hiking Backpack", category: "Outdoors", price: 89.99 },
  { id: 9, name: "LED TV", category: "Electronics", price: 699.99 },
  { id: 10, name: "Office Chair", category: "Furniture", price: 159.99 },
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Tips for Productive Remote Work",
    content: "Working from home can be challenging, but with these tips, you can boost your productivity...",
    tags: ["Remote Work", "Productivity"]
  },
  {
    id: 2,
    title: "The Future of Artificial Intelligence",
    content: "AI is rapidly evolving. In this post, we explore the potential future applications and implications...",
    tags: ["Technology", "AI"]
  },
  {
    id: 3,
    title: "Beginner's Guide to React Hooks",
    content: "React Hooks have revolutionized the way we write React components. Learn how to use them effectively...",
    tags: ["Programming", "React"]
  },
  {
    id: 4,
    title: "Healthy Eating Habits for Busy Professionals",
    content: "Maintaining a healthy diet can be challenging when you're always on the go. Here are some practical tips...",
    tags: ["Health", "Lifestyle"]
  },
  {
    id: 5,
    title: "Understanding TypeScript Generics",
    content: "Generics in TypeScript provide a way to create reusable components. In this post, we dive deep into...",
    tags: ["Programming", "TypeScript"]
  },
  {
    id: 6,
    title: "The Rise of Sustainable Fashion",
    content: "Eco-friendly fashion is more than just a trend. Discover how the industry is moving towards sustainability...",
    tags: ["Fashion", "Sustainability"]
  },
  {
    id: 7,
    title: "Mastering CSS Grid Layout",
    content: "CSS Grid has changed the game for web layouts. Learn how to create complex layouts with ease...",
    tags: ["Web Development", "CSS"]
  },
  {
    id: 8,
    title: "Introduction to Blockchain Technology",
    content: "Blockchain is not just about cryptocurrencies. Explore the fundamentals and potential applications...",
    tags: ["Technology", "Blockchain"]
  },
];