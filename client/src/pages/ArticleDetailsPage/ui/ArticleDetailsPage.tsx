import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { StickyContentLayout } from '@shared/layouts';
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useMediaQuery } from '@shared/lib/hooks/useMediaQuery';
import { VStack } from '@shared/ui/Stack';
import { Page } from '@widgets/Page';
import { articleDetailsPageReducer } from '../model/slices';
import { AdditionalInfoContainer } from './AdditionalInfoContainer/AdditionalInfoContainer';
import { AdditionalInfoMobileContainer } from './AdditionalInfoContainer/AdditionalInfoMobileContainer';
import { ArticleDetailsContainer } from './ArticleDetailsContainer/ArticleDetailsContainer';

const reducers: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article');
  const { isDesktop } = useMediaQuery();

  if (!id) {
    return <div>{t('article-not-found')}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      {!isDesktop ? (
        <Page>
          <VStack gap="16" fullWidth>
            <AdditionalInfoMobileContainer />
            <ArticleDetailsContainer />
          </VStack>
        </Page>
      ) : (
        <StickyContentLayout
          content={
            <Page>
              <ArticleDetailsContainer />
            </Page>
          }
          right={<AdditionalInfoContainer />}
        />
      )}
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
