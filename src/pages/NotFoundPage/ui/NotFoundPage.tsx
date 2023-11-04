import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@widgets/Page';

import styles from './styles.module.scss';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  return <Page className={styles.NotFound}>{t('not-found')}</Page>;
};
