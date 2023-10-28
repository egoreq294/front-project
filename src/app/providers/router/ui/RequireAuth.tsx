import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData } from '@entities/User';

export const RequireAuth = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={'/'} state={{ from: location }} replace />;
  }

  return children;
};
