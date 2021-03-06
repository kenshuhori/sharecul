import type { VFC } from 'react';
import {
  Button,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";

type Props = {
  name: string,
  path: string,
  colorScheme?: string,
  variant?: string,
};

export const LinkButton: VFC<Props> = (props) => {
  const size = useBreakpointValue({ base: 'sm', md: 'md' });
  const {name, path, colorScheme="teal", variant="solid" } = props;

  return (
    <Link href={path} _hover={{ textDecoration: "none" }}>
      <Button colorScheme={colorScheme} variant={variant} size={size} w="100%">
        {name}
      </Button>
    </Link>
  );
};
