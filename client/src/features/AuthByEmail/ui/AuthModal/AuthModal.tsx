import React, { FC, Suspense } from 'react';

import { EMPTY_STRING } from '@shared/constants/common';
import { useMediaQuery } from '@shared/lib/hooks/useMediaQuery';
import { Drawer } from '@shared/ui//Drawer';
import { Modal } from '@shared/ui/Modal';
import { AuthFormLazy as AuthForm } from '../AuthForm/AuthForm.lazy';

import styles from './styles.module.scss';

interface AuthModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: FC<AuthModalProps> = ({
  className,
  isOpen,
  onClose,
}) => {
  const { isMobile } = useMediaQuery();

  if (!isMobile) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} className={className} lazy>
        <Suspense fallback={EMPTY_STRING}>
          <AuthForm onSuccess={onClose} className={styles.AuthModal} />
        </Suspense>
      </Modal>
    );
  }

  return (
    <Drawer isOpen={isOpen} onClose={onClose} className={className} size={500}>
      <Suspense fallback={EMPTY_STRING}>
        <AuthForm onSuccess={onClose} />
      </Suspense>
    </Drawer>
  );
};
