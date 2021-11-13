import {
  Avatar,
  AvatarBadge,
  IconButton,
  Input
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';

export default function AvatarProfile({ url, onUpload }) {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log('Error downloading image: ', error.message);
    }
  }

  async function uploadAvatar(event) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  function clickFileInput() {
    let target = document.getElementById("avatar-input");
    if (target) target.click();
  }

  return (
    <div>
      <Avatar size="xl" src={avatarUrl} alt="Avatar">
        <AvatarBadge boxSize="40px" border="none">
          <Input id="avatar-input" type="file" accept="image/*" onChange={uploadAvatar} disabled={uploading} visibility="hidden" position="absolute" />
          <IconButton colorScheme="teal" aria-label="Change Avatar" onClick={clickFileInput} borderRadius="50%">
            <AttachmentIcon />
          </IconButton>
        </AvatarBadge>
      </Avatar>
    </div>
  );
}
