import {
  Box,
  Center,
  Divider,
  Stack,
  Text,
} from '@chakra-ui/react';

const IndexPage = () => {
  return (
    <div>
      <Stack>
        <Box>
          <Center pt={8}>
            <Text fontSize="3xl"><strong>About</strong></Text>
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

export default IndexPage;
