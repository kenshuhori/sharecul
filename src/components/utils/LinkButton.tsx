import type { VFC } from 'react';
import { Button, Link } from "@chakra-ui/react";

type Props = {name: string, path: string};

export const LinkButton: VFC<Props> = (props) => {
  const {name, path} = props;
  return (
    <Link href={path} _hover={{ textDecoration: "none" }}>
      <Button colorScheme="teal" size="md" w="100%">{name}</Button>
    </Link>
  )
};
