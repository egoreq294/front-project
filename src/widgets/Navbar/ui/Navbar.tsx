import React, { FC, memo, useCallback, useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Button } from '@shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from '@features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '@entities/User';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Typography } from '@shared/ui/Typography/Typography';
import { AppLink } from '@shared/ui/AppLink/AppLink';

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

  return (
    <>
      <header className={cn(styles.Navbar, className)}>
        <Typography variant="M" theme="Inverted" className={styles.ProjectName}>
          {t('project-name')}
        </Typography>

        {authData && (
          <AppLink theme="Inverted" to={'/articles/create'}>
            {t('create-article')}
          </AppLink>
        )}

        <Button
          variant="GhostInverted"
          onClick={authData ? onLogout : onOpenModal}
          className={styles.AuthButton}
        >
          {authData ? t('logout') : t('auth')}
        </Button>
      </header>
      {isLoginModalOpen && (
        <LoginModal isOpen={isLoginModalOpen} onClose={onCloseModal} />
      )}
    </>
  );
});
