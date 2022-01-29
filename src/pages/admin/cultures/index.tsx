import {
  Box,
  Checkbox,
  Flex,
  Image,
  Input,
  Link,
  Select,
  Spacer,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import { ContentHeader } from '@/components/admin/ContentHeader';
import { useState, useEffect } from 'react';
import { readAll, update } from '@/utils/supabase';
import { useToast } from '@/hooks/useToast';

import type { FormEvent } from 'react';
import type { Culture } from "@/@types/common";

const CulturesPage = () => {
  const { messageOnToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [cultures, setCultures] = useState<Culture[]>([]);
  const [filtered_cultures, setFilteredCultures] = useState<Culture[]>([]);
  const [checkedItems, setCheckedItems] = useState([false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  useEffect(() => {
    const fetchCultures = async () => {
      let res = await readAll('cultures', '*, profiles (username)', 'created_at') || [];
      setCultures(res);
      setFilteredCultures(res);
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

  const onOrderChange = (event: FormEvent<HTMLSelectElement>) => {
    if (!(event.target instanceof HTMLSelectElement)) {
      return;
    }
    let value = event.target.value;
    let orderedCultures = filtered_cultures.sort((bef, af) => {
      if (bef[value] > af[value]) {
        return -1;
      } else {
        return 1;
      }
    });
    setFilteredCultures([...orderedCultures]);
  };

  const statusColor = (status) => {
    if(status === '公開') {
      return 'green.400';
    } else {
      return 'red.400';
    }
  };

  return (
    <>
      <ContentHeader contentName="カルチャー" useNew={true} newPath="/admin/cultures/new"></ContentHeader>
      <Flex mt="12px" bg="white" fontSize="sm">
        <Box p="11px">フィルター</Box>
        <Box p="6px">
          <Input w="300px" fontSize="sm" size="sm" border="1px solid" borderRadius="3xl" borderColor="gray.400" placeholder="タイトルまたは説明文"></Input>
        </Box>
        <Spacer />
        <Box p="11px">並び順</Box>
        <Box p="6px">
          <Select _hover={{ cursor: "pointer" }} onChange={(e) => {onOrderChange(e);}}>
            <option value="created_at">新しい順</option>
            <option value="price">価格が高い順</option>
            <option value="title">タイトル順</option>
            <option value="author">著者順</option>
          </Select>
        </Box>
      </Flex>

      <Table variant="simple" bg="white" color="black" mt="12px">
        <TableCaption>カルチャー一覧</TableCaption>
        <Thead>
          <Tr>
            <Th w="3%">
              <Checkbox
                isChecked={allChecked}
                isIndeterminate={isIndeterminate}
                onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
              />
            </Th>
            <Th w="15%">イメージ</Th>
            <Th w="44%">内容</Th>
            <Th w="11%">値段</Th>
            <Th w="14%">ユーザー</Th>
            <Th w="13%">操作</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filtered_cultures.map(culture => {
            return (
              <Tr key={culture.id}>
                <Td>
                  <Checkbox
                    isChecked={checkedItems[0]}
                    onChange={(e) => setCheckedItems([e.target.checked, checkedItems[culture.id]])}
                  />
                </Td>
                <Td>
                  <Stack spacing={1}>
                    <Image src="/brothers.jpg" alt="カルチャーイメージ"></Image>
                    <Select size='sm' _hover={{ cursor: "pointer" }} bg={statusColor(culture.status)} onChange={(e) => {onStatusChange(e, culture);}}>
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
                <Td>{culture.price}</Td>
                <Td>{culture.profiles.username}</Td>
                <Td>
                  <Stack>
                    <Link>編集する</Link>
                    <Link color="red">削除する</Link>
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
