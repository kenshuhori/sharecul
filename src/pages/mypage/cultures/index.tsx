import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase';
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Input,
  Link,
  Stack,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSession } from '@/hooks/useSession';
import { useToast } from '@/hooks/useToast';
import { useRecoilState } from 'recoil';
import { sessionState } from '@/utils/atoms';

export default function MypageCultureIndexPage() {
  const formBackground = useColorModeValue("orange.50", "gray.700");
  const [loading, setLoading] = useState(true);
  const { messageOnToast } = useToast();
  const [session] = useRecoilState(sessionState);

  useEffect(() => {
    if (!session) {
      // replace('/');
    } else {
      // なにかあれば
    }
  }, [session]);

  return (
    <>
      <Container background={formBackground} >
        <Stack spacing={8} mx="auto" mt="80px" mb="50px" px="20px" py="50px">
          <Box>
            <Center>
              <Text fontSize="2xl"><strong>マイカルチャー</strong></Text>
            </Center>
            <Center>
              <Divider w="200px" borderBottomWidth="3px" borderColor="teal.600" />
            </Center>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
