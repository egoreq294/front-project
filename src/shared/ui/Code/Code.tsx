import cn from 'classnames';
import React, { FC, useCallback } from 'react';

import { IconButton } from '../IconButton';

import styles from './styles.module.scss';

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
      <IconButton
        name="CopyNew"
        className={styles.CopyButton}
        onClick={onCopy}
      />
      <code>{text}</code>
    </pre>
  );
};
