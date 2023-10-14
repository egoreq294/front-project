import { Page } from '@widgets/Page/Page';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const ForbiddenPage: FC = () => {
  const { t } = useTranslation();

  return <Page>{t('forbidden-page')}</Page>;
};
