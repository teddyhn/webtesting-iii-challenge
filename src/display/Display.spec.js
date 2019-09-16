// Test away!

import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

  
test('defaults to unlocked and open', () => {
    const { getByText } = render(<Display />);
    getByText('Unlocked');
    getByText('Open');
});
