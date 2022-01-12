import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import { createContext, useState } from 'react';
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
    const toggleRightSideBar = () => {
        setRightSideBar((val) => !val);
    };

    const [isLeftSideBarOpen, setLeftSideBar] = useState<boolean>(false);
    const toggleLeftSideBar = () => {
        setLeftSideBar((val) => !val);
    };

    const AppContextValue = {
        selectedLanguage,
        toggleLanguage,
        isRightSideBarOpen,
        toggleRightSideBar,
        isLeftSideBarOpen,
        toggleLeftSideBar,
    };

    return (
        <ChakraProvider theme={theme}>
            <AppContext.Provider value={AppContextValue}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AppContext.Provider>
        </ChakraProvider>
    );
}

export default MyApp;
