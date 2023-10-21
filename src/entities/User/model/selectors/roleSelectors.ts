import { StateSchema } from '@app/providers/StorePovider';
import { UserRoleEnum } from '../constants/constants';
import { createSelector } from '@reduxjs/toolkit';

export const getUserRoles = (state: StateSchema): UserRoleEnum[] =>
  state?.user?.authData?.roles || [];

export const isAdminRole = createSelector(getUserRoles, (roles) =>
  roles.includes(UserRoleEnum.ADMIN),
);
export const isUserRole = createSelector(getUserRoles, (roles) =>
  roles.includes(UserRoleEnum.USER),
);
