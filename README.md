# Arquitectura Hexagonal + Atomic Design en Angular


## Tabla de Contenidos

- [Descripción](#descripción)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Conceptos clave](#conceptos-clave)
- [Conexión entre capas](#conexión-entre-capas)
- [Cómo iniciar el proyecto](#cómo-iniciar-el-proyecto)
- [Recursos recomendados](#recursos-recomendados)

## Descripción  
Este proyecto utiliza arquitectura hexagonal para separar la lógica del negocio del resto, y atomic design para organizar la interfaz en componentes pequeños y reutilizables.

## Estructura de carpetas

1. **core/**  
- Aquí va la lógica del negocio, sin depender de Angular ni tecnología.  
- `models/`: define entidades (por ejemplo, Todo).  
- `services/`: casos de uso y lógica de negocio.  
- `repositories/`: interfaces para acceder a datos o servicios externos.

2. **infrastructure/**  
- Implementación concreta de acceso a datos o servicios externos.  
- `persistence/`: almacenamiento local, API REST, etc.  
- `services/`: otros servicios externos (ejemplo: autenticación).

3. **ui/**  
- Toda la capa visual y la interfaz.  
- `components/`: divididos en:  
  - `atoms/`: componentes básicos (botones, inputs, iconos).  
  - `molecules/`: combinación simple de atoms (un ítem de lista).  
  - `organisms/`: bloques más grandes (lista completa de tareas).  
- `layouts/`: estructura general de páginas (header, footer).  
- `pages/`: vistas completas como login, landing page, dashboard.

4. **shared/**  
- Componentes, pipes, directivas, utilidades que se usan en toda la app.  
- `components/`: botones genéricos, modales, loaders.  
- `pipes/`: transformaciones para vistas.  
- `directives/`: directivas reutilizables.  
- `utils/`: funciones de ayuda.

5. **assets/**  
- Imágenes, fuentes, archivos estáticos.

6. **environments/**  
- Configuración para diferentes ambientes (desarrollo, producción).

## Conceptos clave

- **Arquitectura Hexagonal:** separa el dominio (core) de la infraestructura con puertos (interfaces) y adaptadores (implementaciones concretas).  
- **Atomic Design:** estructura la UI desde piezas básicas (átomos) hacia combinaciones más complejas (moléculas, organismos), hasta páginas completas.

## Conexión entre capas

- La carpeta `ui/` consume la lógica de `core/` sin saber detalles de infraestructura.  
- La carpeta `infrastructure/` implementa las interfaces definidas en `core/`.  
- La carpeta `shared/` contiene elementos reutilizables en toda la aplicación.

## Cómo iniciar el proyecto

1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación:
   ```bash
   npm start
   ```

## Recursos recomendados

- [Hexagonal Architecture (Alistair Cockburn)](https://alistair.cockburn.us/hexagonal-architecture/)
- [Atomic Design (Brad Frost)](https://bradfrost.com/blog/post/atomic-web-design/)
- [Angular Official Documentation](https://angular.io/docs)

---

