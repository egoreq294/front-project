import React, { FC, memo, useCallback, useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Button } from '@shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from '@features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '@entities/User';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const onCloseModal = useCallback((): void => {
    setIsLoginModalOpen(false);
  }, []);

  const onOpenModal = useCallback((): void => {
    setIsLoginModalOpen(true);
  }, []);

  const onLogout = useCallback((): void => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <>
        <div className={cn(styles.Navbar, className)}>
          <Button variant="GhostInverted" onClick={onLogout}>
            {t('logout')}
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={cn(styles.Navbar, className)}>
        <Button variant="GhostInverted" onClick={onOpenModal}>
          {t('auth')}
        </Button>
      </div>
      {isLoginModalOpen && (
        <LoginModal isOpen={isLoginModalOpen} onClose={onCloseModal} />
      )}
    </>
  );
});
