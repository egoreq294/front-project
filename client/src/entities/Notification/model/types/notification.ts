import { Profile } from '@entities/Profile';

export interface Notification {
  id: string;
  title: string;
  profile: Profile;
  description: string | null;
  href: string | null;
}

export type NotificationSchema = {
  data: Notification[] | null;
  error: string | null;
  isLoading: boolean;
};
