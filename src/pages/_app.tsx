import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from 'next/app';
import { AdminLayout } from '@/components/admin/layout';
import { AdminAuthLayout } from '@/components/admin/auth/layout';
import { Layout } from '@/components/layout';
import Head from 'next/head';
import '@/styles/app.scss';
import React from "react";
import { RecoilRoot } from 'recoil';

const CustomComponent: React.VFC<{pathname: string, children: React.ReactNode}> = ({pathname, children}) => {
  if (pathname.startsWith("/admin/auth")) {
    return (
      <>
        <Head>
          <title>シェアカルふたこ管理</title>
        </Head>
        <AdminAuthLayout>
          {children}
        </AdminAuthLayout>
      </>
    );
  } else if (pathname.startsWith("/admin")) {
    return (
      <>
        <Head>
          <title>シェアカルふたこ管理</title>
        </Head>
        <AdminLayout>
          {children}
        </AdminLayout>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>シェアカルふたこ</title>
        </Head>
        <Layout>
          {children}
        </Layout>
      </>
    );
  }
};

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <CustomComponent pathname={router.pathname}>
          <Component {...pageProps} />
        </CustomComponent>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
