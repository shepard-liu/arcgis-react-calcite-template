import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EsriMapView from "@arcgis/core/views/MapView";
import { MapViewProps, MapViewState, MapViewChildrenProps } from "./interfaces";

export default class MapView extends React.Component<MapViewProps, MapViewState> {

    private mapView: EsriMapView = null;

    constructor(props: MapViewProps) {
        super(props);
    }

    componentDidMount() {
        // Initialize a mapView instance with given properties
        this.mapView = new EsriMapView(this.props);
        // Adding children as widgets of mapView
        this.addChildToUI(this.props.children);
    }

    render() {
        return (
            // The mounting point of MapView
            <div id={this.props.container}></div>
        );
    }

    private addChildToUI(children: React.ReactElement<MapViewChildrenProps>[]) {
        if (!this.mapView) throw new Error("The View has not been initialized");

        children.forEach(child => {
            const mountingPoint = document.createElement("div");
            mountingPoint.className = 'widget-wrapper';
            this.mapView.ui.add(mountingPoint, child.props.position);
            ReactDOM.render(child, mountingPoint);
        })
    }

}