import { Page } from '@widgets/Page/Page';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return <Page>{t('main-page')}</Page>;
};

export default MainPage;
