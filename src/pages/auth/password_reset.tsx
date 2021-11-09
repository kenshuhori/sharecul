import {
  Container,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function AuthPasswordResetPage() {
  const formBackground = useColorModeValue("orange.50", "gray.700");
  return (
    <Container background={formBackground} >
      <Text>パスワード再設定</Text>
    </Container>
  );
};
