import { ArticleDetails } from '@entities/Article';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const ArticleDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article');

  if (!id) {
    return <div>{t('article-not-found')}</div>;
  }

  return (
    <div>
      <ArticleDetails articleId={id} />
    </div>
  );
};

export default ArticleDetailsPage;
