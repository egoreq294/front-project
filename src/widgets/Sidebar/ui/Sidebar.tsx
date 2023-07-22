import React, { FC, memo, useState } from 'react';
import cn from 'classnames';
import { ThemeSwitcher } from '@widgets/ThemeSwitcher';
import { LanguageSwitcher } from '@widgets/LanguageSwitcher';
import styles from './styles.module.scss';
import { Button } from '@shared/ui/Button/Button';
import { SIDEBAR_ITEMS_LIST } from '../model/constants';
import { SidebarItem } from './SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = (): void => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
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
        variant="Ghost"
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.Items}>
        {SIDEBAR_ITEMS_LIST.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={styles.Switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher isShort={collapsed} />
      </div>
    </div>
  );
});
