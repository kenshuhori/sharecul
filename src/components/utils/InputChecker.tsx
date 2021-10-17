import type { VFC } from 'react';
import { Flex, Box, Spacer, IconButton, useColorMode } from "@chakra-ui/react"
import { CheckIcon } from '@chakra-ui/icons'

type Props = {type: string, value: string};

export const InputChecker: VFC<Props> = (props) => {
  const {type, value} = props;
  let enable = false;
  if (type === 'text') {
    enable = !!value;
  }
  if (enable) {
    return (
      <>
        <CheckIcon color="green.500" />
      </>
    );
  } else {
    return (
      <></>
    );
  }
};
