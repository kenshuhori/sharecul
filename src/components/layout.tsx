import {
  Container,
} from '@chakra-ui/react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import type { VFC, ReactNode } from 'react';

export const Layout: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div id="sharecul">
      <Header />
        <main>
          <Container maxW={{ base: "95%", md: "80%" }} >{children}</Container>
        </main>
      <Footer />
    </div>
  );
};
