# GUAPA — Tributo LODVG

Dossier digital y rider técnico de la banda. Incluye perfil, galería, contacto y especificaciones de producción para venues.

**[→ Ver en vivo](https://juangrunge.github.io/GuapApp/)**

---

## Stack

- **Vanilla JS** (sin frameworks), módulos ES6
- **Vite 7** — build tool y dev server
- **Lenis** — smooth scroll
- Assets en **WebP / WebM** para entrega optimizada

---

## Estructura

```
src/
├── assets/          # Imágenes WebP y video WebM
├── components/      # StagePlotSvg.js — diagrama SVG del escenario
├── content/         # content.js — datos del band (info, rider, contactos)
├── views/           # renderDossier.js · renderRider.js
├── main.js          # Entrada: routing hash, interacciones, layout
└── style.css        # Sistema de diseño y temas
public/
├── og-guapa.jpg     # Open Graph image
└── favicon.ico
```

---

## Desarrollo

```bash
npm install
npm run dev      # localhost:5173
npm run build    # genera dist/
npm run preview  # previsualiza dist/ localmente
```

Requiere **Node.js 18+**.

---

## Vistas

| Ruta | Contenido |
|------|-----------|
| `#/` | Dossier — historia, galería, plataformas, contacto |
| `#/rider` | Rider técnico — input list (acústico / electrónico), stage plot, requerimientos |

---

## Deploy

GitHub Actions despliega automáticamente a **GitHub Pages** en cada push a `main` (`npm run build` → `dist/`). No se requiere acción manual.

Configurado en `.github/workflows/deploy.yml`.
