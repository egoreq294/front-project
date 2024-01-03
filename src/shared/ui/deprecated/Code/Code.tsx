import cn from 'classnames';
import React, { FC, useCallback } from 'react';

import { Icon } from '../../Icon';
import { Button } from '../Button/Button';

import styles from './styles.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

/**
 * @deprecated
 */
export const Code: FC<CodeProps> = ({ className, text }) => {
  const onCopy = useCallback((): void => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={cn(styles.Code, className)}>
      <Button variant="Ghost" className={styles.CopyButton} onClick={onCopy}>
        <Icon name="Copy" />
      </Button>
      <code>{text}</code>
    </pre>
  );
};
