import React, { FC, useCallback, useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Button } from '@shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from '@features/AuthByUsername';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
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
      <div className={cn(styles.Navbar, className)}>
        <Button variant="GhostInverted" onClick={onOpenModal}>
          {t('auth')}
        </Button>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={onCloseModal} />
    </>
  );
};
