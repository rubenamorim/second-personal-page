import React from 'react';
import { Global } from '@emotion/core';

import Head from 'components/Head';
import Container from 'components/Container';
import Board from 'components/Board';
import Github from 'components/Github';

import globalStyles from 'theme/styles/global';

function Homepage(): React.ReactElement {
    return (
      <>
        <Head />
        <Global styles={ globalStyles } />
        <Container>
            <Board text="Hello 👋"/>
            <Github />
        </Container>
      </>
    );
}

export default Homepage;
