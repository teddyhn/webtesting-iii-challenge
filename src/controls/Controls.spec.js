// Test away!

import React from 'react';
import { render, wait, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Controls from './Controls';

test('closed toggle button is disabled if the gate is locked', () => {
    const { getByText } = render(<Controls locked={true} />);
    const closeButton = getByText('Close Gate');
    expect(closeButton).toBeDisabled();
});

test('locked toggle button is disabled if the gate is open', () => {
    const { getByText } = render(<Controls closed={false} />);
    const lockButton = getByText('Lock Gate');
    expect(lockButton).toBeDisabled();
})