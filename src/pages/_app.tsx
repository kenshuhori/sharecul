import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from 'next/app';
import { Layout } from '@/components/admin/layout';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
