import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import FitText from '../../index';
import TestRenderer from 'react-test-renderer';

test('Renders component', async () => {
    const testRenderer = TestRenderer.create(
        <FitText>
            <p className="text">Hello Test</p>
        </FitText>,
    );

    expect(testRenderer.toJSON()?.type).toBe('div');
});
