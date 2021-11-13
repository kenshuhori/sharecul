import {
  Box,
  Flex,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import type { VFC } from 'react';
import { LinkButton } from "@/components/utils/LinkButton";

type Props = {contentName: string, useNew: boolean, newPath?: string};

export const ContentHeader: VFC<Props> = (props) => {
  let {contentName, useNew, newPath} = props;
  if (!newPath) { newPath = ''; }
  const bg = useColorModeValue("white", "gray.700");
  if (useNew == true) {
    return (
      <Flex w="100%" p="6px" bg={bg}>
        <Box p="4px" fontSize="xl"><b>{contentName}</b></Box>
        <Spacer />
        <LinkButton name="新規作成" path={newPath}></LinkButton>
      </Flex>
    );
  } else {
    return (
      <Flex w="100%" p="8px" bg={bg}>
        <Text fontSize="xl"><b>{contentName}</b></Text>
        <Spacer />
      </Flex>
    );
  }
};
