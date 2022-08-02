import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../theme';
import * as React from "react";

class MyDocument extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href='https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Rubik&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        rel='stylesheet'
                        href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/dark.min.css'
                    />
                    <link rel='shortcut icon' href='/lofi-icon.png' />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
