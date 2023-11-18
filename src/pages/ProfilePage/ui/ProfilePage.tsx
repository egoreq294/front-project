import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@features/EditableProfileCard';
import { Typography } from '@shared/ui/Typography';
import { Page } from '@widgets/Page';

const ProfilePage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('profile');

  if (!id) {
    return <Typography variant="L">{t('profile-not-found')}</Typography>;
  }

  return (
    <Page testId="Profile">
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default ProfilePage;
