import React, { FC, Suspense } from 'react';

import { Loader } from '@shared/ui/deprecated/Loader';
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
      <Suspense fallback={<Loader />}>
        <LoginForm onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
