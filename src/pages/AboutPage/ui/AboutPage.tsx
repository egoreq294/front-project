import { Page } from '@shared/ui/Page/Page';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const { t } = useTranslation('about');

  return <Page>{t('about-us')}</Page>;
};

export default AboutPage;
