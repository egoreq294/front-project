import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleImageBlockProps {
  className?: string;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = ({
  className,
}) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.ArticleImageBlock, className)}>
      {t('ArticleImageBlock')}
    </div>
  );
};
