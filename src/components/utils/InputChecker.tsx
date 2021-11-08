import type { VFC } from 'react';
import { CheckIcon } from '@chakra-ui/icons';

type Props = {type: string, value: string};

export const InputChecker: VFC<Props> = (props) => {
  const {type, value} = props;
  let enable = false;
  if (type === 'text') {
    enable = !!value;
  } else if (type === 'email') {
    const email_regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;
    enable = email_regexp.test(value);
  } else if (type === 'password') {
    enable = !!value;
  } else if (type === 'password_confirm') {
    enable = (value == 'true');
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
