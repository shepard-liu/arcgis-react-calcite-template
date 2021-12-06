import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.scss';

import Counter from './counter/counter';

ReactDOM.render(
    (<React.StrictMode>
        <Counter name='Counter' value={0} onClick={(value: number) => value + 1} />
        <footer>Please delete template tsx and scss files before coding.</footer>
    </React.StrictMode >), document.getElementById('root')
);
 