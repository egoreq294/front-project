import React, { FC, useCallback, useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Button } from '@shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Modal } from '@shared/ui/Modal/Modal';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  const onToggleModal = useCallback((): void => {
    setIsAuthModalOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className={cn(styles.Navbar, className)}>
        <Button variant="GhostInverted" onClick={onToggleModal}>
          {t('auth')}
        </Button>
      </div>
      <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
        123
      </Modal>
    </>
  );
};
