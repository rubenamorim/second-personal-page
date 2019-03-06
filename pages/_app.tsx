import React from 'react';
import App, { Container } from 'next/app';

export default class MyApp extends App {
    public static async getInitialProps({ Component, ctx }: any): Promise<any> {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    public render(): React.ReactElement {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }
}
