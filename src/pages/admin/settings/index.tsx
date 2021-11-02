import { Flex, Heading, Input, Button, useColorModeValue } from '@chakra-ui/react'
import { ContentHeader } from '@/components/admin/ContentHeader';
import api from '@/utils/api'

const SettingsPage = () => {
  return (
    <>
      <ContentHeader contentName="設定" useNew="false"></ContentHeader>
    </>
  )
}

export default SettingsPage
