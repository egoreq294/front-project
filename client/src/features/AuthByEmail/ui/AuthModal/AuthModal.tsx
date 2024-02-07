import React, { FC, Suspense } from 'react';

import { EMPTY_STRING } from '@shared/constants/common';
import { Modal } from '@shared/ui/Modal';
import { AuthFormLazy as AuthForm } from '../AuthForm/AuthForm.lazy';

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
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={className} lazy>
      <Suspense fallback={EMPTY_STRING}>
        <AuthForm onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
