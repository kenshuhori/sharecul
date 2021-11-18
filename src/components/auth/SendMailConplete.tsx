import {
  Box,
  Center,
  Container,
  Divider,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import type { VFC } from 'react';

type Props = {title: string, email: string};

export const SendMailComplete: VFC<Props> = (props) => {
  let {title, email} = props;
  const formBackground = useColorModeValue("orange.50", "gray.700");

  return(
    <Container background={formBackground} >
      <Stack spacing={8} mx="auto" mt="80px" mb="50px" px="80px" py="50px">
        <Box>
          <Center>
            <Text fontSize="2xl"><strong>{title}</strong></Text>
          </Center>
          <Center>
            <Divider w="200px" borderBottomWidth="3px" borderColor="teal.600" />
          </Center>
        </Box>
        <Box>
          <Center>
            <Text fontSize="2xl">{email} 宛にメールを送信しました。</Text>
          </Center>
        </Box>
      </Stack>
    </Container>
  )
};
