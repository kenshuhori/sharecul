import { Header } from '@/components/admin/header';
import { Footer } from '@/components/admin/footer';
import type { VFC, ReactNode } from 'react';

export const AdminLayout: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
