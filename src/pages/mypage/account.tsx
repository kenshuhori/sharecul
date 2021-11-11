import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase';
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Input,
  Stack,
  Spacer,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';

export default function MypageAccountPage() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [email, setEmail] = useState(null);
  const [user, setUser] = useState(null);
  const formBackground = useColorModeValue("orange.50", "gray.700");
  const toast = useToast();

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
        setEmail(user.email)
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      const { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container background={formBackground} >
      <Stack spacing={8} mx="auto" mt="80px" mb="50px" px="80px" py="50px">
        <Box>
          <Center>
            <Text fontSize="2xl"><strong>アカウント</strong></Text>
          </Center>
          <Center>
            <Divider w="200px" borderBottomWidth="3px" borderColor="teal.600" />
          </Center>
        </Box>
        <Box>
          <Text fontSize="sm" mb="6px">お名前</Text>
          <Input type="text" name="name" placeholder="田中 太郎" value={username} required size="md" />
        </Box>
        <Box>
          <Text fontSize="sm" mb="6px">メールアドレス</Text>
          <Input type="email" name="email" placeholder="sharecul@example.com" value={email} required size="md" />
        </Box>
        <Spacer />
        <Box justifyContent="flex-end">
          <Button type="submit" colorScheme="teal" size="md" w="100%" onClick={() => updateProfile({ username, website, avatar_url })} disabled={loading}>
            <span>{loading ? '更新しています...' : '更新する'}</span>
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
