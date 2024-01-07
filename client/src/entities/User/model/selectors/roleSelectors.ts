import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@app/providers/StoreProvider';
import { UserRoleEnum } from '../constants/constants';

export const getUserRoles = (state: StateSchema): UserRoleEnum[] =>
  state?.user?.authData?.roles || [];

export const isAdminRole = createSelector(getUserRoles, (roles) =>
  roles.includes(UserRoleEnum.ADMIN),
);
export const isUserRole = createSelector(getUserRoles, (roles) =>
  roles.includes(UserRoleEnum.USER),
);
