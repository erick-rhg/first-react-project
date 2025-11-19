# 🔴 Pokédex Manager

Una aplicación de página única (SPA) construida con **React** y **TypeScript** que permite explorar la primera generación de Pokémon y gestionar un equipo de combate personalizado.

🔗 **[Ver Demo en Vivo](https://erick-rhg.github.io/first-react-project/)**

## 🚀 Descripción

Este es el primer proyecto React realizado. El objetivo principal fue aplicar patrones de arquitectura modernos, separación de responsabilidades y tipado estricto en un entorno realista consumiendo la **PokéAPI**.

La aplicación permite buscar Pokémon en tiempo real, añadirlos o quitarlos de un equipo (con un límite de 6) y filtrar la vista para gestionar solo los seleccionados.

## 🛠️ Tecnologías y Conceptos Aplicados

Este proyecto es solo **React Core** para poder enteder las bases:

### ⚛️ React & Lógica
* **Custom Hooks:** Separación de lógica y vista (`usePokemon` para fetching y `useTeam` para reglas de negocio).
* **Gestión de Estado Compleja:** Manejo de arrays inmutables, actualización funcional de estados y lógica derivada.
* **Efectos Secundarios:** Consumo de API asíncrona con `useEffect` y `fetch`.
* **Lifting State Up:** Comunicación entre componentes padres e hijos mediante props y callbacks.

### 📐 Arquitectura y Patrones
* **Patrón de Composición:** Creación de componentes contenedores reutilizables (`Card`) para evitar prop drilling y duplicación de estilos.
* **Feature-Based Architecture:** Organización de carpetas escalable (`features/`, `components/`, `hooks/`).
* **Componentes Controlados:** Inputs de búsqueda gestionados por el estado de React.
* **Separación de Responsabilidades:** Distinción clara entre componentes "Inteligentes" (Lógica) y "Tontos" (UI).

### 🛡️ TypeScript
* **Interfaces y Tipos:** Definición estricta de contratos de API y Props de componentes.
* **Data Transformation:** Adaptación de los datos "crudos" de la API a interfaces limpias para el frontend.

### 🎨 Estilos
* **CSS Modules:** Estilos con ámbito local para evitar colisiones y mantener el código modular.

## ✨ Funcionalidades

* Listado de los 151 Pokémon originales.
* Buscador en tiempo real (filtrado por nombre).
* Gestión de equipo (Añadir/Quitar) con persistencia durante el filtrado.
* Validación de lógica de negocio (Máximo 6 Pokémon por equipo).
* Modo "Ver solo mi equipo".

**Screenshots:** ![Vista Previa del Proyecto](/public/erick-rhg.github.io_first-react-project.png)
![Vista Previa de Ver solo Equipo](/public/filter-team.png)