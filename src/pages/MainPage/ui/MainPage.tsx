import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@widgets/Page';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return <Page testId="Main">{t('main-page')}</Page>;
};

export default MainPage;
