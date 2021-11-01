import { Header } from '@/components/admin/header';
import { Footer } from '@/components/admin/footer';
import type { VFC, ReactNode } from 'react';

export const AdminAuthLayout: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div id="sharecul-admin-auth">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
