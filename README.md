# Sistema de Administración de Productos y Empleados

Este es un proyecto web full-stack diseñado para la gestión de productos y empleados. La aplicación cuenta con un backend que expone una API REST, un frontend para la interacción del usuario y una base de datos relacional para la persistencia de datos.

## Tecnologías Utilizadas

El proyecto está construido con las siguientes tecnologías:

- **Backend**:
  - Java 17
  - Spring Boot 3
  - Spring Web
  - Spring Data JPA
  - Maven

- **Frontend**:
  - Angular 17
  - TypeScript
  - HTML5 y CSS3
  - Node.js

- **Base de Datos**:
  - SQL (Compatible con MySQL, PostgreSQL, etc.)

## Estructura del Proyecto

El repositorio está organizado en tres carpetas principales:

- `Backend/`: Contiene la aplicación de servidor construida con Java y Spring Boot.
- `Frontend/`: Contiene la aplicación cliente construida con Angular.
- `Base de datos/`: Incluye los scripts SQL para la creación del esquema y las tablas de la base de datos.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado el siguiente software:

- JDK 17 o superior.
- Apache Maven.
- Node.js y npm.
- Angular CLI (`npm install -g @angular/cli`).
- Un gestor de base de datos SQL (por ejemplo, MySQL Workbench o DBeaver).

## Guía de Instalación y Puesta en Marcha

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### 1. Configuración de la Base de Datos

1.  Abre tu cliente de base de datos y crea una nueva base de datos. Se recomienda nombrarla `gestion_db`.
2.  Ejecuta los scripts SQL que se encuentran en la carpeta `Base de datos/`:
    - `bd_empleado_empleado.sql` para crear la tabla de empleados.
    - `bd_empleado_producto.sql` para crear la tabla de productos.

### 2. Configuración del Backend

1.  Navega al directorio del backend:
    ```sh
    cd Backend
    ```
2.  Abre el archivo de configuración `src/main/resources/application.properties`.
3.  Actualiza las siguientes propiedades para que coincidan con la configuración de tu base de datos:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/gestion_db
    spring.datasource.username=tu_usuario
    spring.datasource.password=tu_contraseña
    ```
4.  Desde la raíz de la carpeta `Backend`, ejecuta la aplicación:
    ```sh
    ./mvnw spring-boot:run
    ```
    El servidor backend se iniciará en `http://localhost:8080`.

### 3. Configuración del Frontend

1.  Abre una nueva terminal y navega al directorio del frontend:
    ```sh
    cd Frontend
    ```
2.  Instala las dependencias del proyecto:
    ```sh
    npm install
    ```
3.  Inicia el servidor de desarrollo de Angular:
    ```sh
    ng serve
    ```
4.  Abre tu navegador y visita `http://localhost:4200/`.

## Uso

Una vez que tanto el backend como el frontend estén en funcionamiento, podrás acceder a la aplicación web. Desde allí podrás:

- Ver la lista de empleados y productos existentes.
- Añadir nuevos empleados al sistema.
- Añadir nuevos productos al sistema.
