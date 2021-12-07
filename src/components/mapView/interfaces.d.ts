import * as React from 'react';

export interface MapViewChildrenProps {
    position: string;
}

export interface MapViewProps extends __esri.MapViewProperties {
    // Specify the MapView container id
    container: string;
    // Overwrite children type definitions
    children: React.ReactElement<MapViewChildrenProps>[]
}

export interface MapViewState {
}
