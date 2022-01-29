import '../styles/globals.css';
import '../styles/zenn.css';
import type { AppProps } from 'next/app';
import initTwitterScriptInner from 'zenn-embed-elements/lib/init-twitter-script-inner';

import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import { createContext, useEffect, useState } from 'react';
import { Layout } from '../components/Layout';

import theme from '../theme';

interface AppState {
    selectedLanguage: 'ja' | 'en';
    toggleLanguage: () => void;
    isRightSideBarOpen: boolean;
    toggleRightSideBar: () => void;
    isLeftSideBarOpen: boolean;
    toggleLeftSideBar: () => void;
}

export const AppContext = createContext<AppState>({} as AppState);

function MyApp({ Component, pageProps }: AppProps) {
    const [selectedLanguage, setLanguage] = useState<'ja' | 'en'>('ja');
    const toggleLanguage = () => {
        selectedLanguage === 'ja' ? setLanguage('en') : setLanguage('ja');
    };

    const [isRightSideBarOpen, setRightSideBar] = useState<boolean>(false);
    const [isLeftSideBarOpen, setLeftSideBar] = useState<boolean>(false);

    const toggleRightSideBar = () => {
        setRightSideBar((val) => !val);
        if (isLeftSideBarOpen) setLeftSideBar((val) => !val);
    };

    const toggleLeftSideBar = () => {
        setLeftSideBar((val) => !val);
        if (isRightSideBarOpen) setRightSideBar((val) => !val);
    };

    const AppContextValue = {
        selectedLanguage,
        toggleLanguage,
        isRightSideBarOpen,
        toggleRightSideBar,
        isLeftSideBarOpen,
        toggleLeftSideBar,
    };

    useEffect(() => {
        import('zenn-embed-elements');
    }, []);

    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: initTwitterScriptInner,
                }}
            />
            <ChakraProvider theme={theme}>
                <AppContext.Provider value={AppContextValue}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </AppContext.Provider>
            </ChakraProvider>
        </>
    );
}

export default MyApp;
