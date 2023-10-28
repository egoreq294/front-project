import cn from 'classnames';
import React, { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@shared/ui/Button/Button';
import { VStack } from '@shared/ui/Stack/VStack/VStack';
import { LanguageSwitcher } from '@widgets/LanguageSwitcher';
import { ThemeSwitcher } from '@widgets/ThemeSwitcher';
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
        { [styles.Collapsed]: collapsed },
        styles.Sidebar,
        className,
      )}
    >
      <Button
        data-testid="sidebar_toggle"
        className={styles.CollapseButton}
        onClick={onToggle}
        variant="PrimaryInverted"
      >
        {collapsed ? '>' : '<'}
      </Button>
      <VStack
        role="navigation"
        gap="16"
        align={collapsed ? 'center' : 'start'}
        className={styles.Items}
      >
        {sidebarItems.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </VStack>
      <div className={styles.Switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher isShort={collapsed} />
      </div>
    </aside>
  );
});
