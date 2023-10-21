import { UserRoleEnum } from '../constants/constants';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRoleEnum[];
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
