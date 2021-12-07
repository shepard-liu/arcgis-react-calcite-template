
// Libraries
import esriConfig from '@arcgis/core/config';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyPolyfills, defineCustomElements } from '@esri/calcite-components/dist/loader';

// Component
import App from './app';

// Stylesheets
import './index.scss';

// Initializing configurations for copied assets
esriConfig.assetsPath = './assets';

// Apply polyfills to initialize calcite components
applyPolyfills().then(() => {
    defineCustomElements(window);
});

ReactDOM.render(
    <React.StrictMode>
        <App basemap='osm' />
    </React.StrictMode>,
    document.getElementById('root')
)