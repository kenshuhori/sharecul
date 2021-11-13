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
import { useRouter } from 'next/router';
import { useSession } from '@/hooks/useSession';
import AvatarProfile from '@/components/utils/AvatarProfile';

export default function MypageAccountPage() {
  const formBackground = useColorModeValue("orange.50", "gray.700");
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [avatar_url, setAvatarUrl] = useState('');
  const [email, setEmail] = useState('');
  const { session } = useSession();
  const { replace } = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (!Object.keys(session).length) {
      replace('/auth/signin');
    } else {
      getProfile();
    }
  }, []);

  const unAuthorizedUser = { id: 0 };

  async function getProfile() {
    try {
      setLoading(true);
      const user: any = supabase.auth.user();

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, avatar_url`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setAvatarUrl(data.avatar_url);
        setEmail(user.email);
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile(username: string, avatar_url?: string) {
    try {
      setLoading(true);
      const user = supabase.auth.user() || unAuthorizedUser;

      const updates = avatar_url ?
        {
          id: user.id,
          username,
          avatar_url,
          updated_at: new Date(),
        } : {
          id: user.id,
          username,
          updated_at: new Date(),
        };

      const { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error: any) {
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
          <Center>
            <AvatarProfile
              url={avatar_url}
              onUpload={(url) => {
                setAvatarUrl(url);
                updateProfile(username, url);
              }}
            />
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
          <Button type="submit" colorScheme="teal" size="md" w="100%" onClick={() => updateProfile(username)} disabled={loading}>
            <span>{loading ? '更新しています...' : '更新する'}</span>
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
