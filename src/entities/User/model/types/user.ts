export enum UserRoleEnum {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

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
