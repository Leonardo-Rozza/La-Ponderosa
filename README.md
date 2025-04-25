# La Ponderosa

Landing page para **Quinta La Ponderosa**, un espacio de campo ubicado en Buenos Aires.  
Construida con [Astro](https://astro.build/) y React para ofrecer un sitio estático veloz, ideal para desplegar en GitHub Pages.

<p align="center">
  <a href="https://Leonardo-Rozza.github.io/La-Ponderosa" target="_blank">
    <img src="https://img.shields.io/badge/Demo%20en%20vivo-Visitar-blue?style=for-the-badge" alt="Demo en vivo" />
  </a>
</p>

---

## ✨ Características

- **Sección héroe** con imagen de portada y llamada a la acción
- **Servicios**: lista de comodidades que ofrece la quinta
- **Galería de imágenes responsiva** con carrusel
- **Cómo llegar**: iframe de Google Maps
- **Calendario de disponibilidad** con FullCalendar (React)
- **Botón flotante de contacto** que abre WhatsApp
- Diseño _mobile‑first_ y estilos CSS personalizados
- Despliegue continuo a **GitHub Pages**

## 🗂️ Stack tecnológico

| Herramienta  | Propósito                              |
| ------------ | -------------------------------------- |
| Astro        | Generador de sitios estáticos          |
| React & JSX  | Componentes interactivos               |
| TypeScript   | Desarrollo tipado                      |
| FullCalendar | Calendario de reservas                 |
| CSS          | Estilos personalizados (sin framework) |
| GitHub Pages | Hosting                                |

## 🚀 Comenzar

```bash
# 1. Clona el repositorio
git clone https://github.com/Leonardo-Rozza/La-Ponderosa.git
cd La-Ponderosa

# 2. Instala dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

Se recomienda Node 18 LTS o superior.

### Compilar y previsualizar

```bash
npm run build
npm run preview
```

### Despliegue

El proyecto está configurado para GitHub Pages.  
Al hacer _push_ a `main`, GitHub Actions ejecutará automáticamente:

1. `astro check && astro build`
2. Enviará el contenido de `dist/` a la rama `gh-pages`
3. Publicará en **https://Leonardo-Rozza.github.io/La-Ponderosa**.

## 🏗 Estructura del proyecto

```
/
├─ public/
├─ src/
│  ├─ pages/
│  ├─ components/
│  ├─ layouts/
│  ├─ assets/
│  └─ env.d.ts
├─ astro.config.mjs
└─ package.json
```

## 🤝 Contribuciones

¡Se agradecen _pull requests_ y problemas! Por favor abre primero una discusión para proponer cambios o mejoras.

## 📬 Contacto

Creado con ❤️ por **Leonardo Rozza**  
[LinkedIn](https://www.linkedin.com/in/leonardo-ivan-rozza-0769a0220) • [GitHub](https://github.com/Leonardo-Rozza)
