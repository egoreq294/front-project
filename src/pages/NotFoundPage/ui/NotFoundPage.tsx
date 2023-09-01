import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { Page } from '@shared/ui/Page/Page';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  return <Page className={styles.NotFound}>{t('not-found')}</Page>;
};
