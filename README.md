# TechPro - Portafolio de Servicios Tecnológicos

Un portafolio moderno y responsive construido con React, Vite y Tailwind CSS.

## 🚀 Características

- ✨ Diseño moderno y responsive
- 🌙 Modo oscuro/claro toggle
- 📱 Mobile-first
- ⚡ Animaciones suaves con Tailwind CSS
- 🎨 Componentes reutilizables
- 📧 Formulario de contacto con validación
- 🎠 Carrusel de testimonios
- 🔍 SEO-friendly

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx           # Navegación con menú hamburguesa
│   ├── Hero.jsx             # Sección principal
│   ├── Services.jsx         # Grid de servicios (3x2)
│   ├── Projects.jsx         # Grid de proyectos (2x2)
│   ├── TechStack.jsx        # Tecnologías con emojis como logos
│   ├── Testimonials.jsx     # Carrusel de testimonios
│   ├── Contact.jsx          # Formulario de contacto
│   └── Footer.jsx           # Pie de página
├── data/
│   ├── servicesData.js      # Datos de servicios
│   └── projectsData.js      # Datos de proyectos
├── App.jsx                  # Componente principal
├── main.jsx                 # Punto de entrada
└── index.css                # Estilos globales

Archivos de configuración:
├── vite.config.js           # Configuración de Vite
├── tailwind.config.js       # Configuración de Tailwind
├── postcss.config.js        # Configuración de PostCSS
├── package.json             # Dependencias
└── index.html               # HTML principal
```

## 🛠 Instalación

1. **Clona o descarga el proyecto**
   ```bash
   cd tu-carpeta-del-proyecto
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre en tu navegador**
   - La aplicación estará disponible en `http://localhost:5173`

## 📦 Compilar para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`.

## 🎨 Personalización

### Cambiar Colores
Edita `tailwind.config.js` para modificar los colores principales.

### Actualizar Datos
- **Servicios**: Modifica `src/data/servicesData.js`
- **Proyectos**: Modifica `src/data/projectsData.js`

### Modificar Contenido
- **Navbar**: `src/components/Navbar.jsx`
- **Hero**: `src/components/Hero.jsx`
- **Testimonios**: Edita el array dentro de `src/components/Testimonials.jsx`

## 🎯 Secciones

| Sección | Descripción |
|---------|-------------|
| **Hero** | Introducción principal con CTA |
| **Servicios** | Grid de 6 servicios |
| **Proyectos** | Portfolio de 4 proyectos destacados |
| **Tecnologías** | Stack de herramientas y tecnologías |
| **Testimonios** | Carrusel con 3 testimonios |
| **Contacto** | Formulario con validación |

## 🧩 Dependencias

- **React** 18.2.0 - Framework UI
- **Vite** 4.3.9 - Build tool
- **Tailwind CSS** 3.3.0 - Framework CSS
- **Lucide React** 0.263.1 - Iconos

## ✅ Validación de Formulario

El formulario de contacto valida:
- Nombre requerido
- Email válido y requerido
- Mensaje requerido
- Teléfono opcional

## 🌐 Navegación Suave

Todos los botones y links de menú usan scroll suave para navegar entre secciones.

## 📱 Responsive Design

- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

## 🌙 Modo Oscuro

Toggle en la navbar para cambiar entre modo claro y oscuro.

## 📝 Licencia

Proyecto de código abierto - Siéntete libre de usar y modificar.

## 📧 Contacto

Para soporte o consultas, contacta a: info@techpro.com

---

**¡Hecho con ❤️ por TechPro!**
