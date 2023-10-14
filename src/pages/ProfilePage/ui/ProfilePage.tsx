import React, { FC } from 'react';
import { Page } from '@widgets/Page/Page';
import { EditableProfileCard } from '@features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { Typography } from '@shared/ui/Typography/Typography';
import { useTranslation } from 'react-i18next';

const ProfilePage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('profile');

  if (!id) {
    return <Typography variant="L">{t('profile-not-found')}</Typography>;
  }

  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default ProfilePage;
