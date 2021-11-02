import { Flex, Heading, Input, Button, useColorModeValue } from '@chakra-ui/react'
import { ContentHeader } from '@/components/admin/ContentHeader';
import api from '@/utils/api'

const CulturesPage = () => {
  return (
    <>
      <ContentHeader contentName="カルチャー" useNew="true" newPath="/admin/cultures/new"></ContentHeader>
    </>
  )
}

export default CulturesPage
