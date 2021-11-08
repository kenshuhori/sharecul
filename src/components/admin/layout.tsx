import { SideNav } from '@/components/admin/SideNav';
import { Header } from '@/components/admin/header';
import { Footer } from '@/components/admin/footer';
import { Flex } from "@chakra-ui/react";
import type { VFC, ReactNode } from 'react';

export const AdminLayout: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div id="sharecul-admin">
      <Header />
      <Flex flex="1">
        <SideNav />
        <main>{children}</main>
      </Flex>
      <Footer />
    </div>
  );
};
