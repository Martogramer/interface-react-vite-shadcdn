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
export interface BlogPostElement {
  type: "title" | "paragraph" | "image" | "code" | "link";
  content: string;
  language?: string;
  url?: string;
}
export interface BlogPostMultiple {
  id: number;
  elements: BlogPostElement[];
  tags: string[];
  author: string;
  publishDate: string;
  image?: string;
}
export const mockBlogPostsMultiple: BlogPostMultiple[] = [
  {
    id: 1,
    elements: [
      {
        type: "title",
        content:
        "Hackeando al Capitalismo: El Impacto del Movimiento de Software Libre y de Código Abierto",
      },
      {
        type: "paragraph",
        content:
          "El movimiento de software libre y de código abierto ha revolucionado la industria del software y la tecnología en general, ofreciendo una alternativa radical al modelo capitalista tradicional de propiedad intelectual y comercialización. Este movimiento desafía las estructuras económicas y sociales existentes, al tiempo que promueve la innovación, la colaboración y la democratización del conocimiento.",
      },
      {
        type: "paragraph",
        content:
          "Hackeando el capitalismo de Johan Söderberg explora la intersección entre el movimiento de software libre y las dinámicas del capitalismo contemporáneo.",
      },
      { type: "title", content: "Contrapunto al Capitalismo Tradicional" },
      {
        type: "paragraph",
        content:
          "El hacking democratiza el acceso a la tecnología, desafiando el monopolio de las corporaciones sobre el conocimiento y la innovación.",
      },
      {
        type: "paragraph",
        content:
          'Söderberg argumenta que el hacking no solo es una práctica técnica, sino un acto de resistencia contra las estructuras de poder establecidas. En este sentido, el autor menciona que "la promesa del hacking es que al hacer la tecnología informática accesible se socava la división social del trabajo"',
      },
      {
        type: "paragraph",
        content:
          "El software libre y de código abierto se enfrenta al capitalismo tradicional al cuestionar y subvertir las prácticas de propiedad intelectual que dominan la industria del software. En el modelo capitalista, la propiedad intelectual se utiliza para crear monopolios temporales sobre el uso y distribución de obras creativas, incluidas las aplicaciones de software. Esto se logra mediante patentes, derechos de autor y licencias restrictivas que controlan quién puede usar, modificar y distribuir el software.",
      },
      {
        type: "link",
        content: "https://utopia.partidopirata.com.ar/hackeando_al_capitalismo.html",
        url: "https://utopia.partidopirata.com.ar/hackeando_al_capitalismo.html",
      },
      {
        type: "paragraph",
        content:
          "",
      },
      { type: "title", content: "Un acercamiento al concepto de Hacking; la reestructuraciòn del capitalismo" },
      {
        type: "paragraph",
        content:
        'El concepto de "juego como lucha" es central en la obra. Söderberg sostiene que "el juego se diferencia en que se elige libremente y está marcado por un alto grado de autodeterminación entre los jugadores" ',
      },
      {
        type: "paragraph",
        content:
        'Este enfoque sugiere que las actividades hacker pueden ser vistas como formas de autoorganización y resistencia, donde los participantes ejercen control sobre sus herramientas.',
      },
      {
        type: "paragraph",
        content:
        "El autor analiza cómo las tecnologías digitales han transformado las relaciones laborales y la producción. La reestructuración del capitalismo, según Söderberg, no es solo una respuesta a avances tecnológicos, sino una estrategia para mantener márgenes de ganancia frente a un aumento en la participación de los trabajadores.",
      },
      {
        type: "paragraph",
        content:
        'También argumenta que el hacking promueve la libertad de acceso a la información y a las herramientas tecnológicas. Esta apertura permite a los individuos no solo aprender y crear, sino también desafiar las normas establecidas. La ética hacker sostiene que "el acceso a las computadoras y cualquier cosa que pueda enseñar algo acerca de cómo funciona el mundo, debe ser de acceso ilimitado."',
      },
      {
        type: "paragraph",
        content:
        "Algo muy interesante es que sugiere pensar la ética hacker como un acto político. La democratización del conocimiento empodera a las personas para que tengan el control de sus vidas.",
      },
      {
        type: "paragraph",
        content:
        "La promesa de emancipación del hacking en 'Hackeando el capitalismo' se centra en su potencial para democratizar el acceso al conocimiento, fomentar la autodeterminación y desafiar las estructuras opresivas del capitalismo. Sin embargo, también se reconoce la necesidad de estar alerta ante la cooptación de estas prácticas por parte del sistema capitalista. En última instancia, Söderberg invita a reflexionar sobre cómo el hacking puede contribuir a una transformación social más profunda.",
      },
      {
        type: "link",
        content: "https://utopia.partidopirata.com.ar/hackeando_al_capitalismo.html",
        url: "https://utopia.partidopirata.com.ar/hackeando_al_capitalismo.html",
      },
      {
        type: "paragraph",
        content:
          "",
      },
      { type: "title", content: "Qué tiene que ver esto con las ideas de Richard Stallman en 'Software Libre para una Sociedad Libre'?" },
      {
        type: "paragraph",
        content:
          "Richard Stallman, fundador del movimiento del software libre, definió cuatro libertades esenciales: la libertad de usar el programa, la libertad de estudiar cómo funciona el programa, la libertad de distribuir copias del programa, y la libertad de mejorar el programa y publicar esas mejoras...",
      },
      {
        type: "paragraph",
        content:
        "Esto se articula con lo planteado en 'Hackeando el Capitalismo' de Söderberg ya que ambos autores abordan cómo el acceso y control sobre la tecnología pueden ser herramientas de emancipación social."
      },
      {
        type: "paragraph",
        content:
          "El movimiento de software libre rompe con este modelo al rechazar las restricciones impuestas por las licencias propietarias. Licencias como la GNU General Public License (GPL) y la Licencia MIT permiten a los usuarios estudiar, modificar y redistribuir el software libremente, promoviendo una cultura de compartición y colaboración que contrasta con la competitividad y exclusividad del capitalismo tradicional.",
      },
      {
        type: "paragraph",
        content:
          "Además, el modelo de producción colaborativa de FOSS permite a desarrolladores de todo el mundo contribuir a proyectos, identificar y corregir errores más rápidamente y agregar nuevas funcionalidades. Esto no solo acelera el ciclo de desarrollo, sino que también reduce los costos asociados con la producción de software, ya que las empresas pueden aprovechar una base de código existente y enfocarse en personalizaciones específicas o en añadir valor a través de servicios y soporte.",
      },
      {
        type: "title",
        content: "Historia y Filosofía del Movimiento de Software Libre",
      },
      {
        type: "paragraph",
        content:
          "El movimiento de software libre tiene sus raíces en las primeras comunidades de programadores de los años 1960 y 1970, que compartían libremente el código fuente de sus programas. En estos primeros días de la informática, el intercambio de software y conocimientos era una práctica común entre académicos y profesionales, facilitando la colaboración y la innovación.",
      },
      {
        type: "paragraph",
        content:
          "El concepto de software propietario comenzó a ganar terreno en la década de 1980, cuando las empresas empezaron a restringir el acceso al código fuente de sus programas para proteger sus intereses comerciales. Esta tendencia hacia la privatización del software y el aumento de las restricciones legales y técnicas generó una reacción entre algunos miembros de la comunidad de programadores.",
      },
      {
        type: "paragraph",
        content:
          "Una figura clave en el nacimiento del movimiento de software libre es Richard Stallman. En 1983, Stallman anunció el proyecto GNU (GNU's Not Unix), con el objetivo de desarrollar un sistema operativo completo y libre similar a Unix. Al año siguiente, fundó la Free Software Foundation (FSF) para apoyar el desarrollo del software libre y promover sus principios. Stallman también introdujo la Licencia Pública General de GNU (GPL), una licencia de software libre diseñada para garantizar que los programas licenciados bajo ella sigan siendo libres para todos los usuarios. La GPL incorpora el concepto de copyleft, que asegura que cualquier modificación o distribución del software mantenga las mismas libertades que el original.",
      },
      {
        type: "title",
        content: "Impacto Económico y Social",
      },
      {
        type: "paragraph",
        content:
        "El software libre ha sido un motor crucial para la innovación en la industria tecnológica. Al permitir que cualquier persona acceda, modifique y distribuya el código fuente, FOSS facilita la rápida iteración y mejora del software. Este modelo de desarrollo colaborativo permite a los desarrolladores de todo el mundo contribuir a proyectos, identificar y corregir errores más rápidamente y agregar nuevas funcionalidades. Esta eficiencia no solo acelera el ciclo de desarrollo, sino que también reduce los costos asociados con la producción de software, ya que las empresas pueden aprovechar una base de código existente y enfocarse en personalizaciones específicas o en añadir valor a través de servicios y soporte.",
      },
      {
        type: "paragraph",
        content:
        "El uso de software libre reduce significativamente los costos de licenciamiento para individuos, empresas y gobiernos. Esto es particularmente importante para pequeñas y medianas empresas (PYMEs), organizaciones sin fines de lucro y países en desarrollo, que pueden utilizar FOSS para acceder a tecnología de alta calidad sin los gastos prohibitivos asociados con el software propietario. Además, el acceso abierto al código fuente promueve la transparencia y la seguridad, ya que cualquier persona puede auditar el código en busca de vulnerabilidades o comportamientos maliciosos.",
      },
      {
        type: "paragraph",
        content:
        "El movimiento FOSS ha llevado al desarrollo de nuevos modelos de negocio que no dependen de la venta de licencias de software. Empresas como Red Hat, Canonical y Automattic han demostrado que es posible construir negocios sostenibles y exitosos en torno al software libre ofreciendo servicios de soporte, consultoría, personalización y hospedaje. Estos modelos de negocio basados en servicios permiten a las empresas monetizar su experiencia y conocimientos, mientras que el software en sí permanece libre y accesible.",
      },
      {
        type: "paragraph",
        content:
          "FOSS también ha jugado un papel fundamental en la democratización del conocimiento. Al poner herramientas y tecnologías avanzadas al alcance de cualquier persona con acceso a Internet, el software libre ha permitido a individuos y comunidades aprender, experimentar y desarrollar habilidades tecnológicas sin barreras económicas. En el ámbito educativo, el software libre ofrece recursos valiosos para la enseñanza y el aprendizaje de la informática y otras disciplinas.",
      },
      {
        type: "paragraph",
        content:
          "El software libre no solo es una herramienta tecnológica, sino también un medio para el empoderamiento comunitario y la movilización social. Las comunidades de desarrollo de FOSS son ejemplos de organización horizontal y colaborativa, donde la meritocracia y la participación abierta son principios fundamentales. Además, el movimiento FOSS ha inspirado a otros movimientos sociales que buscan aplicar principios de apertura y colaboración en áreas como la ciencia abierta, el hardware libre y los datos abiertos. Estos movimientos comparten la visión de que el acceso libre y equitativo al conocimiento y a la tecnología puede conducir a una sociedad más justa y sostenible.",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "link",
        content: "https://utopia.partidopirata.com.ar/hackeando_al_capitalismo.html",
        url: "https://utopia.partidopirata.com.ar/hackeando_al_capitalismo.html",
      },
      {
        type: "link",
        content: "https://es.scribd.com/document/655239834/PDF-Hackeando-Al-Capitalismo-compress",
        url: "https://es.scribd.com/document/655239834/PDF-Hackeando-Al-Capitalismo-compress",
      },
      {
        type: "link",
        content: "https://ephemerajournal.org/contribution/repurposing-hacker-three-cycles-recuperation-evolution-hacking-and-capitalism",
        url: "https://ephemerajournal.org/contribution/repurposing-hacker-three-cycles-recuperation-evolution-hacking-and-capitalism",
      },
      {
        type: "link",
        content: "El movimiento software libre. Un estudio exploratorio Milagros Dolabani: https://cdsa.aacademica.org/000-023/615.pdf",
        url: "https://cdsa.aacademica.org/000-023/615.pdf",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "image",
        content:
          "https://http2.mlstatic.com/D_NQ_NP_709580-MLU70776537722_072023-O.webp",
      },
    ],
    author: "Martín Iribas",
    publishDate: "2024-07-15",
    tags: ["Software Libre", "Tecnología", "Ética Digital"],
    image:
      "https://http2.mlstatic.com/D_NQ_NP_709580-MLU70776537722_072023-O.webp",
  },
  {
    id: 2,
    elements: [
      {
        type: "title",
        content: "La importancia del software libre en la era digital",
      },
      {
        type: "paragraph",
        content:
          "En un mundo cada vez más dependiente de la tecnología, el software libre se ha convertido en un pilar fundamental para la innovación y la libertad digital...",
      },
      { type: "title", content: "¿Qué es el software libre?" },
      {
        type: "paragraph",
        content:
          "El software libre se refiere a programas informáticos que respetan la libertad de los usuarios y la comunidad. En términos generales, los usuarios tienen la libertad de ejecutar, copiar, distribuir, estudiar, modificar y mejorar el software...",
      },
      {
        type: "code",
        content: `
        const freeSoftware = {
          name: 'GNU/Linux',
          isOpen: true,
          freedoms: ['use', 'study', 'share', 'improve']
          };
          `,
        language: "javascript",
      },
      { type: "title", content: "Las cuatro libertades esenciales" },
      {
        type: "paragraph",
        content:
          "Richard Stallman, fundador del movimiento del software libre, definió cuatro libertades esenciales: la libertad de usar el programa, la libertad de estudiar cómo funciona el programa, la libertad de distribuir copias del programa, y la libertad de mejorar el programa y publicar esas mejoras...",
      },
      {
        type: "link",
        content: "Visita nuestra página de GitHub",
        url: "https://github.com/tu-organizacion",
      },
      {
        type: "image",
        content:
          "https://http2.mlstatic.com/D_NQ_NP_709580-MLU70776537722_072023-O.webp",
      },
    ],
    author: "Martín Iribas",
    publishDate: "2024-07-15",
    tags: ["Software Libre", "Tecnología", "Ética Digital"],
    image:
      "https://http2.mlstatic.com/D_NQ_NP_709580-MLU70776537722_072023-O.webp",
  },
  {
    id: 3,
    elements: [
      {
        type: "title",
        content:
          "Reflexión sobre la Piratería, el Derecho al Acceso al Conocimiento y la Ética del Movimiento de Software Libre",
      },
      {
        type: "paragraph",
        content:
          "La piratería y el derecho al acceso libre al conocimiento son un debate ético y legal que enfrenta la lógica privativa del capitalismo global, contra los principios de colaboración del software libre. Esta problemática resuena con las reflexiones de Mariano Zukerfeld y el activismo de Aaron Swartz, quien abogó por un acceso abierto y equitativo al conocimiento.",
      },
      {
        type: "title",
        content: "La Escasez Artificial y la Piratería",
      },
      {
        type: "paragraph",
        content:
          "El capitalismo contemporáneo ha generado una lógica de apropiación y escasez de los bienes intangibles, como el conocimiento y la cultura. Los derechos de autor y otros mecanismos legales crean una 'escasez artificial' que limita el acceso al conocimiento, generando una barrera que solo beneficia a quienes poseen los medios para adquirirlo.",
      },
      {
        type: "paragraph",
        content:
          ' Zukerfeld en su artículo "La piratería des-comunal" argumenta que la piratería, en su sentido más amplio, ha sido instrumental para la acumulación de capital en la historia. Grandes corporaciones y potencias mundiales han utilizado prácticas de apropiación de conocimiento antes de establecer legislaciones restrictivas que protegen sus posiciones de poder, en un claro ejemplo de "patear la escalera" .',
      },
      {
        type: "title",
        content: "El Manifiesto por la Guerrilla del Acceso Abierto de Swartz",
      },
      {
        type: "paragraph",
        content:
          'Aaron Swartz, en su "Manifiesto por la guerrilla del acceso abierto", expone una crítica contundente contra el cercamiento del conocimiento. Swartz abogó por la liberación de la información científica y académica, defendiendo que el conocimiento es un bien común que debería estar al alcance de todos, no restringido por muros de pago o barreras legales. Su activismo buscaba democratizar el acceso al saber, argumentando que el conocimiento es esencial para el progreso humano y la justicia social.',
      },
      {
        type: "paragraph",
        content:
          "Swartz ejemplificó sus ideales mediante acciones concretas, como la descarga masiva de artículos académicos de JSTOR, buscando distribuirlos gratuitamente. Esta acción le valió una persecución legal intensa, que lo llevó a su trágico final en 2013. Su caso pone de manifiesto las tensiones entre las estructuras de poder establecidas y los movimientos que buscan un acceso más equitativo y libre a la información.",
      },
      {
        type: "title",
        content: "La Ética del Movimiento de Software Libre",
      },
      {
        type: "paragraph",
        content:
          "El movimiento de software libre, con sus raíces en la ética hacker y los principios promovidos por figuras como Richard Stallman, se basa en la creencia de que el software y el conocimiento deberían ser accesibles para todos. Las 'cuatro libertades' del software libre —usar, estudiar, modificar y distribuir— encapsulan esta ética de compartición y colaboración. Este movimiento rechaza la noción de escasez artificial y promueve un modelo en el que la información y las herramientas tecnológicas están disponibles para el beneficio colectivo.",
      },
      {
        type: "paragraph",
        content:
          "La piratería cuestiona la legitimidad de la apropiación privada del conocimiento, que es fruto del esfuerzo colectivo de la humanidad. La piratería, en su lucha contra la escasez artificial impuesta por el copyright, y el movimiento de software libre, con su énfasis en la libertad y la colaboración, representan resistencias cruciales frente a un modelo de producción y distribución del conocimiento que privilegia el lucro sobre el acceso universal.",
      },
      {
        type: "paragraph",
        content:
          " Los servidores ganaron libertad. Los clientes no ganaron nada. Bienvenidos a la nube. — Eben Moglen",
      },
      {
        type: "link",
        content: " __En Defensa del Software Libre.",
        url: "https://endefensadelsl.org/",
      },
      {
        type: "link",
        content: " __La historia de Aaron Swartz, el hijo de internet.",
        url: "https://www.youtube.com/watch?v=hjFLqC5EnQo",
      },
      {
        type: "image",
        content:
          "https://http2.mlstatic.com/D_NQ_NP_709580-MLU70776537722_072023-O.webp",
      },
    ],
    author: "Martín Iribas",
    publishDate: "2024-08-09",
    tags: [
      "Software Libre",
      "Tecnología",
      "Ética Digital",
      "Piratería",
      "Software",
      "Código Abierto",
    ],
    image:
      "https://http2.mlstatic.com/D_NQ_NP_709580-MLU70776537722_072023-O.webp",
  },
  {
    "id": 5,
    "elements": [
      {
        "type": "title",
        "content": "Creando una API de Gestión de Usuarios con Node.js y TypeScript"
      },
      {
        "type": "paragraph",
        "content": "En este post, aprenderemos a crear una API robusta para la gestión de usuarios utilizando Node.js y TypeScript. Esta combinación nos permitirá desarrollar un backend seguro y escalable con tipado estático, lo que mejora la mantenibilidad y reduce errores en tiempo de ejecución. Si estás buscando una forma de optimizar tu desarrollo backend, TypeScript es una excelente opción, ya que proporciona herramientas para prevenir errores comunes y mejora la experiencia de desarrollo."
      },
      {
        "type": "image",
        "content": "https://http2.mlstatic.com/D_NQ_NP_709580-MLU70776537722_072023-O.webp"
      },
      {
        "type": "paragraph",
        "content": "Comenzaremos configurando nuestro proyecto y luego implementaremos las funcionalidades básicas de CRUD (Crear, Leer, Actualizar, Eliminar) para los usuarios. Antes de sumergirnos en la escritura de código, es crucial asegurarnos de que nuestro entorno esté correctamente configurado. Esto incluye la instalación de todas las dependencias necesarias y la creación de un archivo de configuración para TypeScript."
      },
      {
        "type": "code",
        "content": "// Configuración inicial\nnpm init -y\nnpm install express @types/express typescript ts-node\nnpm install --save-dev @types/node\n\n// tsconfig.json\n{\n  \"compilerOptions\": {\n    \"target\": \"es6\",\n    \"module\": \"commonjs\",\n    \"outDir\": \"./dist\",\n    \"strict\": true,\n    \"esModuleInterop\": true\n  }\n}",
        "language": "typescript"
      },
      {
        "type": "paragraph",
        "content": "Con esto, hemos creado un nuevo proyecto Node.js, añadido las dependencias necesarias, e inicializado TypeScript con una configuración básica. El archivo tsconfig.json contiene opciones esenciales que definen cómo se compilará nuestro código TypeScript. Por ejemplo, target especifica la versión de ECMAScript que queremos utilizar, mientras que outDir indica el directorio donde se guardarán los archivos compilados."
      },
      {
        "type": "paragraph",
        "content": "Ahora que nuestro proyecto está configurado, pasemos a implementar las operaciones CRUD para nuestra API. Crearemos un archivo app.ts dentro de una carpeta src, que contendrá toda la lógica de nuestra aplicación."
      },
      {
        "type": "code",
        "content": "// src/app.ts\nimport express, { Request, Response } from 'express';\n\nconst app = express();\nconst PORT = 3000;\n\napp.use(express.json());\n\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nlet users: User[] = [];\n\n// Crear un nuevo usuario\napp.post('/users', (req: Request, res: Response) => {\n  const user: User = { id: users.length + 1, name: req.body.name, email: req.body.email };\n  users.push(user);\n  res.status(201).json(user);\n});\n\n// Leer todos los usuarios\napp.get('/users', (req: Request, res: Response) => {\n  res.json(users);\n});\n\n// Leer un usuario por ID\napp.get('/users/:id', (req: Request, res: Response) => {\n  const user = users.find(u => u.id === parseInt(req.params.id));\n  if (user) {\n    res.json(user);\n  } else {\n    res.status(404).send('Usuario no encontrado');\n  }\n});\n\n// Actualizar un usuario\napp.put('/users/:id', (req: Request, res: Response) => {\n  const user = users.find(u => u.id === parseInt(req.params.id));\n  if (user) {\n    user.name = req.body.name || user.name;\n    user.email = req.body.email || user.email;\n    res.json(user);\n  } else {\n    res.status(404).send('Usuario no encontrado');\n  }\n});\n\n// Eliminar un usuario\napp.delete('/users/:id', (req: Request, res: Response) => {\n  const index = users.findIndex(u => u.id === parseInt(req.params.id));\n  if (index !== -1) {\n    users.splice(index, 1);\n    res.status(204).send();\n  } else {\n    res.status(404).send('Usuario no encontrado');\n  }\n});\n\n// Iniciar el servidor\napp.listen(PORT, () => {\n  console.log(`Servidor corriendo en http://localhost:${PORT}`);\n});",
        "language": "typescript"
      },
      {
        "type": "paragraph",
        "content": "Este código establece una API básica con endpoints para crear, leer, actualizar y eliminar usuarios. Utiliza TypeScript para definir interfaces y tipos, lo que ayuda a prevenir errores y mejora la legibilidad del código. A medida que tu aplicación crezca, esta estructura te permitirá escalar de manera eficiente, manteniendo la calidad y coherencia del código."
      },
      {
        "type": "paragraph",
        "content": "El uso de TypeScript no solo facilita el desarrollo con tipado estático, sino que también mejora la colaboración en equipo, al ofrecer una base sólida de tipos que todos los desarrolladores pueden seguir. Además, si decides expandir las funcionalidades de tu API en el futuro, tendrás una base de código robusta sobre la cual construir."
      },
      {
        "type": "paragraph",
        "content": "Finalmente, este ejemplo se ha mantenido simple para enfocarse en los conceptos clave. Sin embargo, en un entorno de producción, es recomendable integrar herramientas adicionales como un sistema de validación de entrada, autenticación y autorización, y manejo de errores centralizado. Estas prácticas asegurarán que tu API sea segura, confiable y fácil de mantener."
      },
      {
        "type": "link",
        "content": "Para más información sobre TypeScript y Node.js, visita la documentación oficial",
        "url": "https://www.typescriptlang.org/docs/"
      }
    ],
    "author": "Martín Iribas",
    "publishDate": "2024-07-15",
    "tags": [
      "Node.js",
      "TypeScript",
      "API",
      "Backend",
      "Desarrollo Web",
      "JavaScript"
    ],
    "image": "https://http2.mlstatic.com/D_NQ_NP_709580-MLU70776537722_072023-O.webp"
  },
  {
    id: 6,
    elements: [
        {
            type: "title",
            content: "Clsx: Manejo Eficiente de Clases en React y TypeScript"
        },
        {
            type: "paragraph",
            content: "Clsx es una biblioteca útil para manejar clases en aplicaciones de React y TypeScript (TSX). Permite combinar y condicionar clases CSS de manera eficiente, lo que es especialmente valioso cuando se trabaja con frameworks como Tailwind CSS."
        },
        {
            type: "title",
            content: "¿Qué es Clsx?"
        },
        {
            type: "paragraph",
            content: "Clsx es una pequeña biblioteca que facilita la concatenación de clases CSS. Su principal ventaja es que permite agregar clases condicionalmente, lo que significa que puedes incluir o excluir clases basadas en el estado de un componente o en props pasadas. Esto es útil para crear componentes reutilizables que pueden tener diferentes estilos según el contexto en el que se usen."
        },
        {
            type: "title",
            content: "¿Cómo funciona Clsx?"
        },
        {
            type: "paragraph",
            content: "El funcionamiento de Clsx es bastante sencillo. Se utiliza para combinar clases de la siguiente manera:"
        },
        {
            type: "code",
            content: `
                import clsx from 'clsx';
                
                const MyComponent = ({ isActive }) => {
                  return (
                    <div className={clsx('base-class', { 'active-class': isActive })}>
                      Content here
                    </div>
                  );
                };
            `,
            language: "javascript"
        },
        {
            type: "paragraph",
            content: "En este ejemplo, `base-class` siempre se aplicará, mientras que `active-class` se aplicará solo si `isActive` es verdadero. Esto permite un manejo dinámico y limpio de las clases en React."
        },
        {
            type: "title",
            content: "Integración con TypeScript"
        },
        {
            type: "paragraph",
            content: "Cuando se trabaja con TypeScript, es importante asegurarse de que las props de los componentes estén correctamente tipadas. Clsx se integra bien con TypeScript, permitiendo que los desarrolladores definan tipos para las props que controlan las clases. Por ejemplo:"
        },
        {
            type: "code",
            content: `
                interface MyComponentProps {
                  isActive: boolean;
                }
                
                const MyComponent: React.FC<MyComponentProps> = ({ isActive }) => {
                  return (
                    <div className={clsx('base-class', { 'active-class': isActive })}>
                      Content here
                    </div>
                  );
                };
            `,
            language: "typescript"
        },
        {
            type: "paragraph",
            content: "Esto no solo mejora la legibilidad del código, sino que también proporciona autocompletado y verificación de tipos en los editores, lo que reduce errores."
        },
        {
            type: "title",
            content: "Uso con Tailwind CSS"
        },
        {
            type: "paragraph",
            content: "Clsx es particularmente popular entre los desarrolladores que utilizan Tailwind CSS, ya que permite aplicar clases de Tailwind de manera condicional. Por ejemplo, puedes cambiar el color de fondo de un botón según su estado:"
        },
        {
            type: "code",
            content: `
                const Button = ({ isPrimary }) => {
                  return (
                    <button className={clsx('px-4 py-2', { 'bg-blue-500': isPrimary, 'bg-gray-500': !isPrimary })}>
                      Click me
                    </button>
                  );
                };
            `,
            language: "javascript"
        },
        {
            type: "paragraph",
            content: "En este caso, el botón tendrá un fondo azul si `isPrimary` es verdadero, y gris si es falso."
        },
        {
            type: "title",
            content: "Conclusión"
        },
        {
            type: "paragraph",
            content: "Clsx es una herramienta poderosa para manejar clases en aplicaciones de React y TypeScript, especialmente cuando se trabaja con Tailwind CSS. Su capacidad para condicionar clases de manera sencilla y eficiente mejora la claridad y la mantenibilidad del código."
        },
        {
            type: "title",
            content: "Citations"
        },
        {
            type: "link",
            content: "Video explicativo de Clsx",
            url: "https://www.youtube.com/watch?v=1Za0jqI8cOA"
        },
        {
            type: "link",
            content: "Guía para usar Clsx en proyectos",
            url: "https://stackoverflow.com/questions/57557271/clsx-what-is-and-how-to-use-it"
        }
    ],
    author: "@marto",
    publishDate: "2024-08-28",
    tags: ["React", "TypeScript", "Clsx", "Tailwind CSS", "Frontend", "JavaScript"],
}

];

/* 
{
    id: 3,
    elements: [
      {
        type: "title",
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "image",
        content:
          "https://example-url",
      },
      {
        type: "code",
        content: `
              ...
          `,
        language: "javascript",
      },
      {
        type: "link",
        content: "",
        url: ""
      },
    ],
    author: "@martogramer",
    publishDate: "2024-08-28",
    tags: ["", "", "", "", "", ""],
    image:
      "https://example-url-img",
  }
*/

export const mockProducts: Product[] = [];
export const Products: Product[] = [
  {
    id: 2,
    name: "T900 Pro Max",
    imageUrl: [
      "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1720620632/w26-removebg-preview_n5h2kc.jpg?_s=public-apps",
      "https://res.cloudinary.com/diohw2jdj/image/upload/fl_preserve_transparency/v1720620616/t900-pro-max-serie8-removebg-preview_h2znvz.jpg?_s=public-apps",
    ],
    category: "SmartWatchs",
    price: 19999,
  },
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Tips for Productive Remote Work",
    content:
      "Working from home can be challenging, but with these tips, you can boost your productivity...",
    tags: ["Remote Work", "Productivity"],
    author: "Martin Iribas",
    publishDate: "2022-01-01",
  },
];
