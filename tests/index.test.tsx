import React from 'react';
import { render } from 'react-testing-library';

import App from 'pages';

it('renders the homepage', () => {
    const { getByText, container } = render(<App />);

    expect(getByText('Hello 👋')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});
