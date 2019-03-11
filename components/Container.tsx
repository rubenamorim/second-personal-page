import React from 'react';

import { Main } from './Container.styles';

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
