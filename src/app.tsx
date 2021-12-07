
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EsriMap from '@arcgis/core/Map';
import MapView from './components/mapView/mapView';
import Hello from './components/hello/hello';

interface AppProps {
    basemap: string
}

interface AppState {

}

export default class App extends React.Component<AppProps, AppState> {

    private map: EsriMap = null;

    constructor(props: AppProps) {
        super(props);
        this.map = new EsriMap({
            basemap: this.props.basemap
        })
    }

    render() {
        return (
            <MapView
                map={this.map}
                container='mapViewDiv'>
                <Hello position='top-right' />
                <Hello position='bottom-right' />
                <Hello position='bottom-left' />
            </MapView>
        );
    }

}