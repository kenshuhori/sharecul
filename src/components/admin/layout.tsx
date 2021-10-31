import { Header } from '@/components/admin/header';
import { Footer } from '@/components/admin/footer';
import type { VFC, ReactNode } from 'react';

export const AdminLayout: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div id="sharecul-admin">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
