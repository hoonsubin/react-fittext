import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FitText } from '../../index';

test('Renders', async () => {
    const { getByRole } = render(<FitText />);
    expect(getByRole('heading')).toBeInTheDOM();
});
