import cn from 'classnames';
import React, { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { LanguageSwitcher } from '@features/LanguageSwitcher';
import { ThemeSwitcher } from '@features/ThemeSwitcher';
import { AppLogo } from '@shared/ui/AppLogo';
import { IconButton } from '@shared/ui/IconButton';
import { VStack } from '@shared/ui/Stack';
import { getSidebarItems } from '../model/selectors/getSidebarItems';
import { SidebarItem } from './SidebarItem/SidebarItem';

import styles from './styles.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = (): void => {
    setCollapsed((prev) => !prev);
  };

  const sidebarItems = useSelector(getSidebarItems);

  return (
    <aside
      data-testid="sidebar"
      className={cn(
        styles.Sidebar,
        { [styles.Collapsed]: collapsed },
        className,
      )}
    >
      <AppLogo
        className={styles.AppLogo}
        width={collapsed ? 60 : 100}
        height={collapsed ? 24 : 40}
      />
      <VStack
        role="navigation"
        align={collapsed ? 'center' : 'start'}
        className={styles.Items}
      >
        {sidebarItems.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </VStack>
      <IconButton
        data-testid="sidebar_toggle"
        className={styles.CollapseButton}
        onClick={onToggle}
        name={collapsed ? 'ChevronRight' : 'ChevronLeft'}
        width={20}
        height={20}
      />
      <div className={styles.Switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher isShort={collapsed} />
      </div>
    </aside>
  );
});
