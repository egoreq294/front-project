import cn from 'classnames';
import React, { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@entities/User';
import { AuthModal } from '@features/AuthByEmail';
import { AvatarDropdown } from '@features/AvatarDropdown';
import { NotificationButton } from '@features/NotificationButton';
import { Button } from '@shared/ui/Button';
import { HStack } from '@shared/ui/Stack';

import styles from './styles.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const authData = useSelector(getUserAuthData);

  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  const onCloseModal = useCallback((): void => {
    setIsAuthModalOpen(false);
  }, []);

  const onOpenModal = useCallback((): void => {
    setIsAuthModalOpen(true);
  }, []);

  return (
    <>
      <header className={cn(styles.NavbarRedesigned, className)}>
        {authData && (
          <HStack gap="16" className={styles.Actions}>
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
        )}
        {!authData && (
          <Button onClick={onOpenModal} className={styles.AuthButton}>
            {t('auth')}
          </Button>
        )}
      </header>
      {isAuthModalOpen && (
        <AuthModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
      )}
    </>
  );
});
