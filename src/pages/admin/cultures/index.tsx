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
  return (
    <>
      <ContentHeader contentName="カルチャー" useNew="true" newPath="/admin/cultures/new"></ContentHeader>
      <Flex mt="12px" bg={backGround} fontSize="sm">
        <Box p="8px"><Text>フィルター</Text></Box>
        <Input w="300px" fontSize="sm" border="2px solid black" borderRadius="3xl" placeholder="タイトルまたは説明文"></Input>
        <Spacer />
        <Box p="4px">並び順</Box>
        <Box>
          <Menu>
            <MenuButton px={4} py={2} transition="all 0.2s" borderRadius="md" _hover={{ bg: "gray.400" }} _expanded={{ bg: "gray.400" }} >
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
