import { ArticleDetails } from '@entities/Article';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { Page } from '@widgets/Page/Page';
import { articleDetailsPageReducer } from '../model/slices';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRecommendationsList } from '@features/ArticleRecommendationsList';
import { ArticleDetailsComments } from './ArticleDetailsComments/ArticleDetailsComments';

const reducers: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article');

  if (!id) {
    return <div>{t('article-not-found')}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <ArticleDetailsPageHeader />
        <ArticleDetails articleId={id} />
        <ArticleRecommendationsList className={styles.Recommendations} />
        <ArticleDetailsComments id={id} className={styles.Comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
