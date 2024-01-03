import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@entities/User';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Button } from '@shared/ui/deprecated/Button';
import { HStack } from '@shared/ui/deprecated/Stack';
import { Typography } from '@shared/ui/deprecated/Typography';
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
              <Button variant="Secondary" onClick={onEdit} testId="Edit">
                {t('edit')}
              </Button>
            ) : (
              <>
                <Button variant="Danger" onClick={onCancelEdit} testId="Cancel">
                  {t('cancel')}
                </Button>
                <Button variant="Secondary" onClick={onSaveEdit} testId="Save">
                  {t('save')}
                </Button>
              </>
            )}
          </>
        )}
      </HStack>
    </HStack>
  );
};
