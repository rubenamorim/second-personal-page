import React from 'react';

function Email(props: Props): React.ReactElement {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M0 3v18h24V3zm6.623 7.929L2 16.641V7.183zM2.482 5h19.035L12 12.713zm5.694 7.188L12 15.287l3.83-3.104L21.442 19H2.663zm9.208-1.264L22 7.183v9.348z" />
        </svg>
    );
}

export interface Props {
    className?: string;
}

export default Email;
