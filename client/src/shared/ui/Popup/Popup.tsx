import cn from 'classnames';
import React, { FC } from 'react';

import { IconButton } from '../IconButton';
import { Modal } from '../Modal';
import { VStack } from '../Stack';
import { Typography } from '../Typography';

import styles from './styles.module.scss';

interface PopupProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  testId?: string;
}

export const Popup: FC<PopupProps> = ({
  className,
  isOpen,
  onClose,
  title,
  description,
  testId,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={cn(styles.Popup, className)}
      testId={testId}
      lazy
      withAnimation={false}
    >
      <IconButton
        name="Cancel"
        onClick={onClose}
        className={styles.CloseButton}
      />
      <VStack gap="16" fullWidth>
        <Typography variant="M">{title}</Typography>
        {description && <Typography variant="S">{description}</Typography>}
      </VStack>
    </Modal>
  );
};
