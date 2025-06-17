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
    elements: [
      {
        type: "title",
        content: "Colaboración en Proyectos Open Source usando GitHub",
      },
      {
        type: "paragraph",
        content: "Contribuir a proyectos open source es una excelente manera de mejorar tus habilidades y de colaborar en proyectos de impacto. GitHub es una de las plataformas más utilizadas para gestionar el código de estos proyectos, y saber cómo trabajar correctamente con ramas y flujos de trabajo colaborativos es crucial para una colaboración eficiente y sin conflictos.",
      },
      {
        type: "image",
        content: "https://example-url/colaboracion-github.png",
      },
      {
        type: "title",
        content: "1. Flujo de Trabajo en GitHub",
      },
      {
        type: "paragraph",
        content: "En proyectos open source, el flujo de trabajo de GitHub sigue un esquema que asegura la integridad y calidad del código. Este flujo de trabajo consiste en crear ramas para cada cambio, hacer commits con buenas prácticas, y colaborar mediante Pull Requests (PR). Aquí detallamos el flujo de trabajo recomendado para colaborar en el Proyecto Template.",
      },
      {
        type: "title",
        content: "2. Estructura de Ramas",
      },
      {
        type: "paragraph",
        content: "Para mantener un control y organización del código, usamos diferentes ramas para cada tipo de cambio. La convención de ramas para este proyecto es la siguiente:",
      },
      {
        type: "code",
        content: `
        - main: Contiene el código listo para producción.
        - develop: Ramas activas de desarrollo, donde se integran las funcionalidades antes de pasar a main.
        - feature/[nombre]: Ramas dedicadas a nuevas funcionalidades o componentes (e.g., feature/login-page).
        - fix/[nombre]: Ramas para corregir errores o bugs (e.g., fix/navbar-styles).
        - hotfix/[nombre]: Ramas para correcciones urgentes en la rama principal (e.g., hotfix/crash-on-load).
        `,
        language: "plaintext",
      },
      {
        type: "title",
        content: "3. Creación y Uso de Ramas",
      },
      {
        type: "paragraph",
        content: "Cada cambio que realices en el proyecto debe estar en su propia rama. Esto asegura que cualquier cambio específico no interfiera con el resto del código. A continuación se describe cómo crear y trabajar con ramas correctamente en GitHub.",
      },
      {
        type: "title",
        content: "3.1 Crear una Rama para una Nueva Funcionalidad o Corrección",
      },
      {
        type: "paragraph",
        content: "Antes de empezar a trabajar, asegúrate de tener el código actualizado en tu rama principal (main o develop). Crea una nueva rama basada en develop para cada cambio o funcionalidad nueva.",
      },
      {
        type: "code",
        content: `
        git checkout develop
        git pull origin develop
        git checkout -b feature/[nombre-de-la-funcionalidad]
        `,
        language: "bash",
      },
      {
        type: "paragraph",
        content: "En este ejemplo, estamos creando una rama llamada `feature/login-page`. Asegúrate de utilizar nombres descriptivos y de seguir la convención `feature/` o `fix/` según corresponda.",
      },
      {
        type: "title",
        content: "3.2 Hacer Commit de los Cambios",
      },
      {
        type: "paragraph",
        content: "Los commits deben ser descriptivos y contener solo un cambio o conjunto de cambios relacionados. Esto facilita la revisión y ayuda a identificar rápidamente qué cambios se hicieron y por qué.",
      },
      {
        type: "code",
        content: `
        git add .
        git commit -m "feat: añade componente de formulario de inicio de sesión"
        `,
        language: "bash",
      },
      {
        type: "paragraph",
        content: "Para el mensaje de commit, sigue la convención `tipo: descripción breve`. Los tipos recomendados son:\n- `feat`: Para nuevas funcionalidades.\n- `fix`: Para corrección de errores.\n- `docs`: Para cambios en la documentación.\n- `style`: Cambios de formato (sin afectar la lógica de código).\n- `refactor`: Refactorización de código.\n- `test`: Para añadir o corregir pruebas.\n- `chore`: Cambios de mantenimiento y configuración.",
      },
      {
        type: "title",
        content: "3.3 Subir los Cambios a GitHub",
      },
      {
        type: "paragraph",
        content: "Una vez realizados los commits, sube tu rama a GitHub para abrir un Pull Request (PR).",
      },
      {
        type: "code",
        content: `
        git push origin feature/[nombre-de-la-funcionalidad]
        `,
        language: "bash",
      },
      {
        type: "paragraph",
        content: "Esto sube tu rama `feature/login-page` a GitHub. Puedes ir a GitHub para abrir un Pull Request y solicitar que se revise tu código.",
      },
      {
        type: "title",
        content: "4. Creación de Pull Requests (PR)",
      },
      {
        type: "paragraph",
        content: "Los Pull Requests permiten que otros colaboradores revisen tu código. En el PR, explica los cambios realizados y proporciona cualquier contexto relevante. Usa la plantilla de PR si está disponible, y sigue las prácticas recomendadas para una descripción clara y concisa.",
      },
      {
        type: "image",
        content: "https://example-url/pull-request-template.png",
      },
      {
        type: "title",
        content: "5. Resolución de Conflictos",
      },
      {
        type: "paragraph",
        content: "Es posible que encuentres conflictos al intentar fusionar tu PR si otros cambios se han fusionado en la rama base. Para resolverlos, realiza un rebase o merge de la rama base en tu rama de funcionalidad antes de intentar fusionar.",
      },
      {
        type: "code",
        content: `
        git checkout feature/[nombre-de-la-funcionalidad]
        git pull origin develop
        # Resolver conflictos, si los hay, y hacer commit
        git push origin feature/[nombre-de-la-funcionalidad]
        `,
        language: "bash",
      },
      {
        type: "paragraph",
        content: "Si no estás seguro sobre cómo resolver los conflictos, consulta a un compañero de equipo o en el canal de colaboración.",
      },
      {
        type: "title",
        content: "6. Aprobación y Fusión del Pull Request",
      },
      {
        type: "paragraph",
        content: "Después de una revisión y aprobación, tu PR será fusionado en la rama base correspondiente. Si estás autorizado, puedes realizar la fusión tú mismo; de lo contrario, el administrador del proyecto lo hará.",
      },
      {
        type: "link",
        content: "Documentación de GitHub sobre Pull Requests",
        url: "https://docs.github.com/en/pull-requests",
      },
    ],
    author: "@martogramer",
    publishDate: "2024-08-28",
    tags: [
      "GitHub",
      "Open Source",
      "Colaboración",
      "Ramas",
      "Pull Requests",
      "Flujo de Trabajo",
    ],
    title: "Guía básica para colaboradores"
  }
];
