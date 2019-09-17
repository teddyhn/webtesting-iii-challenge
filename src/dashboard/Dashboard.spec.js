// Test away

import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

test('renders controls and display', () => {
    const { getByText } = render(<Dashboard />);
    getByText('Unlocked');
    getByText('Open');
    getByText('Lock Gate');
    getByText('Close Gate');
});