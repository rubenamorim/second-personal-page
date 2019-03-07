import React from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';

import Head from 'components/Head';

import globalStyles from 'theme/styles/global';

const Title = styled('h1', { shouldForwardProp: (prop) => prop !== 'color' })`
  color: ${(props) => props.color};
  text-align: center;
`;

function Homepage(): React.ReactElement {
    return (
      <>
        <Head />
        <Global styles={ globalStyles } />
        <Title color="red">Hello 👋</Title>
      </>
    );
}

export default Homepage;
