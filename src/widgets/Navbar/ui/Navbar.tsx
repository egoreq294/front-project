import React, { FC } from 'react';
import cn from 'classnames';
import { AppLink, AppLinkTheme } from '@shared/ui/AppLink/AppLink';
import styles from './styles.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={cn(styles.Navbar, className)}>
    <div className={styles.Links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/">
        Main
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        About
      </AppLink>
    </div>
  </div>
);
