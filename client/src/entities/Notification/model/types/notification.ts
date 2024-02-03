import { Profile } from '@entities/Profile';

export interface Notification {
  id: string;
  title: string;
  profile: Profile;
  description: string | null;
  href: string | null;
}
