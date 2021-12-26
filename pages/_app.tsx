import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ChakraProvider, ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { createContext, useState } from 'react';
import { Layout } from '../components/Layout';

const theme = extendTheme({
    colors: {
        theme: '#0095ff8c',
    },
    fonts: {
        theme: 'monospace',
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    } as ThemeConfig,
});

export const languageContext = createContext(
    {} as { selectedLanguage: 'ja' | 'en'; toggleLanguage: () => void }
);

function MyApp({ Component, pageProps }: AppProps) {
    const [selectedLanguage, setLanguage] = useState<'ja' | 'en'>('ja');
    const toggleLanguage = () => {
        selectedLanguage === 'ja' ? setLanguage('en') : setLanguage('ja');
    };
    const languageContextValue = {
        selectedLanguage,
        toggleLanguage,
    };

    return (
        <ChakraProvider theme={theme}>
            <languageContext.Provider value={languageContextValue}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </languageContext.Provider>
        </ChakraProvider>
    );
}

export default MyApp;
