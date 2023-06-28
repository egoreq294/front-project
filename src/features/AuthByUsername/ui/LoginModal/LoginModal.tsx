import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Modal } from '@shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={cn(styles.LoginModal, className)}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
