import React, { FC } from 'react';
import cn from 'classnames';
import { AppLink, AppLinkTheme } from '@shared/ui/AppLink/AppLink';
import styles from './styles.module.scss';
import HomeLink from '@shared/assets/icons/home.svg';
import { routePath } from '@shared/config/routeConfig/routeConfig';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={cn(styles.Navbar, className)}>
      <AppLink theme={AppLinkTheme.SECONDARY} to={routePath.main}>
        <HomeLink className={styles.Icon} />
      </AppLink>
    </div>
  );
};
