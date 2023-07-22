import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const { t } = useTranslation('about');

  return <div>{t('about-us')}</div>;
};

export default AboutPage;
