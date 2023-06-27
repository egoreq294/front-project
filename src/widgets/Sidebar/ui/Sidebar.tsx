/* eslint-disable i18next/no-literal-string */
import React, { FC, useState } from 'react';
import cn from 'classnames';
import { ThemeSwitcher } from '@widgets/ThemeSwitcher';
import { LanguageSwitcher } from '@widgets/LanguageSwitcher';
import styles from './styles.module.scss';
import { Button } from '@shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from '@shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { routePath } from '@shared/config/routeConfig/routeConfig';
import HomeLink from '@shared/assets/icons/home.svg';
import AboutLink from '@shared/assets/icons/about.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const { t } = useTranslation('about');

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
        variant="PrimaryInverted"
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.Items}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={routePath.main}>
          <div className={styles.Item}>
            <HomeLink className={styles.Icon} />
            {!collapsed && t('home-link')}
          </div>
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={routePath.about}>
          <div className={styles.Item}>
            <AboutLink className={styles.Icon} />
            {!collapsed && t('about-link')}
          </div>
        </AppLink>
      </div>
      <div className={styles.Switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher isShort={collapsed} />
      </div>
    </div>
  );
};
