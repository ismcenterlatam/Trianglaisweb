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

Este proyecto emplea un stack tecnológico moderno para garantizar el rendimiento, la escalabilidad y una excelente experiencia para el desarrollador.

### Frontend
- **Framework**: React (v18+) - Construido como una SPA (Single Page Application) con enrutamiento simulado.
- **Lenguaje**: TypeScript - Para una seguridad de tipos robusta y una mejor calidad del código.
- **Estilos**: Tailwind CSS - Un framework de CSS "utility-first" para un desarrollo de interfaz de usuario rápido y consistente.
- **Gestión de Estado**: React Context API - Para gestionar el estado global del idioma y la navegación.
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
├── public/
│   └── index.html
├── components/         # Componentes de UI reutilizables (Header, Footer, etc.)
├── contexts/           # Gestores de estado global (LanguageContext)
├── lib/                # Lógica de negocio y datos (translations)
├── pages/              # Componentes que representan una página completa
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Method.tsx
│   └── Contact.tsx
├── App.tsx             # Componente principal y enrutador
├── index.tsx           # Punto de entrada de la aplicación
└── README.md           # Este archivo
```

## 5. Desarrollo con Gemini AI

Una parte significativa de la estructura, los componentes, la lógica de internacionalización y el código de este proyecto fue generada y refactorizada utilizando la IA Gemini de Google. Este enfoque aceleró el proceso de desarrollo al:
- Estructurar rápidamente el proyecto React + TypeScript.
- Generar componentes limpios, funcionales y reutilizables con Tailwind CSS.
- Implementar un sistema multi-idioma y crear páginas nuevas desde cero.
- Proporcionar contenido de marcador de posición de alta calidad e ideas de diseño.
- Asegurar la adherencia a las mejores prácticas modernas en el desarrollo web.

Este modelo de desarrollo asistido por IA nos permite centrarnos más en la lógica de negocio y las características únicas, en lugar de en la configuración repetitiva y el código de la interfaz de usuario.

## 6. Cómo Empezar

Para ejecutar este proyecto localmente, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone <url-del-repositorio>
    cd <directorio-del-proyecto>
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run start
    ```

Esto iniciará la aplicación en `http://localhost:3000` (u otro puerto disponible).