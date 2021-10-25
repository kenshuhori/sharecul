import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from 'next/app';
import { AdminLayout } from '@/components/admin/layout';
import { Layout } from '@/components/layout';
import '@/styles/app.css'

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  if (router.route.startsWith("/admin")) {
    return (
      <ChakraProvider>
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      </ChakraProvider>
    )
  } else {
    return (
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    )
  }
}

export default MyApp
