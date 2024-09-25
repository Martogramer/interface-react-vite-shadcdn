

# Interface React Vite Shadcdn

¡Bienvenido a **Interface React Vite Shadcdn**! Este proyecto es una interfaz de usuario construida con React y Vite, utilizando diversas bibliotecas y herramientas modernas para una experiencia de desarrollo óptima.

## Descripción del Proyecto

Este proyecto combina React con Vite para una configuración de desarrollo rápida y eficiente. Se utilizan componentes de Radix UI para la interfaz de usuario, Redux Toolkit para la gestión de estado, y Tailwind CSS para los estilos. Además, se integran varias utilidades como framer-motion para animaciones y axios para realizar solicitudes HTTP.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`

Inicia la aplicación en modo desarrollo.
Abre [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`.
La compilación está optimizada y los archivos están listos para desplegarse.

### `npm run preview`

Sirve la aplicación construida para producción localmente.
Esto es útil para probar la aplicación antes de desplegarla.

### `npm run lint`

Ejecuta ESLint para analizar el código en busca de problemas de estilo y errores.

## Dependencias

El proyecto utiliza las siguientes dependencias principales:

- **React** y **React DOM**: Para construir la interfaz de usuario.
- **Radix UI**: Conjunto de componentes accesibles y sin estilo para construir interfaces.
- **Redux Toolkit**: Para la gestión de estado global.
- **React Router DOM**: Para la navegación en la aplicación.
- **Axios**: Para realizar solicitudes HTTP.
- **Tailwind CSS**: Para la estilización de componentes.
- **Framer Motion**: Para animaciones.

## Dependencias de Desarrollo

Para un flujo de trabajo de desarrollo eficiente, se utilizan las siguientes herramientas:

- **Vite**: Para el bundling y servidor de desarrollo.
- **TypeScript**: Para añadir tipado estático a JavaScript.
- **ESLint** y **@typescript-eslint**: Para mantener la calidad del código.
- **Tailwind CSS**: Para estilos rápidos y consistentes.
- **Babel**: Para la transpilación de código moderno.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Martogramer/interface-react-vite-shadcdn.git
   cd interface-react-vite-shadcdn
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

# Guía de Contribución para `interface-react-vite-shadcdn`

¡Gracias por tu interés en contribuir a este proyecto! Aquí hay algunas pautas y pasos para ayudarte a empezar.

## 1. Cómo empezar

1. **Forkea el repositorio**: Haz clic en el botón "Fork" en la parte superior derecha de la página del repositorio para crear una copia de este repositorio en tu cuenta de GitHub.
2. **Clona el repositorio forkeado**:
    
    ```bash
    git clone <https://github.com/Martogramer/interface-react-vite-shadcdn.git>
    ```
    
3. **Navega al directorio del proyecto**:
    
    ```bash
    cd interface-react-vite-shadcdn
    ```
    
4. **Instala las dependencias**:
    
    ```bash
    npm install
    ```
    
5. **Crea una rama para tus cambios**:
    
    ```bash
    git checkout -b nombre-de-tu-rama
    ```

## 2. Haciendo cambios

- Asegúrate de seguir el estilo de codificación y las convenciones utilizadas en el proyecto.
- Si estás añadiendo una nueva funcionalidad, incluye pruebas y documentación.
- Si estás arreglando un error, incluye una descripción clara del problema y cómo lo solucionaste.

## 3. Comandos útiles

- **Para ejecutar la aplicación en modo de desarrollo**:
    
    ```bash
    npm run dev
    ```
    
- **Para ejecutar las pruebas**:
    
    ```bash
    npm test
    ```

## 4. Enviando tus cambios

1. **Asegúrate de que tu rama esté actualizada**:
    
    ```bash
    git pull origin main
    ```
    
2. **Añade tus cambios**:
    
    ```bash
    git add .
    ```
    
3. **Haz un commit de tus cambios**:
    
    ```bash
    git commit -m "Descripción clara de tus cambios"
    ```
    
4. **Sube tus cambios a tu repositorio forkeado**:
    
    ```bash
    git push origin nombre-de-tu-rama
    ```
    
5. **Crea un Pull Request**: Ve a la página de GitHub de tu repositorio forkeado y haz clic en el botón "New Pull Request".

## 5. Estilo de los commits

Por favor, utiliza mensajes de commit claros y descriptivos. Aquí hay algunos ejemplos:

- `✨ Añadida nueva funcionalidad para...`
- `🛠️ Refactorizado componente X para mejorar...`
- `🐛 Arreglado error en...`
- `📄 Actualizada documentación para...`

## 6. Revisión de Pull Requests

- Asegúrate de que tu Pull Request pase todas las pruebas automatizadas.
- Sé claro y conciso en la descripción de tu Pull Request.
- Responde a las revisiones y comentarios de manera oportuna.

## 7. Comunicación

Si tienes alguna pregunta o necesitas ayuda, no dudes en abrir un issue en GitHub.

---

¡Gracias por contribuir! Tu ayuda es muy apreciada.


## Estándares de Codificación

- Sigue la guía de estilo de [Airbnb](https://github.com/airbnb/javascript).
- Usa `Prettier` para formatear el código automáticamente.
- Ejecuta `ESLint` antes de enviar un pull request.

## Pruebas

- Asegúrate de que todas las pruebas existentes pasen.
- Agrega pruebas para las nuevas funcionalidades.
- Ejecuta `npm test` para correr las pruebas.

## Comunicación

- Utiliza los issues de GitHub para reportar bugs o sugerir nuevas funcionalidades.
- Si tienes alguna pregunta, no dudes en abrir un issue o contactarnos a través de [correo electrónico](mailto:tuemail@example.com).

---

¡Esperamos tus contribuciones!


# arquitectura


``` 
.
├── public
├── src
|   ├── api
|   |   └── autentication.ts
|   ├── assets
|   |   ├── banner.png
|   |   └── logo.png
|   ├── components
|   |   ├── commons
|   |   ├── sections
|   |   |   ├── GridSection
|   |   |   └── HomeFormSection.tsx
|   |   ├── Login.tsx
|   |   ├── LoginFormEj.tsx
|   |   ├── Register.tsx
|   |   └── SideBar.tsx
|   ├── features
|   |   └── CreatedSlice.ts
|   ├── layouts
|   |   ├── Admin.tsx
|   |   └── User.tsx
|   ├── pages
|   |   ├── Admin
|   |   |   ├── 
|   |   |   └── 
|   |   ├── User
|   |   |   ├── 
|   |   |   └── 
|   |   ├── Home.tsx
|   |   ├── LoginPage.tsx
|   |   └── RegisterPage.tsx
|   ├── services
|   |   └── services.tsx
|   ├── store
|   |   └── Store.ts
|   ├── 
|   ├── styles
|   |   └── Global.ts
|   ├── test
|   |   └── App.test.js
|   ├── utils
|   |   └── errorHandler.js
|   ├── App.tsx
|   ├── index.css
|   └── main.tsx
├── vite.config.ts
├── package.json
├── tsconfig.node.json
├── README.md
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── jest.config.js
├── index.html
└── babel.config.js
```

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- **Correo electrónico**: [contacto@martogramer.com](mailto:luismartiniribas@gmail.com)
- **LinkedIn**: [Tu Perfil de LinkedIn](https://www.linkedin.com/in/martogramer/)
- **Twitter**: [Tu Perfil de Twitter](https://x.com/telescopiens)

---


¡Gracias por visitar este proyecto! Espero que lo encuentres útil y divertido de usar.

``` 

                                  _______
                           _,,ad8888888888bba,_
                        ,ad88888I888888888888888ba,
                      ,88888888I88888888888888888888a,
                    ,d888888888I8888888888888888888888b,
                   d88888PP"""" ""YY88888888888888888888b,
                 ,d88"'__,,--------,,,,.;ZZZY8888888888888,
                ,8IIl'"                ;;l"ZZZIII8888888888,
               ,I88l;'                  ;lZZZZZ888III8888888,
             ,II88Zl;.                  ;llZZZZZ888888I888888,
            ,II888Zl;.                .;;;;;lllZZZ888888I8888b
           ,II8888Z;;                 `;;;;;''llZZ8888888I8888,
           II88888Z;'                        .;lZZZ8888888I888b
           II88888Z; _,aaa,      .,aaaaa,__.l;llZZZ88888888I888
           II88888IZZZZZZZZZ,  .ZZZZZZZZZZZZZZ;llZZ88888888I888,
           II88888IZZ<'(@@>Z|  |ZZZ<'(@@>ZZZZ;;llZZ888888888I88I
          ,II88888;   `""" ;|  |ZZ; `"""     ;;llZ8888888888I888
          II888888l            `;;          .;llZZ8888888888I888,
         ,II888888Z;           ;;;        .;;llZZZ8888888888I888I
         III888888Zl;    ..,   `;;       ,;;lllZZZ88888888888I888
         II88888888Z;;...;(_    _)      ,;;;llZZZZ88888888888I888,
         II88888888Zl;;;;;' `--'Z;.   .,;;;;llZZZZ88888888888I888b
         ]I888888888Z;;;;'   ";llllll;..;;;lllZZZZ88888888888I8888,
         II888888888Zl.;;"Y88bd888P";;,..;lllZZZZZ88888888888I8888I
         II8888888888Zl;.; `"PPP";;;,..;lllZZZZZZZ88888888888I88888
         II888888888888Zl;;. `;;;l;;;;lllZZZZZZZZW88888888888I88888
         `II8888888888888Zl;.    ,;;lllZZZZZZZZWMZ88888888888I88888
          II8888888888888888ZbaalllZZZZZZZZZWWMZZZ8888888888I888888,
          `II88888888888888888b"WWZZZZZWWWMMZZZZZZI888888888I888888b
           `II88888888888888888;ZZMMMMMMZZZZZZZZllI888888888I8888888
            `II8888888888888888 `;lZZZZZZZZZZZlllll888888888I8888888,
             II8888888888888888, `;lllZZZZllllll;;.Y88888888I8888888b,
            ,II8888888888888888b   .;;lllllll;;;.;..88888888I88888888b,
            II888888888888888PZI;.  .`;;;.;;;..; ...88888888I8888888888,
            II888888888888PZ;;';;.   ;. .;.  .;. .. Y8888888I88888888888b,
           ,II888888888PZ;;'                        `8888888I8888888888888b,
           II888888888'                              888888I8888888888888888b
          ,II888888888                              ,888888I88888888888888888
         ,d88888888888                              d888888I8888888888ZZZZZZZ
      ,ad888888888888I                              8888888I8888ZZZZZZZZZZZZZ
    ,d888888888888888'                              888888IZZZZZZZZZZZZZZZZZZ
  ,d888888888888P'8P'                               Y888ZZZZZZZZZZZZZZZZZZZZZ
 ,8888888888888,  "                                 ,ZZZZZZZZZZZZZZZZZZZZZZZZ
d888888888888888,                                ,ZZZZZZZZZZZZZZZZZZZZZZZZZZZ
888888888888888888a,      _                    ,ZZZZZZZZZZZZZZZZZZZZ888888888
888888888888888888888ba,_d'                  ,ZZZZZZZZZZZZZZZZZ88888888888888
8888888888888888888888888888bbbaaa,,,______,ZZZZZZZZZZZZZZZ888888888888888888
88888888888888888888888888888888888888888ZZZZZZZZZZZZZZZ888888888888888888888
8888888888888888888888888888888888888888ZZZZZZZZZZZZZZ88888888888888888888888
888888888888888888888888888888888888888ZZZZZZZZZZZZZZ888888888888888888888888
8888888888888888888888888888888888888ZZZZZZZZZZZZZZ88888888888888888888888888
88888888888888888888888888888888888ZZZZZZZZZZZZZZ8888888888888888888888888888
8888888888888888888888888888888888ZZZZZZZZZZZZZZ8888888888888 Martogramer  88
88888888888888888888888888888888ZZZZZZZZZZZZZZ888888888888888 Telescopiens 88
8888888888888888888888888888888ZZZZZZZZZZZZZZ88888888888888888888888888888888

``` 