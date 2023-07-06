import React, { FC, Suspense } from 'react';

import { Modal } from '@shared/ui/Modal/Modal';
import { LoginFormLazy as LoginForm } from '../LoginForm/LoginForm.lazy';
import { Loader } from '@shared/ui/Loader/Loader';

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
        <LoginForm />
      </Suspense>
    </Modal>
  );
};
