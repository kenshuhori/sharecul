import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import type { VFC, ReactNode } from 'react';

export const Layout: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
