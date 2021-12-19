import {
  Box,
  Center,
  Divider,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function AboutPage() {
  return (
    <div>
      <Stack>
        <Box>
          <Center pt={8}>
            <Text fontSize="2xl"><strong>About</strong></Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Divider w="200px" borderBottomWidth="3px" borderColor="teal.600" />
          </Center>
        </Box>
        <Box px="5%" pb="100px">
          <section>
            <Stack>
              <article>
                <Text>ほにゃらら</Text>
              </article>
            </Stack>
          </section>
        </Box>
      </Stack>
    </div>
  );
};
