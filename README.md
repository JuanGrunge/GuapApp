# GUAPA Web (Vite)

## Requisitos
- Node.js 18+ recomendado

## Desarrollo
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Publicar en GitHub Pages
Opcion A (Settings → Pages):
1. Ejecuta `npm run build`.
2. En GitHub, ve a Settings → Pages.
3. En "Build and deployment", elige "Deploy from a branch".
4. Selecciona la branch que contiene `dist/` y la carpeta `/dist`.

Opcion B (branch `gh-pages`):
1. Ejecuta `npm run build`.
2. Sube el contenido de `dist/` a la branch `gh-pages`.
3. En Settings → Pages, selecciona `gh-pages` como fuente.

La app usa `base: "./"` para funcionar con rutas relativas en Pages.
