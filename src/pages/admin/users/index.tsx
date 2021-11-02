import { Flex, Heading, Input, Button, useColorModeValue } from '@chakra-ui/react'
import { ContentHeader } from '@/components/admin/ContentHeader';
import api from '@/utils/api'

const UsersPage = () => {
  return (
    <>
      <ContentHeader contentName="ユーザー" useNew="true" newPath="/admin/users/new"></ContentHeader>
    </>
  )
}

export default UsersPage
