// Test away!

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display';

  
test('defaults to unlocked and open', () => {
    const { getByText } = render(<Display />);
    getByText('Unlocked');
    getByText('Open');
});

test('displays Closed and Locked if props is true with red-led class', () => {
    const { getByText } = render(<Display closed={true} locked={true} />);
    expect(getByText('Locked')).toHaveClass('red-led');
    expect(getByText('Closed')).toHaveClass('red-led');
});

test('displays Open and Unlocked if props is false with green-led class', () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    expect(getByText('Unlocked')).toHaveClass('green-led');
    expect(getByText('Open')).toHaveClass('green-led');
});
