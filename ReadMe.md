# Template React Project

A generally configured project for building react apps;

| Item                  | Use                                        |
| --------------------- | ------------------------------------------ |
| JavaScript Transpiler | TypeScript                                 |
| CSS Preprocessor      | Sass                                       |
| HTML Template         | EJS (with html-webpack-plugin)             |
| Linter                | ESLint (recommended style for TypeScript ) |
| Testing Library       | Jest (ts-jest)                             |
| Build System          | Webpack 5                                  |

## Dependencies

```JSON
  "devDependencies": {
    "@testing-library/react": "^12.1.2",
    "@types/jest": "^27.0.3",
    "@types/node": "^16.11.11",
    "@types/react": "^17.0.37",
    "@types/react-dom": "^17.0.11",
    "@types/webpack": "^5.28.0",
    "@typescript-eslint/eslint-plugin": "^5.5.0",
    "@typescript-eslint/parser": "^5.5.0",
    "css-loader": "^6.5.1",
    "eslint": "^8.4.0",
    "eslint-webpack-plugin": "^3.1.1",
    "fork-ts-checker-webpack-plugin": "^6.5.0",
    "html-webpack-plugin": "^5.5.0",
    "jest": "^27.4.3",
    "mini-css-extract-plugin": "^2.4.5",
    "sass": "^1.44.0",
    "sass-loader": "^12.3.0",
    "style-loader": "^3.3.1",
    "ts-jest": "^27.1.0",
    "ts-loader": "^9.2.6",
    "typescript": "^4.5.2",
    "webpack": "^5.64.4",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.6.0",
    "webpack-merge": "^5.8.0"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
```

## Scripts

```JSON
  "scripts": {
    "test": "jest --env=jsdom",
    "dev": "webpack serve --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  },
```

Including task definitions for Visual Studio Code

```JSON
{
    "label": "Start Webpack Development Server",
    "type": "npm",
    "script": "npm run dev",
    "group": "build",
    "detail": "webpack serve --config webpack.dev.config"
},
{
    "label": "Start Webpack Build in Production Mode",
    "type": "npm",
    "script": "npm run build",
    "group": "build",
    "detail": "webpack --config webpack.prod.config --progress"
}
```
