export interface DocumentationElement {
    type: "title" | "paragraph" | "section" | "image" | "code" | "link";
    content: string;
    language?: string;
    url?: string;
    imageUrl?: string | string[];
  }
  
  export interface DocumentationItem {
    id: number;
    title: string;
    author: string;
    publishDate: string;
    tags: string[];
    elements: DocumentationElement[];
    image?: string;
  }

export const mockDocs: DocumentationItem[] = [
    {
      id: 1,
      title: "Introducción a TypeScript",
      author: "Juan Pérez",
      publishDate: "2024-09-10",
      tags: ["TypeScript", "JavaScript", "Frontend"],
      elements: [
        { type: "title", content: "Introducción a TypeScript" },
        { type: "paragraph", content: "TypeScript es un superset de JavaScript..." },
        { type: "section", content: "Beneficios de TypeScript" },
        { type: "code", content: `const example: string = "Hola TypeScript";` },
      ],
    },
    //..
  ];
  