# Reviews app

## Development

### Using devcontainer (recommended)

> **✅ Prerequisites**:
>
> - VS Code
> - Docker



1. Clone the repo

2. Open the project in VS Code

3. When prompted select `Reopen in Container`

   Or using command palette `CMD + SHIFT + P` > `Dev Containers: Reopen in Container`
4. Install dependencies `npm i`
5. Start dev server `npm run dev`
6. When prompted select `Open in Browser` (or `Preview in Editor`)



## Project structure

```
app/
├─ .devcontainer/          # devcontainer configuration
├─ public/                 # static files served as-is (favicon, robots, etc.)
├─ src/
│  ├─ assets/              # images/fonts imported into code
│  ├─ components/          # small shared components
│  ├─ pages/               # route-level pages (if using react-router)
│  ├─ hooks/               # reusable hooks (useX)
│  ├─ services/            # API clients / wrappers
│  ├─ types/               # global/shared TS types
│  ├─ utils/               # small pure helpers
│  ├─ App.tsx
│  └─ main.tsx
├─ ...
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```



## Project configuration

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
