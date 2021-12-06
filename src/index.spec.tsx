

import Counter from './counter/counter';
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

// Unit test for counter
test("Should increment after clicking", () => {

    const name = "counter";
    const oriValue = 1;

    const { getByText } = render(<Counter name={name} value={1} onClick={(v) => v + 1} />)

    const button = getByText("Click Me to +1") as HTMLButtonElement;

    fireEvent.click(button);

    getByText(oriValue + 1);
})