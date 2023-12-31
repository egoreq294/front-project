import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@entities/User';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Button } from '@shared/ui/Button';
import { Card } from '@shared/ui/Card';
import { HStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography';
import { getProfileData } from '../../model/selectors/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = ({
  className,
}) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback((): void => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback((): void => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSaveEdit = useCallback((): void => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <Card fullWidth padding="24">
      <HStack
        role="heading"
        fullWidth
        justify="spaceBetween"
        className={className}
      >
        <Typography variant="M">{t('profile')}</Typography>
        <HStack gap="16">
          {canEdit && (
            <>
              {readonly ? (
                <Button onClick={onEdit} testId="Edit">
                  {t('edit')}
                </Button>
              ) : (
                <>
                  <Button
                    variant="Danger"
                    onClick={onCancelEdit}
                    testId="Cancel"
                  >
                    {t('cancel')}
                  </Button>
                  <Button variant="Success" onClick={onSaveEdit} testId="Save">
                    {t('save')}
                  </Button>
                </>
              )}
            </>
          )}
        </HStack>
      </HStack>
    </Card>
  );
};
