import React from 'react';
import NextHead from 'next/head';

function Head(props: Props): React.ReactElement {
    return (
        <NextHead>
            <meta charSet="utf-8" />
            <title>{ props.title }</title>
            <meta name="description" content={ props.description } />
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

            {/*
            <link rel="preload" type="font/woff2" as="font" crossOrigin="anonymous" href="/static/fonts/font.woff2" />
            */}

            <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah" rel="stylesheet" />

            <link rel="manifest" crossOrigin="use-credentials" href="/static/manifest.json" />
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />

            <meta name="theme-color" content="#fff" />
        </NextHead>
    );
}

Head.defaultProps = {
    title: 'Ruben Amorim',
    description: 'Ruben Amorim Personal Page',
    url: 'test.rubenamorim.dev'
};

export interface Props {
    title?: string;
    description?: string;
}

export default Head;
