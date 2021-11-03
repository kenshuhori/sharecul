import {
  Box,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
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
import api from '@/utils/api'

const CulturesPage = () => {
  const bg = useColorModeValue("white", "gray.700")
  const borderColor = useColorModeValue("gray.400", "white")
  const tableColor = useColorModeValue("black", "white")
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
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  )
}

export default CulturesPage
