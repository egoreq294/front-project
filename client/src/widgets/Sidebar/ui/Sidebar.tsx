import cn from 'classnames';
import React, { FC, memo, useState } from 'react';

import { SidebarContent } from './SidebarContent';

import styles from './styles.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <aside
      data-testid="sidebar"
      className={cn(
        styles.Sidebar,
        { [styles.Collapsed]: collapsed },
        className,
      )}
    >
      <SidebarContent collapsed={collapsed} setCollapsed={setCollapsed} />
    </aside>
  );
});
