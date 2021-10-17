import { useState } from 'react'
import { CheckIcon } from '@chakra-ui/icons'
import { Flex, Heading, FormControl, FormLabel, FormErrorMessage, FormHelperText, InputGroup, InputLeftElement, InputRightElement, Text, Input, Button, useColorModeValue } from '@chakra-ui/react'
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import { InputChecker } from '@/components/utils/InputChecker'
import api from '@/utils/api'

const IndexPage = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const submit = async () => {
    let body = { 'hoge': 'fuga' };
    let response = await api.post('/api/admin', body)
    console.log(response);
  }
  return (
    <Formik
      initialValues={{}}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props: FormikProps<any>) => (
        <Form>
          <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background={formBackground} p={12} rounded={6}>
              <Heading mb={6}>Sign Up</Heading>
              <Field name="name">
                {({field, form}: { field: any, form: any }) => (
                  <FormControl isRequired>
                    <FormLabel fontSize={12} htmlFor="name">お名前</FormLabel>
                    <InputGroup>
                      <Input id="name" {...field} placeholder="田中タロウ" varient="Filled" mb={3} type="text" />
                      <InputRightElement children={<InputChecker type="text" value="hoge" />} />
                    </InputGroup>
                  </FormControl>
                  )
                }
              </Field>
              <Field name="email">
                {({field, form}: { field: any, form: any }) => (
                  <FormControl isRequired>
                    <FormLabel fontSize={12} htmlFor="email">メールアドレス</FormLabel>
                    <InputGroup>
                      <Input id="email" {...field} placeholder="sharecul@example.com" varient="Filled" mb={3} type="email" />
                      <InputRightElement children={<InputChecker type="text" value="hoge" />} />
                    </InputGroup>
                  </FormControl>
                  )
                }
              </Field>
              <Field name="password">
                {({field, form}: { field: any, form: any }) => (
                  <FormControl isRequired>
                    <FormLabel fontSize={12} htmlFor="password">パスワード</FormLabel>
                    <InputGroup>
                      <Input id="password" {...field} placeholder="******" varient="Fileed" mb={6} type="password" />
                      <InputRightElement children={<InputChecker type="password" value="" />} />
                    </InputGroup>
                  </FormControl>
                  )
                }
              </Field>
              <Button isLoading={props.isSubmitting} type="submit" colorScheme="teal" mb={6}>登録</Button>
            </Flex>
          </Flex>
        </Form>
      )}
    </Formik>
  )
}

export default IndexPage
