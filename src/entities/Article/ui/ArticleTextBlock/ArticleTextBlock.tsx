import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleTextBlockProps {
  className?: string;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.ArticleTextBlock, className)}>
      {t('ArticleTextBlock')}
    </div>
  );
};
