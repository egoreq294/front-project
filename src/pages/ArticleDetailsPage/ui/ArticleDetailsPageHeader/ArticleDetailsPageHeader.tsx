import cn from 'classnames';
import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '@entities/Article';
import { Button } from '@shared/ui/Button';
import { canEditArticle } from '../../model/selectors/articleSelectors';

import styles from './styles.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = ({
  className,
}) => {
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const canEdit = useSelector(canEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate('/articles');
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`/articles/${article?.id}/edit`);
  }, [navigate, article]);

  return (
    <div className={cn(styles.Header, className)}>
      <Button variant="Secondary" onClick={onBackToList}>
        {t('back-to-list')}
      </Button>
      {canEdit && (
        <Button variant="Secondary" onClick={onEditArticle}>
          {t('edit')}
        </Button>
      )}
    </div>
  );
};
