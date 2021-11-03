import {
  Box,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ContentHeader } from '@/components/admin/ContentHeader';
import { ChevronDownIcon } from '@chakra-ui/icons'
import api from '@/utils/api'

const CulturesPage = () => {
  const backGround = useColorModeValue("white", "gray.700")
  const borderColor = useColorModeValue("gray.400", "white")
  return (
    <>
      <ContentHeader contentName="カルチャー" useNew="true" newPath="/admin/cultures/new"></ContentHeader>
      <Flex mt="12px" bg={backGround} fontSize="sm">
        <Box p="10px">フィルター</Box>
        <Box p="6px">
          <Input w="300px" fontSize="sm" size="sm" border="1px solid" borderRadius="3xl" borderColor={borderColor} placeholder="タイトルまたは説明文"></Input>
        </Box>
        <Spacer />
        <Box p="10px">並び順</Box>
        <Box p="2px">
          <Menu>
            <MenuButton px={4} py={2} transition="all 0.2s" border="1px solid black" borderRadius="md" borderColor={borderColor} _hover={{ bg: "gray.400" }} _expanded={{ bg: "gray.400" }} >
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
    </>
  )
}

export default CulturesPage
