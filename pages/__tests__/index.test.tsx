import React from 'react';
import { render } from 'react-testing-library';

import App from '..';

it('renders the homepage', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello 👋')).toBeInTheDocument();
});
