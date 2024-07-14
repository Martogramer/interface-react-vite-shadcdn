
interface Product {
  id: number;
  name: string;
  category: string;
  tags?: string[];
  price: number;
  imageUrl?: string | string[];
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  tags: string[];
  author: string;
  publishDate: string;
}
export interface BlogPostMultiple {
  id: number;
  elements: BlogPostElement[];
  tags: string[];
  author: string;
  publishDate: string;
}
export interface BlogPostElement {
  type: 'title' | 'paragraph';
  content: string;
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


export const mockBlogPostsMultiple: BlogPostMultiple[] = [
  {
    id: 1,
    elements: [
      { type: 'title', content: "La importancia del software libre en la era digital" },
      { type: 'paragraph', content: "En un mundo cada vez más dependiente de la tecnología, el software libre se ha convertido en un pilar fundamental para la innovación y la libertad digital..." },
      { type: 'title', content: "¿Qué es el software libre?" },
      { type: 'paragraph', content: "El software libre se refiere a programas informáticos que respetan la libertad de los usuarios y la comunidad. En términos generales, los usuarios tienen la libertad de ejecutar, copiar, distribuir, estudiar, modificar y mejorar el software..." },
      { type: 'title', content: "Las cuatro libertades esenciales" },
      { type: 'paragraph', content: "Richard Stallman, fundador del movimiento del software libre, definió cuatro libertades esenciales: la libertad de usar el programa, la libertad de estudiar cómo funciona el programa, la libertad de distribuir copias del programa, y la libertad de mejorar el programa y publicar esas mejoras..." },
    ],
    tags: ["Software Libre", "Tecnología", "Ética Digital"],
    author: "Ana Martínez",
    publishDate: "2023-05-15",
  },
  {
    id: 2,
    elements: [
      { type: 'title', content: "5 proyectos de software libre que están cambiando el mundo" },
      { type: 'paragraph', content: "El software libre no solo es una filosofía, sino también una fuerza impulsora detrás de muchas tecnologías que usamos a diario. Veamos algunos proyectos que están teniendo un impacto significativo..." },
      { type: 'title', content: "1. Linux" },
      { type: 'paragraph', content: "El kernel de Linux es quizás el proyecto de software libre más conocido y utilizado. Desde servidores web hasta smartphones Android, Linux está en todas partes..." },
      { type: 'title', content: "2. Mozilla Firefox" },
      { type: 'paragraph', content: "Este navegador web de código abierto ha sido durante mucho tiempo un defensor de un internet abierto y accesible..." },
      { type: 'title', content: "3. LibreOffice" },
      { type: 'paragraph', content: "Una suite de oficina completa y gratuita que ofrece una alternativa viable a las soluciones propietarias..." },
    ],
    tags: ["Software Libre", "Proyectos Open Source", "Tecnología"],
    author: "Carlos Rodríguez",
    publishDate: "2023-06-02",
  },
  {
    id: 3,
    elements: [
      { type: 'title', content: "Cómo contribuir al software libre: Una guía para principiantes" },
      { type: 'paragraph', content: "Contribuir al software libre puede parecer intimidante al principio, pero hay muchas formas de hacerlo, independientemente de tu nivel de habilidad técnica..." },
      { type: 'title', content: "1. Reportar errores" },
      { type: 'paragraph', content: "Una de las formas más sencillas de contribuir es reportar errores o problemas que encuentres en el software que utilizas..." },
      { type: 'title', content: "2. Mejorar la documentación" },
      { type: 'paragraph', content: "La documentación clara y precisa es crucial para cualquier proyecto de software. Puedes ayudar escribiendo o mejorando manuales, tutoriales o wikis..." },
      { type: 'title', content: "3. Traducir" },
      { type: 'paragraph', content: "Si hablas más de un idioma, puedes ayudar a traducir la interfaz o la documentación de proyectos de software libre..." },
    ],
    tags: ["Software Libre", "Contribución", "Desarrollo"],
    author: "Laura Gómez",
    publishDate: "2023-06-20",
  }
];
export const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Tips for Productive Remote Work",
    content: "Working from home can be challenging, but with these tips, you can boost your productivity...",
    tags: ["Remote Work", "Productivity"],
    author: "Martin Iribas",
    publishDate: "2022-01-01",
  },
  {
    id: 2,
    title: "The Future of Artificial Intelligence",
    content: "AI is rapidly evolving. In this post, we explore the potential future applications and implications...",
    tags: ["Technology", "AI"],
    author: "Martin Iribas",
    publishDate: "2022-01-01",
  },
  {
    id: 3,
    title: "Beginner's Guide to React Hooks",
    content: "React Hooks have revolutionized the way we write React components. Learn how to use them effectively...",
    tags: ["Programming", "React"],
    author: "Martin Iribas",
    publishDate: "2022-01-01",
  },
  {
    id: 4,
    title: "Healthy Eating Habits for Busy Professionals",
    content: "Maintaining a healthy diet can be challenging when you're always on the go. Here are some practical tips...",
    tags: ["Health", "Lifestyle"],
    author: "Martin Iribas",
    publishDate: "2022-01-01",
  },
  {
    id: 5,
    title: "Understanding TypeScript Generics",
    content: "Generics in TypeScript provide a way to create reusable components. In this post, we dive deep into...",
    tags: ["Programming", "TypeScript"],
    author: "Martin Iribas",
    publishDate: "2022-01-01",
  },
  {
    id: 6,
    title: "The Rise of Sustainable Fashion",
    content: "Eco-friendly fashion is more than just a trend. Discover how the industry is moving towards sustainability...",
    tags: ["Fashion", "Sustainability"],
    author: "Martin Iribas",
    publishDate: "2022-01-01",
  },
  {
    id: 7,
    title: "Mastering CSS Grid Layout",
    content: "CSS Grid has changed the game for web layouts. Learn how to create complex layouts with ease...",
    tags: ["Web Development", "CSS"],
    author: "Martin Iribas",
    publishDate: "2022-01-01",
  },
  {
    id: 8,
    title: "Introduction to Blockchain Technology",
    content: "Blockchain is not just about cryptocurrencies. Explore the fundamentals and potential applications...",
    tags: ["Technology", "Blockchain"],
    author: "Martin Iribas",
    publishDate: "2022-01-01",
  },
];