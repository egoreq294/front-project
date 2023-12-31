import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@widgets/Page';

const AdminPanelPage: FC = () => {
  const { t } = useTranslation();

  return <Page testId="AdminPanel">{t('admin-panel-page')}</Page>;
};

export default AdminPanelPage;
