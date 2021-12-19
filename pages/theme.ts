import { extendTheme,ThemeConfig } from "@chakra-ui/react";

const config={
    initialColorMode:'light',
    useSystemColorMode: false,
} as ThemeConfig

const theme = extendTheme({
    colors: {
        theme: '#0095ff8c',
    },
    fonts: {
        theme: 'monospace',
    },
    config
});



export default theme