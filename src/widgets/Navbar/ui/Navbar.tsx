import cn from 'classnames';
import React, { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@entities/User';
import { LoginModal } from '@features/AuthByUsername';
import { AvatarDropdown } from '@features/AvatarDropdown';
import { NotificationButton } from '@features/NotificationButton';
import { ToggleFeatures } from '@shared/lib/features';
import { AppLink } from '@shared/ui/AppLink';
import { Button } from '@shared/ui/deprecated/Button';
import { Typography } from '@shared/ui/deprecated/Typography';
import { HStack } from '@shared/ui/Stack';

import styles from './styles.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const authData = useSelector(getUserAuthData);

  const { t } = useTranslation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const onCloseModal = useCallback((): void => {
    setIsLoginModalOpen(false);
  }, []);

  const onOpenModal = useCallback((): void => {
    setIsLoginModalOpen(true);
  }, []);

  return (
    <ToggleFeatures
      feature="redesignedApp"
      off={
        <>
          <header className={cn(styles.Navbar, className)}>
            <Typography
              variant="M"
              theme="Inverted"
              className={styles.ProjectName}
            >
              {t('project-name')}
            </Typography>

            {authData && (
              <>
                <AppLink to={'/articles/create'}>{t('create-article')}</AppLink>
                <HStack gap="16" className={styles.Actions}>
                  <NotificationButton />
                  <AvatarDropdown />
                </HStack>
              </>
            )}

            {!authData && (
              <Button
                variant="GhostInverted"
                onClick={onOpenModal}
                className={styles.AuthButton}
              >
                {t('auth')}
              </Button>
            )}
          </header>
          {isLoginModalOpen && (
            <LoginModal isOpen={isLoginModalOpen} onClose={onCloseModal} />
          )}
        </>
      }
      on={
        <>
          <header className={cn(styles.NavbarRedesigned, className)}>
            {authData && (
              <HStack gap="16" className={styles.Actions}>
                <NotificationButton />
                <AvatarDropdown />
              </HStack>
            )}
            {!authData && (
              <Button
                variant="GhostInverted"
                onClick={onOpenModal}
                className={styles.AuthButton}
              >
                {t('auth')}
              </Button>
            )}
          </header>
          {isLoginModalOpen && (
            <LoginModal isOpen={isLoginModalOpen} onClose={onCloseModal} />
          )}
        </>
      }
    />
  );
});
