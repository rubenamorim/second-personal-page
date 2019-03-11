import React from 'react';

import { Section, Triangle, StyledGithub, StyledArrow, Text } from './Github.styles';

function Github(): React.ReactElement {
    return (
        <Section>
            <Triangle />
            <StyledGithub />
            <StyledArrow />
            <Text>Follow the progress</Text>
        </Section>
    );
}

export default Github;
