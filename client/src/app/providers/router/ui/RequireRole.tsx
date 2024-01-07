import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserRoles,UserRoleEnum } from '@entities/User';

export const RequireRole = ({
  children,
  roles,
}: {
  children: JSX.Element;
  roles?: UserRoleEnum[];
}): JSX.Element => {
  const location = useLocation();

  const userRoles = useSelector(getUserRoles);

  const hasRequierdRoles = useMemo((): boolean => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => userRoles.includes(requiredRole));
  }, [roles, userRoles]);

  if (!hasRequierdRoles) {
    return <Navigate to={'/forbidden'} state={{ from: location }} replace />;
  }

  return children;
};
