import { FeatureFlags } from '@shared/types/featureFlags';
import { UserRoleEnum } from '../constants/constants';
import { JsonSettings } from './jsonSettings';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRoleEnum[];
  features?: FeatureFlags;
  jsonSettings?: JsonSettings;
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
