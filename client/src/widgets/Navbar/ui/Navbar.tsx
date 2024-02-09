import cn from 'classnames';
import React, { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@entities/User';
import { AuthModal } from '@features/AuthByEmail';
import { AvatarDropdown } from '@features/AvatarDropdown';
import { NotificationButton } from '@features/NotificationButton';
import { useMediaQuery } from '@shared/lib/hooks/useMediaQuery';
import { Button } from '@shared/ui/Button';
import { HStack } from '@shared/ui/Stack';
import { SidebarButton } from '../../Sidebar';

import styles from './styles.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const authData = useSelector(getUserAuthData);
  const { isDesktop } = useMediaQuery();

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
        {!isDesktop && <SidebarButton />}
        {authData && (
          <HStack gap="16">
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
        )}
        {!authData && <Button onClick={onOpenModal}>{t('auth')}</Button>}
      </header>

      <AuthModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
    </>
  );
});
