import React from 'react';

function Arrow(props: Props): React.ReactElement {
    return (
        <svg viewBox="0 0 512 512" {...props}>
            <path d="M41.037 340.689a8.486 8.486 0 0 1-8.211-6.367 8.5 8.5 0 0 1 5.368-10.131l47.232-16.829a9.212 9.212 0 0 1 1.771-.431l175.874-22.665-187.493 9.186c-4.606.165-8.552-3.267-8.884-7.859a8.513 8.513 0 0 1 3.665-7.627l-37.103-4.957a8.497 8.497 0 0 1-7.287-9.551c.626-4.639 4.949-7.913 9.542-7.283l40.509 5.426 197.604-4.033 193.192-18.379c4.768-.563 8.813 2.984 9.261 7.644.438 4.667-2.976 8.813-7.651 9.252l-14.242 1.359a8.389 8.389 0 0 1 1.425 3.063 8.48 8.48 0 0 1-4.493 9.616l-18.055 8.887a8.912 8.912 0 0 1-2.671.813l-79.998 10.313-307.975 50.437a7.903 7.903 0 0 1-1.38.116z" />
            <path d="M329.317 354.699a8.496 8.496 0 0 1-7.319-4.162 8.5 8.5 0 0 1 2.76-11.489L448 260.805c-74.71-34.093-124.071-56.376-131.821-59.51a9.038 9.038 0 0 1-4.287-2.354 8.498 8.498 0 0 1-2.038-3.25c-1.534-2.388-8.075-12.112-13.962-20.708a8.5 8.5 0 0 1 .58-10.338 8.532 8.532 0 0 1 10.147-2.089l171.972 83.606a8.469 8.469 0 0 1 4.758 7.154 8.421 8.421 0 0 1-1.045 4.6 8.514 8.514 0 0 1 3.797 6.771 8.498 8.498 0 0 1-4.41 7.76l-148.303 81.21a8.44 8.44 0 0 1-4.071 1.042z" />
            <path d="M302.913 385.505a8.497 8.497 0 0 1-7.526-4.542c-2.181-4.161-.571-9.286 3.572-11.475l161.062-84.477-162.737-143.654a8.496 8.496 0 0 1-.745-11.988c3.1-3.515 8.472-3.855 11.987-.746l171.97 151.813a8.471 8.471 0 0 1 2.802 7.378 8.472 8.472 0 0 1-4.476 6.499L306.85 384.526a8.424 8.424 0 0 1-3.937.979z" />
        </svg>
    );
}

export interface Props {
    className?: string;
}

export default Arrow;