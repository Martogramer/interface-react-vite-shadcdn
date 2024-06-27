// mockData.ts
interface Post {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  content: string;
  body?: string;
}

export const mockPosts: Post[] = [
  {
    id: 1,
    title: "Finding the right guitar for your style - 5 tips",
    date: "2022-10-10",
    imageUrl:
      "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },
  {
    id: 2,
    title: "Jenkins un proyecto de código abierto",
    date: "2023-10-10",
    imageUrl:
      "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    content:
      "Jenkins es un servidor de automatización de código abierto escrito en Java que se utiliza principalmente para la integración continua (CI) y la entrega continua (CD) de proyectos de software. Algunas características clave de Jenkins son:<br/>- Jenkins es un proyecto de código abierto y de software libre, publicado bajo la licencia MIT.[1][4] Esto significa que es gratuito de usar y modificar, y cuenta con una gran comunidad de desarrolladores que contribuyen al proyecto.- Jenkins se asocia estrechamente con las prácticas de DevOps, ya que automatiza muchas tareas del ciclo de vida del desarrollo de software, como la compilación, las pruebas, el empaquetado y el despliegue. Esto permite a los equipos de desarrollo e IT integrar cambios de manera más rápida y confiable.- Jenkins es muy extensible gracias a sus más de 1,600 complementos (plugins) que permiten integrarlo con una amplia variedad de herramientas y tecnologías utilizadas en el desarrollo de software, como sistemas de control de versiones, herramientas de análisis estático, entornos de nube, etc. En resumen, Jenkins es una herramienta de código abierto y de software libre que se ha convertido en un estándar de facto para la integración continua y entrega continua en el mundo del desarrollo",
    body:
      "Jenkins es un servidor de automatización de código abierto escrito en Java que se utiliza principalmente para la integración continua (CI) y la entrega continua (CD) de proyectos de software. Algunas características clave de Jenkins son:<br/>- Jenkins es un proyecto de código abierto y de software libre, publicado bajo la licencia MIT.[1][4] Esto significa que es gratuito de usar y modificar, y cuenta con una gran comunidad de desarrolladores que contribuyen al proyecto.- Jenkins se asocia estrechamente con las prácticas de DevOps, ya que automatiza muchas tareas del ciclo de vida del desarrollo de software, como la compilación, las pruebas, el empaquetado y el despliegue. Esto permite a los equipos de desarrollo e IT integrar cambios de manera más rápida y confiable.- Jenkins es muy extensible gracias a sus más de 1,600 complementos (plugins) que permiten integrarlo con una amplia variedad de herramientas y tecnologías utilizadas en el desarrollo de software, como sistemas de control de versiones, herramientas de análisis estático, entornos de nube, etc. En resumen, Jenkins es una herramienta de código abierto y de software libre que se ha convertido en un estándar de facto para la integración continua y entrega continua en el mundo del desarrollo",
  },
  {
    id: 3,
    title: "Finding the right guitar for your style - 3 tips",
    date: "2022-10-10",
    imageUrl:
      "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },
  {
    id: 4,
    title: "Finding the right guitar for your style - 1 tips",
    date: "2022-10-10",
    imageUrl:
      "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },
  {
    id: 5,
    title: "Finding the right guitar for your style - 4 tips",
    date: "2022-10-10",
    imageUrl:
      "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },
  {
    id: 6,
    title: "Finding the right guitar for your style - 5 tips",
    date: "2022-10-10",
    imageUrl:
      "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  },
];
