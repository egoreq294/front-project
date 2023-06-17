/* eslint-disable i18next/no-literal-string */
import React, { FC, useState } from 'react';
import cn from 'classnames';
import { ThemeSwitcher } from '@widgets/ThemeSwitcher';
import { LanguageSwitcher } from '@widgets/LanguageSwitcher';
import styles from './styles.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = (): void => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={cn(
        { [styles.Collapsed]: collapsed },
        styles.Sidebar,
        className,
      )}
    >
      <button type="button" onClick={onToggle}>
        toggle
      </button>
      <div className={styles.Switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
