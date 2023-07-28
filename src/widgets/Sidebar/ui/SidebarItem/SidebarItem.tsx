import React, { FC, memo } from 'react';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from '@shared/ui/AppLink/AppLink';
import { SidebarItemType } from '@widgets/Sidebar/model/types';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@entities/User';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink theme={AppLinkTheme.SECONDARY} to={item.path}>
      <div className={styles.Item}>
        {item.Icon && <item.Icon className={styles.Icon} />}
        {!collapsed && t(item.text)}
      </div>
    </AppLink>
  );
});
