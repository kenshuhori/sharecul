import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import type { VFC, ReactNode } from 'react';

export const Layout: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div id="sharecul">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
