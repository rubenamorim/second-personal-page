import React from 'react';

function Board(props: Props): React.ReactElement {
    return (
        <>
            { props.text }
        </>
    );
}

export interface Props {
    children?: React.ReactElement;
    text?: string;
}

export default Board;
