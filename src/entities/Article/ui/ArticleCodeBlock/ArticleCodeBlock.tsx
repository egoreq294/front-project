import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleCodeBlockProps {
  className?: string;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.ArticleCodeBlock, className)}>
      {t('ArticleCodeBlock')}
    </div>
  );
};
