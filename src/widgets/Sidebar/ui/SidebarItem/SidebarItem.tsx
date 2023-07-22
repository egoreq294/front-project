import React, { FC, memo } from 'react';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from '@shared/ui/AppLink/AppLink';
import { SidebarItemType } from '@widgets/Sidebar/model/types';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
  const { t } = useTranslation();

  return (
    <AppLink theme={AppLinkTheme.SECONDARY} to={item.path}>
      <div className={styles.Item}>
        <item.Icon className={styles.Icon} />
        {!collapsed && t(item.text)}
      </div>
    </AppLink>
  );
});
