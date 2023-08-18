import React, { FC, useCallback } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Button } from '../Button/Button';
import CopyIcon from '@shared/assets/icons/copy.svg';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code: FC<CodeProps> = ({ className, text }) => {
  const onCopy = useCallback((): void => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={cn(styles.Code, className)}>
      <Button variant="Ghost" className={styles.CopyButton} onClick={onCopy}>
        <CopyIcon />
      </Button>
      <code>{text}</code>
    </pre>
  );
};
