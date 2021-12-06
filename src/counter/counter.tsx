import * as React from 'react';
import { useState } from 'react';

// import stylesheets
import './counter.scss';

interface TestProps {
    name: string;
    value: number;
    onClick: (value: number) => number;
}

export default function Counter(props: TestProps) {

    const [state, setState] = useState(props.value);

    return (
        <div id={props.name}>
            <span>{props.name}:</span>
            <span> {state}</span >
            <button onClick={() => { setState(props.onClick(state)); }}>Click Me to +1</button>
        </div>
    );

}