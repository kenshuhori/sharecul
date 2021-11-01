import {
  Button,
  Flex,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const ContentHeader = (props) => {
  const {contentName, useNew, newPath} = props;
  const backGround = useColorModeValue("gray.200", "gray.700")
  return (
    <Flex w="100%" p="12px" bg={backGround}>
      <Text fontSize="2xl"><b>{props.contentName}</b></Text>
      <Spacer />
      <Button colorScheme="teal" size="md">新規作成</Button>
    </Flex>
  );
}
