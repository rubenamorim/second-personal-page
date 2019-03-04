import React from 'react';
import styled from '@emotion/styled';

const Title = styled('h1', { shouldForwardProp: (prop) => prop !== 'color' })`
  color: ${(props) => props.color};
  text-align: center;
`;

function Home() {
    return (
        <Title color="red">Hello 👋</Title>
    );
}

export default Home;
