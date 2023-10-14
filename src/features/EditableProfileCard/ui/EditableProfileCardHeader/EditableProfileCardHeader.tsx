import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/Button/Button';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from '@entities/User';
import { Typography } from '@shared/ui/Typography/Typography';
import { HStack } from '@shared/ui/Stack/HStack/HStack';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData';

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
              <Button variant="Secondary" onClick={onEdit}>
                {t('edit')}
              </Button>
            ) : (
              <>
                <Button variant="Danger" onClick={onCancelEdit}>
                  {t('cancel')}
                </Button>
                <Button variant="Secondary" onClick={onSaveEdit}>
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
