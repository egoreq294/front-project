import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@entities/User';
import { AppLink } from '@shared/ui/deprecated/AppLink';
import { Icon } from '@shared/ui/Icon';
import { SidebarItemType } from '../../model/types/sidebar';

import styles from './styles.module.scss';

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
    <AppLink theme="Inverted" to={item.path}>
      <div className={styles.Item}>
        {item.iconName && <Icon name={item.iconName} className={styles.Icon} />}
        {!collapsed && t(item.text)}
      </div>
    </AppLink>
  );
});
