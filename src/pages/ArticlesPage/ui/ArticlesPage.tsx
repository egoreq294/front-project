import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage: FC = () => {
  const { t } = useTranslation('article');

  return <div>{t('articles-page')}</div>;
};

export default ArticlesPage;
