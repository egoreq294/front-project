import { Profile } from '@entities/Profile';
import { FeatureFlags } from '@shared/types/featureFlags';
import { UserRoleEnum } from '../constants/constants';
import { JsonSettings } from './jsonSettings';

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: string;
  email: string;
  roles?: UserRoleEnum[];
  features?: FeatureFlags;
  jsonSettings?: JsonSettings;
  profile?: Profile;
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
