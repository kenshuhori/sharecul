import { useState, useEffect } from 'react';
import { upsertRow } from '@/utils/supabase';
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
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSession } from '@/hooks/useSession';
import { useToast } from '@/hooks/useToast';
import { useRecoilState } from 'recoil';
import { sessionState } from '@/utils/atoms';

export default function MypageCultureNewPage() {
  const formBackground = useColorModeValue("orange.50", "gray.700");
  const [loading, setLoading] = useState(false);
  const { messageOnToast } = useToast();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const { replace } = useRouter();
  const [session] = useRecoilState(sessionState);

  useEffect(() => {
    if (!session) {
      // replace('/');
    } else {
      // なにかあれば
    }
  }, [session]);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      let data = 'あいうえお';
      // let data = await upsertRow('cultures', {
      //   title: title,
      //   price: price,
      //   description: description,
      // });
      if(data) {
        messageOnToast('申請しました。', 'success');
        replace('/mypage/cultures');
      }
    } catch (error: any) {
      messageOnToast(error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container background={formBackground} >
        <Stack spacing={8} mx="auto" mt="80px" mb="50px" px="20px" py="50px">
          <Box>
            <Center>
              <Text fontSize="2xl"><strong>新規申請</strong></Text>
            </Center>
            <Center>
              <Divider w="200px" borderBottomWidth="3px" borderColor="teal.600" />
            </Center>
          </Box>
          <Box>
            <Text fontSize="sm" mb="6px">タイトル</Text>
            <Input type="text" name="title" placeholder="キャンプ道具" defaultValue={title} onChange={(e) => {setTitle(e.target.value);}} required size="md" />
          </Box>
          <Box>
            <Text fontSize="sm" mb="6px">値段</Text>
            <Input type="number" name="price" placeholder="980" defaultValue={price} onChange={(e) => {setPrice(e.target.valueAsNumber);}} required size="md" />
          </Box>
          <Box>
            <Text fontSize="sm" mb="6px">説明文</Text>
            <Textarea type="text" name="description" placeholder="すごく使いやすいキャンプ道具です。" resize="vertical" h="200px" defaultValue={description} onChange={(e) => {setDescription(e.target.value);}} required />
          </Box>
          <Spacer />
          <Box justifyContent="flex-end">
            <Button type="submit" colorScheme="teal" size="md" w="100%" onClick={() => handleSubmit()} disabled={loading}>
              <span>{loading ? '処理中です...' : '申請する'}</span>
            </Button>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
