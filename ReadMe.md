# Template React - ArcGIS API for JavaScript Project

A generally configured project for developing integerated apps.

- Optimized for building performance (approximate 10s for initial development build and 0.5s for incremental builds)
- With Calcite Components for React configured
- Sample code for using ArcGIS API for JavaScript with React

| Item                  | Use                                        |
| --------------------- | ------------------------------------------ |
| JavaScript Transpiler | TypeScript                                 |
| CSS Preprocessor      | Sass                                       |
| HTML Template         | EJS (with html-webpack-plugin)             |
| Linter                | ESLint (recommended style for TypeScript ) |
| Testing               | Jest (ts-jest)                             |
| Build System          | Webpack 5                                  |

## Usage

Intended to improve building performance, you have to copy the Esri assets manually before initial development build. This step is not necessary when building in production mode because copy-webpack-plugin is already configured for that purpose.

First, run in your terminal
```shell
npm install
```
or
```shell
yarn install
```
to have all the dependencies installed.

You can simply press Ctrl+Shift+B and choose 'Start Webpack Development Server' to start in Visual Studio Code. But ***before the initial development build***, run this command to copy the assets of ArcGIS API for JavaScript.
```shell
npm run copy-assets
```

If you are not using VS Code, run
```shell
npm run dev
```
to start the webpack development server.

Alone with the project template, there exists a simple Node.js CLI tool for creating react components either with TypeScript/Sass or JavaScript/CSS template.
```shell
create-component CLI Tool [help]

Arguments:
  names                      Component name(s)

Options:
  -V, --version              output the version number
  -p --preset modern | pure  Choose a component template set.
                             'modern'(default): Typescript/Sass
                             'pure': JavaScript/CSS
  -d --directory [dir]       Directory to store your component
  -h, --help                 display help for command
```

You may run this command to install it globally if interested
```shell
cd ./scripts/create-component
npm install -g
```

And create template components with specified component class name with
```shell
create-component HelloReactComponent -d ./components
```

You should be able to see a directory '/component/HelloReactComponent' after answering yes in the project root path.

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
    "copy-webpack-plugin": "^10.0.0",
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
    "webpack-dev-middleware": "^5.2.2",
    "webpack-dev-server": "^4.6.0",
    "webpack-merge": "^5.8.0"
  },
  "dependencies": {
    "@arcgis/core": "^4.21.2",
    "@esri/calcite-components": "^1.0.0-beta.70",
    "@esri/calcite-components-react": "^0.11.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
```

## Scripts

```JSON
  "scripts": {
    "test": "jest --env=jsdom",
    "dev": "webpack serve --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js",
    "copy-assets":"cp ./node_modules/@arcgis/core/assets ./dist/assets"
  },
```

Including task definitions for Visual Studio Code

```JSON
{
    "label": "Start Webpack Development Server",
    "type": "npm",
    "script": "dev",
    "group": "build",
    "detail": "webpack serve --config webpack.dev.config"
},
{
    "label": "Start Webpack Build in Production Mode",
    "type": "npm",
    "script": "build",
    "group": "build",
    "detail": "webpack --config webpack.prod.config --progress"
}
```
