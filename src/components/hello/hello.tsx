import { CalciteButton, CalciteChip, CalciteBlock } from '@esri/calcite-components-react';
import * as React from 'react';
import { MapViewChildrenProps } from '../mapView/interfaces';

interface HelloProps extends MapViewChildrenProps {

}

export default class Hello extends React.Component<HelloProps, any> {

    constructor(props?: any) {
        super(props);
    }

    render() {
        return (
            <div id='hook'>
                <CalciteBlock heading='Hello World!!!' collapsible={true}>
                    <CalciteButton>Hello</CalciteButton>
                    <CalciteChip value="Hello Chip">Hello Chip</CalciteChip>
                </CalciteBlock>
            </div>
        );
    }
}

