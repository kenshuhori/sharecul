type Props = {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onkeypress: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onClickDiv: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export type Culture = {
  id: number;
  created_at: string;
  profile_id: string;
  title: string;
  description: string;
  price: number;
  status: string;
  profiles?: Profile;
}

export type Profile = {
  id: string;
  username: string;
  avatar_url: string;
  website: string;
}
