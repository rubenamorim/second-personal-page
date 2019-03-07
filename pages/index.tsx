import React from 'react';
import styled from '@emotion/styled';

import Head from 'components/Head';

const Title = styled('h1', { shouldForwardProp: (prop) => prop !== 'color' })`
  color: ${(props) => props.color};
  text-align: center;
`;

function Homepage(): React.ReactElement {
    return (
      <>
        <Head />
        <Title color="red">Hello 👋</Title>
      </>
    );
}

export default Homepage;
