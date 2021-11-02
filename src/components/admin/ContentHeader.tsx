import {
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
      <Flex w="100%" p="12px" bg={backGround}>
        <Text fontSize="2xl"><b>{contentName}</b></Text>
        <Spacer />
        <LinkButton name="新規作成" path={newPath}></LinkButton>
      </Flex>
    );
  } else {
    return (
      <Flex w="100%" p="12px" bg={backGround}>
        <Text fontSize="2xl"><b>{contentName}</b></Text>
        <Spacer />
      </Flex>
    );
  }
}
