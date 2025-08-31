# TRIANGLAIS - Academia de Aprendizaje de Idiomas Frontend

Bienvenido al repositorio oficial de la aplicación frontend de la Academia de Aprendizaje de Idiomas TRIANGLAIS. Este documento proporciona una descripción general completa de la arquitectura del proyecto, el stack tecnológico y las pautas de desarrollo.

## 1. Visión del Proyecto

TRIANGLAIS tiene como objetivo ser una plataforma en línea de primer nivel para la educación de idiomas. Este proyecto constituye el sitio web principal, que servirá como el punto de entrada principal para los futuros estudiantes. Está diseñado para ser atractivo, informativo, multi-idioma y para integrarse sin problemas con nuestros servicios de backend y el campus de aprendizaje basado en Moodle.

Los objetivos clave son:
- Crear una interfaz visualmente atractiva, futurista y fácil de usar.
- Presentar claramente la información sobre los cursos, la metodología de enseñanza y la misión de la academia a través de páginas dedicadas.
- Ofrecer contenido en Español, Inglés y Francés.
- Construir una base de código escalable y mantenible para futuras expansiones.

## 2. Stack Tecnológico y Arquitectura

<p align="center">
  <a href="https://react.dev/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="60" height="60" style="margin: 10px;"/></a>
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="60" height="60" style="margin: 10px;"/></a>
  <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" width="60" height="60" style="margin: 10px;"/></a>
  <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" width="60" height="60" style="margin: 10px;"/></a>
  <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg" alt="Django" width="60" height="60" style="margin: 10px;"/></a>
  <a href="https://moodle.org/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Moodle-logo.svg" alt="Moodle" width="60" height="60" style="margin: 10px;"/></a>
  <a href="https://almalinux.org/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/almalinux/almalinux-original.svg" alt="AlmaLinux" width="60" height="60" style="margin: 10px;"/></a>
  <a href="https://httpd.apache.org/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg" alt="Apache" width="60" height="60" style="margin: 10px;"/></a>
</p>

Este proyecto emplea un stack tecnológico moderno para garantizar el rendimiento, la escalabilidad y una excelente experiencia para el desarrollador.

### Frontend
- **Framework**: React (v18+) - Construido como una SPA (Single Page Application) con enrutamiento simulado.
- **Lenguaje**: TypeScript - Para una seguridad de tipos robusta y una mejor calidad del código.
- **Estilos**: Tailwind CSS - Un framework de CSS "utility-first" para un desarrollo de interfaz de usuario rápido y consistente, cargado vía CDN.
- **Gestión de Estado**: React Context API - Para gestionar el estado global del idioma y la navegación.
- **SEO**: Gestión centralizada de metaetiquetas (título, descripción, canónicas, hreflang) y datos estructurados (JSON-LD) para un rendimiento de búsqueda multilingüe óptimo.
- **Componentes de UI**: Componentes reutilizables construidos con React y TypeScript.

### Backend
- **Lenguaje**: Python
- **Framework**: Django - Para potenciar nuestra API, la gestión de usuarios y la lógica de negocio.

### Sistema de Gestión de Aprendizaje (LMS)
- **Plataforma**: Moodle - El campus de aprendizaje para estudiantes será una instalación de Moodle separada y dedicada.

## 3. Detalles de la Infraestructura

La aplicación se alojará en un Servidor Privado Virtual (VPS) dedicado con las siguientes especificaciones:

- **Sistema Operativo**: AlmaLinux 9.6
- **Servidor Web**: Apache 2.4
- **IP del Servidor**: `72.60.30.253`
- **Dominio**: `https://trianglais.com`

## 4. Estructura del Proyecto

El proyecto sigue una estructura lógica y escalable:

```
/
├── assets/             # Imágenes, videos y otros recursos estáticos
│   ├── team-photo.svg
│   └── learning-process.svg
├── components/         # Componentes de UI reutilizables (Header, Seo, Hero, etc.)
├── constants/          # Iconos SVG y otras constantes
├── contexts/           # Gestores de estado global (LanguageContext)
├── lib/                # Lógica de negocio y datos (translations)
├── pages/              # Componentes que representan una página completa
│   ├── Home.tsx
│   ├── AboutPage.tsx
│   ├── Method.tsx
│   └── Contact.tsx
├── App.tsx             # Componente principal y enrutador
├── index.html          # Archivo HTML de entrada principal
├── index.tsx           # Punto de entrada de la aplicación React
├── metadata.json       # Metadatos de la aplicación
└── README.md           # Este archivo
```

## 5. Desarrollo con Gemini AI

<p align="center">
  <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" alt="Gemini AI" width="150">
  </a>
</p>

Una parte significativa de la estructura, los componentes, la lógica de internacionalización y el código de este proyecto fue generada y refactorizada utilizando la IA Gemini de Google. Este enfoque aceleró el proceso de desarrollo al:
- Estructurar rápidamente el proyecto React + TypeScript.
- Generar componentes limpios, funcionales y reutilizables con Tailwind CSS.
- Implementar un sistema multi-idioma y crear páginas nuevas desde cero.
- Proporcionar contenido de marcador de posición de alta calidad e ideas de diseño.
- Asegurar la adherencia a las mejores prácticas modernas en el desarrollo web.

Este modelo de desarrollo asistido por IA nos permite centrarnos más en la lógica de negocio y las características únicas, en lugar de en la configuración repetitiva y el código de la interfaz de usuario.

## 6. Cómo Empezar

Este proyecto es una aplicación frontend pura que no requiere un proceso de compilación ni instalación de dependencias de `npm`. Puede ser servido directamente desde cualquier servidor web estático.

Para ejecutar este proyecto localmente, sigue estos pasos:

1.  **Asegúrate de tener todos los archivos del proyecto en un directorio.**

2.  **Inicia un servidor web local.** Una de las formas más sencillas de hacerlo es con Python. Abre tu terminal en el directorio del proyecto y ejecuta uno de los siguientes comandos (dependiendo de tu versión de Python):

    *   **Python 3.x:**
        ```bash
        python -m http.server 8000
        ```

    *   **Python 2.x:**
        ```bash
        python -m SimpleHTTPServer 8000
        ```

3.  **Abre tu navegador** y visita `http://localhost:8000`.

Alternativamente, puedes usar extensiones como "Live Server" en Visual Studio Code para servir el `index.html` directamente.
