import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { createContext, useState } from "react";

const theme = extendTheme({
    colors: {
        theme: "#0095ff8c"
    },
    fonts: {
        theme: "monospace"
    }
})

export const languageContext = createContext({} as {selectedLanguage: string,toggleLanguage: ()=>void})

function MyApp({Component, pageProps}: AppProps) {

    const [selectedLanguage, setLanguage] = useState("ja")
    const toggleLanguage = () => {
        if (selectedLanguage === "ja") setLanguage("en")
        else {
            setLanguage("ja")
        }
    }
    const languageContextValue = {
        selectedLanguage, toggleLanguage
    }

    return (
        <ChakraProvider theme={theme}>
            <languageContext.Provider value={languageContextValue}>
                <Component {...pageProps} />
            </languageContext.Provider>
        </ChakraProvider>
    )
}

export default MyApp
