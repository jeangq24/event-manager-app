# Event Manager App

## Descripción general

Este proyecto es la solución al **Reto Técnico Frontend – Perfil React**. Consiste en una aplicación web que simula una pequeña plataforma de exploración de eventos, donde el usuario puede:

- Ver un listado de eventos en formato de grilla/cards con información básica.
- Ver el detalle completo de un evento al hacer clic.
- Filtrar los eventos por categoría y fecha.
- Buscar eventos por nombre.

## Funcionalidades principales

- **Listado de eventos:**  
  Visualización de eventos en tarjetas responsivas, mostrando nombre, imagen, fecha, tipo (virtual, presencial, híbrido) y categoría.
- **Búsqueda:**  
  Campo de búsqueda para filtrar eventos por nombre.
- **Filtros:**  
  Filtro por categoría (dropdown) y por fecha (selector de calendario).
- **Vista de detalle:**  
  Al seleccionar un evento, se muestra una vista con toda la información: título, imagen destacada, fecha, tipo, ubicación (si aplica), descripciones y botón de "Volver".
- **Responsividad:**  
  El diseño se adapta a dispositivos móviles, tablets y escritorio.
- **Animaciones y loaders:**  
  Transiciones suaves y loader visual durante la carga de datos.

## Requisitos técnicos cumplidos

- Desarrollado en **React** con **Vite**.
- Sistema de estilos con **TailwindCSS** y componentes de **shadcn/ui**.
- Navegación entre vistas usando **React Router**.
- Organización modular del código (componentes, servicios, contextos, vistas).
- Uso de **Context API** para el manejo global de eventos, filtros y búsqueda.
- Datos mockeados en archivo JSON y simulación de fetch.
- Animaciones sutiles con **Framer Motion**.
- Código limpio y tipado con **TypeScript**.

## Librerías y frameworks utilizados

- **React** `^19.1.0`
- **Vite** `^7.0.0`
- **TypeScript** `~5.8.3`
- **TailwindCSS** `^4.1.11`
- **shadcn/ui** (componentes UI)
- **Framer Motion** `^12.19.2`
- **Lucide React** (iconos) `^0.525.0`
- **date-fns** (fechas) `^4.1.0`
- **React Router DOM** `^7.6.3`
- **@radix-ui/react-dropdown-menu** y **@radix-ui/react-popover** (UI)
- **Datos mockeados** en archivo JSON local

## Estructura del proyecto

- `/src/components` – Componentes reutilizables (cards, filtros, loader, navbar, etc.)
- `/src/pages` – Vistas principales (Home, NotFound)
- `/src/layouts` – Layout principal
- `/src/context` – Contexto global para eventos y filtros
- `/src/services` – Servicios para obtención de datos (mock)
- `/src/types` – Tipos TypeScript
- `/src/data` – Archivo JSON con eventos de ejemplo

## Cómo ejecutar el proyecto

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Inicia el entorno de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.