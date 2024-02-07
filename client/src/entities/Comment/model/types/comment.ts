import { Profile } from '@entities/Profile';

export interface CommentType {
  id: string;
  profile: Profile;
  text: string;
}
