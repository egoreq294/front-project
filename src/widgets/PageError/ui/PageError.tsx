import cn from 'classnames';
import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@shared/ui/Button';

import styles from './styles.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = memo(({ className }) => {
  const { t } = useTranslation();

  const onReloadClick = (): void => {
    location.reload();
  };

  return (
    <div className={cn(styles.PageError, className)}>
      <p>{t('something-went-wrong')}</p>
      <Button onClick={onReloadClick}>{t('reload-page')}</Button>
    </div>
  );
});
