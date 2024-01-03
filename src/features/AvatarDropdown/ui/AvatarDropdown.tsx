import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData, isAdminRole, userActions } from '@entities/User';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Avatar } from '@shared/ui/Avatar';
import { Dropdown } from '@shared/ui/Dropdown';

import styles from './styles.module.scss';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isAdminRole);

  const onLogout = useCallback((): void => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={className}
      direction="bottom-left"
      items={[
        {
          id: '1',
          content: t('my-profile'),
          href: `/profile/${authData.id}`,
        },
        ...(isAdmin
          ? [
              {
                id: '2',
                content: t('admin-panel'),
                href: '/admin',
              },
            ]
          : []),
        { id: '3', content: t('logout'), onClick: onLogout },
      ]}
      trigger={
        <Avatar className={styles.Avatar} size={48} src={authData.avatar} />
      }
    />
  );
};
