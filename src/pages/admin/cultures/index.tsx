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
} from '@chakra-ui/react'
import { ContentHeader } from '@/components/admin/ContentHeader';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useSession } from '@/utils/useSession'
import api from '@/utils/api'

const CulturesPage = () => {
  const bg = useColorModeValue("white", "gray.700")
  const borderColor = useColorModeValue("gray.400", "white")
  const tableColor = useColorModeValue("black", "white")
  const { session } = useSession();
  return (
    <>
      <ContentHeader contentName="カルチャー" useNew="true" newPath="/admin/cultures/new"></ContentHeader>
      <Flex mt="12px" bg={bg} fontSize="sm">
        <Box p="11px">フィルター</Box>
        <Box p="6px">
          <Input w="300px" fontSize="sm" size="sm" border="1px solid" borderRadius="3xl" borderColor={borderColor} placeholder="タイトルまたは説明文"></Input>
        </Box>
        <Spacer />
        <Box p="11px">並び順</Box>
        <Box p="6px">
          <Menu>
            <MenuButton px={4} py={1} transition="all 0.2s" border="1px solid black" borderRadius="md" borderColor={borderColor} _hover={{ bg: "gray.400" }} _expanded={{ bg: "gray.400" }} >
              新しい順 <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>名前順</MenuItem>
              <MenuItem>価格が高い順</MenuItem>
              <MenuItem>価格が安い順</MenuItem>
            </MenuList>
          </Menu>
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
          {[1, 2, 3].map(culture => {
            return (
              <Tr>
                <Td><Checkbox /></Td>
                <Td>
                  <Stack spacing={1}>
                    <Image src="/brothers.jpg"></Image>
                    <Menu>
                      <MenuButton transition="all 0.2s" border="1px solid" borderColor={borderColor} _hover={{ bg: "gray.400" }} _expanded={{ bg: "gray.400" }} >
                        公開 <ChevronDownIcon />
                      </MenuButton>
                      <MenuList>
                        <MenuItem>公開</MenuItem>
                        <MenuItem>非公開</MenuItem>
                      </MenuList>
                    </Menu>
                  </Stack>
                </Td>
                <Td>
                  <Stack>
                    <Box>タイトルが入ります</Box>
                    <Box>
                      説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。
                    </Box>
                  </Stack>
                </Td>
                <Td>著者名</Td>
                <Td>
                  <Stack>
                    <Link>編集する</Link>
                    <Link>削除する</Link>
                    <Link>公開する</Link>
                  </Stack>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </>
  )
}

export default CulturesPage
