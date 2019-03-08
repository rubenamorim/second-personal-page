import React from 'react';
import styled from '@emotion/styled';

const Main = styled.main`
    display: flex;
`;

function Container(props: Props): React.ReactElement {
    return (
        <Main>
            { props.children }
        </Main>
    );
}

export interface Props {
    children?: React.ReactNode;
}

export default Container;
