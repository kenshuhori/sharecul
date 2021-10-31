import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from 'next/app';
import { AdminLayout } from '@/components/admin/layout';
import { Layout } from '@/components/layout';
import Head from 'next/head'
import '@/styles/app.scss'

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  if (router.route.startsWith("/admin")) {
    return (
      <ChakraProvider>
        <Head>
          <title>シェアカルふたこ管理</title>
        </Head>
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      </ChakraProvider>
    )
  } else {
    return (
      <ChakraProvider>
        <Head>
          <title>シェアカルふたこ</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    )
  }
}

export default MyApp
