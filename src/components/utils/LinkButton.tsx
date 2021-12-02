import type { VFC } from 'react';
import { Button, Link } from "@chakra-ui/react";

type Props = {
  name: string,
  path: string,
  colorScheme?: string,
  variant?: string
};

export const LinkButton: VFC<Props> = (props) => {
  const {name, path, colorScheme = "teal", variant = "solid"} = props;
  return (
    <Link href={path} _hover={{ textDecoration: "none" }}>
      <Button colorScheme={colorScheme} variant={variant} size="md" w="100%">
        {name}
      </Button>
    </Link>
  );
};
