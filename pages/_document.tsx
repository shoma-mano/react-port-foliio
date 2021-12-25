import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from "@chakra-ui/react";
import theme from '../theme'

class MyDocument extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <link href='https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Rubik&display=swap'
                          rel='stylesheet'/>
                </Head>
                <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument