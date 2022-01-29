import {
  Box,
  Center,
  Container,
  Divider,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  CheckCircleIcon
} from '@chakra-ui/icons';
import type { VFC } from 'react';

type Props = {title: string, email: string};

export const SendMailComplete: VFC<Props> = (props) => {
  let {title, email} = props;

  return(
    <Container background="orange.50" >
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
            <CheckCircleIcon boxSize={20} color="teal.500" />
          </Center>
        </Box>
        <Box>
          <Center>
            <Text fontSize="xl" textAlign="center">{email} 宛に<br/>メールを送信しました。</Text>
          </Center>
        </Box>
      </Stack>
    </Container>
  );
};
