import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { LanguageSwitcher } from '@features/LanguageSwitcher';
import { ThemeSwitcher } from '@features/ThemeSwitcher';
import { AppLogo } from '@shared/ui/AppLogo';
import { IconButton } from '@shared/ui/IconButton';
import { VStack } from '@shared/ui/Stack';
import { getSidebarItems } from '../model/selectors/getSidebarItems';
import { SidebarItem } from './SidebarItem/SidebarItem';

import styles from './styles.module.scss';

interface SidebarContentProps {
  showCollapseButton?: boolean;
  collapsed?: boolean;
  setCollapsed?: React.Dispatch<React.SetStateAction<boolean>>;
  onItemClick?: () => void;
}

export const SidebarContent: FC<SidebarContentProps> = memo(
  ({
    showCollapseButton = true,
    collapsed = false,
    setCollapsed,
    onItemClick,
  }) => {
    const onToggle = (): void => {
      setCollapsed?.((prev) => !prev);
    };

    const sidebarItems = useSelector(getSidebarItems);

    return (
      <>
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
            <SidebarItem
              key={item.path}
              item={item}
              collapsed={collapsed}
              onClick={onItemClick}
            />
          ))}
        </VStack>
        {showCollapseButton && (
          <IconButton
            data-testid="sidebar_toggle"
            className={styles.CollapseButton}
            onClick={onToggle}
            name={collapsed ? 'ChevronRight' : 'ChevronLeft'}
            width={20}
            height={20}
          />
        )}
        <div className={styles.Switchers}>
          <ThemeSwitcher />
          <LanguageSwitcher isShort={collapsed} />
        </div>
      </>
    );
  },
);
