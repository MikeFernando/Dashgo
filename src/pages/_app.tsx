import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../styles/theme'
import { SideBarDrawerProvider } from '../contexts/SideBarDrawerContext'
import { makeServer } from '../services/miragejs'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from '../services/queryClient'

if (process.env.NODE_ENV === 'development') {
   makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <QueryClientProvider client={queryClient}>
         <SideBarDrawerProvider>
         <ChakraProvider theme={theme}>
            <Component {...pageProps} />
         </ChakraProvider>
         </SideBarDrawerProvider>

         <ReactQueryDevtools />
      </QueryClientProvider>
   )
}

export default MyApp
