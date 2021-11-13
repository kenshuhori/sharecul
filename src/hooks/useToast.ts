import {
  useToast as useChakraToast,
} from '@chakra-ui/react';

export const useToast = () => {
  const toast = useChakraToast();

  function messageOnToast(message, status) {
    toast({
      title: message,
      status: status,
      position: "top",
      isClosable: true,
    });
  };
  return {messageOnToast};
};
