import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
       theme:"#0095ff8c"
    },
    fonts:{
        theme:"monospace"
    }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp
