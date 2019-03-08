import { css } from '@emotion/core';
import normalize from 'emotion-normalize';

import * as colors from 'theme/styles/colors';
import * as typography from 'theme/styles/typography';

export default css`
    ${normalize};

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        /**
         * Font size 10px on default browser settings.
         * It's used as 62.5% to adapt to changes in the browser's default font-size.
         */
        font-size: 62.5%;
    }

    html,
    body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        color: ${colors.black};
        font-family: ${typography.fontFamily};
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;

        & > :first-child {
            height: 100%;
        }
    }

    body,
    #root {
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;
    }

    #root {
        min-height: 100%;
    }

    /**
     * Correct the font size and margin on heading elements within \`section\` and \`article\` contexts.
     * Useful to keep semantics without overriding previous styles.
     */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        font-size: 1.8rem;
    }

    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    /**
     * Override Firefox's stylesheet for red box shadow on invalid fields
     * @see view-source:resource://gre-resources/forms.css
     */

    :not(output):-moz-ui-invalid {
        box-shadow: none;
    }

    :not(output):-moz-ui-invalid:-moz-focusring {
        box-shadow: none;
    }

    /**
     * Accessibility improvements
     */

    [role='tooltip'] {
        display: none;
    }
`;
