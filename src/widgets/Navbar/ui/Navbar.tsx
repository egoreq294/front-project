import React, { FC, memo, useCallback, useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Button } from '@shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from '@features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@entities/User';
import { Typography } from '@shared/ui/Typography/Typography';
import { AppLink } from '@shared/ui/AppLink/AppLink';

import { HStack } from '@shared/ui/Stack';
import { NotificationButton } from '@features/NotificationButton';
import { AvatarDropdown } from '@features/AvatarDropdown';

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
    <>
      <header className={cn(styles.Navbar, className)}>
        <Typography variant="M" theme="Inverted" className={styles.ProjectName}>
          {t('project-name')}
        </Typography>

        {authData && (
          <>
            <AppLink theme="Inverted" to={'/articles/create'}>
              {t('create-article')}
            </AppLink>
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
  );
});
