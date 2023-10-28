import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@widgets/Page/Page';

export const ForbiddenPage: FC = () => {
  const { t } = useTranslation();

  return <Page>{t('forbidden-page')}</Page>;
};
