import React, { FC, Suspense } from 'react';

import { EMPTY_STRING } from '@shared/constants/common';
import { Modal } from '@shared/ui/Modal';
import { LoginFormLazy as LoginForm } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({
  className,
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={className} lazy>
      <Suspense fallback={EMPTY_STRING}>
        <LoginForm onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
