import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage: FC = () => {
  const { t } = useTranslation('article');

  return <div>{t('article-details-page')}</div>;
};

export default ArticleDetailsPage;
