import type { VFC } from 'react';
import { CheckIcon } from '@chakra-ui/icons';

type Props = {type: string, value: Value};
interface Value {
  text?: string,
  email?: string,
  password?: string,
  password_confirm?: string
}

export const InputChecker: VFC<Props> = (props) => {
  const {type, value} = props;
  if (!value['text']) { value['text'] = ''; };
  if (!value['email']) { value['email'] = ''; };
  if (!value['password']) { value['password'] = ''; };
  if (!value['password_confirm']) { value['password_confirm'] = ''; };
  let enable = false;
  if (type === 'text') {
    enable = !!value['text'];
  } else if (type === 'email') {
    const email_regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;
    enable = email_regexp.test(value['email']);
  } else if (type === 'password') {
    enable = !!value['password'] && value['password'].length > 5;
  } else if (type === 'password_confirm') {
    enable = (value['password'] == value['password_confirm']) && value['password'].length > 5;
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
