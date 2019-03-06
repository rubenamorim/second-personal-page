import React from 'react';
import Document, { Head, Main, NextScript, NextDocumentContext } from 'next/document';

class CustomDocument extends Document {
    public static async getInitialProps(ctx: NextDocumentContext): Promise<any> {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    public render(): React.ReactElement {
        return (
            <html>
                <Head>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default CustomDocument;
