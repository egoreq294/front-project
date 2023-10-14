import React, { FC, memo, useCallback, useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Button } from '@shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from '@features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, isAdminRole, userActions } from '@entities/User';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Typography } from '@shared/ui/Typography/Typography';
import { AppLink } from '@shared/ui/AppLink/AppLink';
import { Dropdown } from '@shared/ui/Dropdown/Dropdown';
import { Avatar } from '@shared/ui/Avatar/Avatar';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isAdminRole);

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
          <>
            <AppLink theme="Inverted" to={'/articles/create'}>
              {t('create-article')}
            </AppLink>
            <Dropdown
              direction="bottom-left"
              className={styles.Dropdown}
              items={[
                {
                  id: '1',
                  content: t('my-profile'),
                  href: `/profile/${authData.id}`,
                },
                ...(isAdmin
                  ? [
                      {
                        id: '2',
                        content: t('admin-panel'),
                        href: '/admin',
                      },
                    ]
                  : []),
                { id: '3', content: t('logout'), onClick: onLogout },
              ]}
              trigger={
                <Avatar
                  className={styles.Avatar}
                  size={50}
                  src={authData.avatar}
                />
              }
            />
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
