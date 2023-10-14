import { Page } from '@widgets/Page/Page';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AdminPanelPage: FC = () => {
  const { t } = useTranslation();

  return <Page>{t('admin-panel-page')}</Page>;
};

export default AdminPanelPage;
