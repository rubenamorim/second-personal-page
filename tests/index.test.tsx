import React from 'react';
import { render } from 'react-testing-library';

import App from 'pages';

it('renders the homepage', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello 👋')).toBeInTheDocument();
});
