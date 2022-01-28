import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
} as ThemeConfig;

const breakpoints = createBreakpoints({
    base: '0px',
    sm: '768px',
    md: '1064px',
    lg: '1264px',
    xl: '1300px',
    '2xl': '1350px',
});

const theme = extendTheme({
    breakpoints,
    styles: {
        global: (props: any) => ({
            'html, body': {
                background: props.colorMode === 'dark' ? '#18191A' : '#f0f0f5',
            },
        }),
    },
    colors: {
        theme: '#0095ff8c',
    },
    fonts: {
        theme: 'monospace',
    },
    config,
});

export default theme;
