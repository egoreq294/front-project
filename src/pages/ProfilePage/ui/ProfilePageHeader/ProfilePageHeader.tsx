import React, { FC, useCallback } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/Button/Button';
import { Caption } from '@shared/ui/Caption/Caption';
import { useSelector } from 'react-redux';
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from '@entities/Profile';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({
  className,
}) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

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
    <header className={cn(styles.Header, className)}>
      <Caption label={t('profile')} />
      <div className={styles.ButtonsContainer}>
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
      </div>
    </header>
  );
};