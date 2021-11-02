import {
  Box,
  Flex,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { LinkButton } from "@/components/utils/LinkButton"

export const ContentHeader = (props) => {
  const {contentName, useNew, newPath} = props;
  const backGround = useColorModeValue("gray.200", "gray.700")
  if (useNew == "true") {
    return (
      <Flex w="100%" p="6px" bg={backGround}>
        <Box p="4px" fontSize="xl"><b>{contentName}</b></Box>
        <Spacer />
        <LinkButton name="新規作成" path={newPath}></LinkButton>
      </Flex>
    );
  } else {
    return (
      <Flex w="100%" p="8px" bg={backGround}>
        <Text fontSize="xl"><b>{contentName}</b></Text>
        <Spacer />
      </Flex>
    );
  }
}
