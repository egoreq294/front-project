import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@widgets/Page';

export const ForbiddenPage: FC = () => {
  const { t } = useTranslation();

  return <Page testId="Forbidden">{t('forbidden-page')}</Page>;
};
