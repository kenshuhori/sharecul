import {
  Box,
  Checkbox,
  Flex,
  Image,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Select,
  Spacer,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { ContentHeader } from '@/components/admin/ContentHeader';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import { readAll, update } from '@/utils/supabase';
import { useToast } from '@/hooks/useToast';

import type { FormEvent } from 'react';
import type { Culture } from "@/@types/common";

const CulturesPage = () => {
  const bg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.400", "white");
  const tableColor = useColorModeValue("black", "white");
  const { messageOnToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [cultures, setCultures] = useState<Culture[]>([]);

  useEffect(() => {
    const fetchCultures = async () => {
      let res = await readAll('cultures', '*, profiles (username)', 'created_at') || [];
      setCultures(res);
    };
    fetchCultures();
  }, []);

  const updateCulture = async (culture) => {
    try {
      setLoading(true);
      let data = await update('cultures', {
        status: culture.status
      }, {
        id: culture.id
      });
      if(data) {
        messageOnToast('更新しました', 'success');
      }
    } catch (error: any) {
      messageOnToast(error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  const onStatusChange = (event: FormEvent<HTMLSelectElement>, culture: Culture) => {
    if (!(event.target instanceof HTMLSelectElement)) {
      return;
    }
    culture.status = event.target.value;
    updateCulture(culture);
  };

  const handleOrder = (event: FormEvent<HTMLSelectElement>) => {
    if (!(event.target instanceof HTMLSelectElement)) {
      return;
    }
    // orderCultures(event.target.value);
  };

  return (
    <>
      <ContentHeader contentName="カルチャー" useNew={true} newPath="/admin/cultures/new"></ContentHeader>
      <Flex mt="12px" bg={bg} fontSize="sm">
        <Box p="11px">フィルター</Box>
        <Box p="6px">
          <Input w="300px" fontSize="sm" size="sm" border="1px solid" borderRadius="3xl" borderColor={borderColor} placeholder="タイトルまたは説明文"></Input>
        </Box>
        <Spacer />
        <Box p="11px">並び順</Box>
        <Box p="6px">
          <Select _hover={{ cursor: "pointer" }} onChange={(e) => {handleOrder(e);}}>
            <option value="created_at">新しい順</option>
            <option value="price">価格が高い順</option>
            <option value="title">タイトル順</option>
            <option value="author">著者順</option>
          </Select>
        </Box>
      </Flex>

      <Table variant="simple" bg={bg} color={tableColor} mt="12px">
        <TableCaption>カルチャー一覧</TableCaption>
        <Thead>
          <Tr>
            <Th w="3%"><Checkbox /></Th>
            <Th w="15%">イメージ</Th>
            <Th w="45%">内容</Th>
            <Th w="14%">ユーザー</Th>
            <Th w="13%">操作</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cultures.map(culture => {
            return (
              <Tr key={culture.id}>
                <Td><Checkbox /></Td>
                <Td>
                  <Stack spacing={1}>
                    <Image src="/brothers.jpg" alt="カルチャーイメージ"></Image>
                    <Select h="30px" _hover={{ cursor: "pointer" }} onChange={(e) => {onStatusChange(e, culture);}}>
                      <option value="公開" selected={culture.status == '公開'}>公開</option>
                      <option value="非公開" selected={culture.status == '非公開'}>非公開</option>
                    </Select>
                  </Stack>
                </Td>
                <Td>
                  <Stack>
                    <Box>{culture.title}</Box>
                    <Box>
                      {culture.description}
                    </Box>
                  </Stack>
                </Td>
                <Td>{culture.profiles.username}</Td>
                <Td>
                  <Stack>
                    <Link>編集する</Link>
                    <Link>削除する</Link>
                    <Link>公開する</Link>
                  </Stack>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};

export default CulturesPage;
