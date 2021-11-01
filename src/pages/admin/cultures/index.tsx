import { Flex, Heading, Input, Button, useColorModeValue } from '@chakra-ui/react'
import { ContentHeader } from '@/components/admin/ContentHeader';
import api from '@/utils/api'

const IndexPage = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const submit = async () => {
    let body = { 'hoge': 'fuga' };
    let response = await api.post('/api/admin', body)
    console.log(response);
  }
  return (
    <>
      <ContentHeader contentName="カルチャー" useNew="false"></ContentHeader>
    </>
  )
}

export default IndexPage
