import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@widgets/Page/Page';

const AboutPage: FC = () => {
  const { t } = useTranslation('about');

  return <Page>{t('about-us')}</Page>;
};

export default AboutPage;
