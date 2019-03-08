import React from 'react';
import styled from '@emotion/styled';

import GithubIcon from 'theme/assets/Github';
import ArrowIcon from 'theme/assets/Arrow';

import { fontFamilyHandwriting } from 'theme/styles/typography';
import * as colors from 'theme/styles/colors';

const Section = styled.section`
    position: fixed;
    top: 0;
    right: 0;
    width: 12rem;
    height: 12rem;
`;

const Triangle = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-top: 12rem solid ${colors.black};
    border-left: 12rem solid transparent;
    font-family: ${fontFamilyHandwriting};
    color: ${colors.white};
`;

const StyledGithub = styled(GithubIcon)`
    position: absolute;
    top: 30%;
    right: 30%;
    width: 4rem;
    transform: translate(50%,-50%) rotate(45deg);
    fill: ${colors.white};
`;

const StyledArrow = styled(ArrowIcon)`
    position: absolute;
    top: 90%;
    right: 90%;
    width: 8rem;
    transform: translate(50%,-50%) rotate(-45deg);
`;

const Text = styled.span`
    position: absolute;
    top: 140%;
    right: 100%;
    transform: translate(50%,-50%);
    font-family: ${fontFamilyHandwriting};
    font-size: 2rem;
    white-space: nowrap;
    font-weight: bold;
`;

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
