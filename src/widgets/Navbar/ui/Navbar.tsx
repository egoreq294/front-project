import React, { FC } from 'react';
import cn from 'classnames';
import { AppLink, AppLinkTheme } from '@shared/ui/AppLink/AppLink';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation('about');

  return (
    <div className={cn(styles.Navbar, className)}>
      <div className={styles.Links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          {t('home-link')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t('about-link')}
        </AppLink>
      </div>
    </div>
  );
};
