import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from '@entities/Counter';
import { Page } from '@widgets/Page';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return (
    <Page>
      {t('main-page')}
      <Counter />
    </Page>
  );
};

export default MainPage;
