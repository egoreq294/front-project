import cn from 'classnames';
import React, { FC, memo, MouseEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { HStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography';
import { getAuthEmail } from '../../model/selectors/getAuthEmail';
import { getAuthError } from '../../model/selectors/getAuthError';
import { getAuthIsLoading } from '../../model/selectors/getAuthIsLoading';
import { getAuthIsRegisterModal } from '../../model/selectors/getAuthIsRegisterModal';
import { getAuthPassword } from '../../model/selectors/getAuthPassword';
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail';
import { registerByEmail } from '../../model/services/loginByEmail/registerByEmail';
import { authActions, authReducer } from '../../model/slice/authSlice';

import styles from './styles.module.scss';

interface AuthFormProps {
  className?: string;
  onSuccess: () => void;
}

const reducers: ReducerList = {
  authForm: authReducer,
};

const AuthForm: FC<AuthFormProps> = memo(({ className, onSuccess }) => {
  const dispatch = useAppDispatch();
  const email = useSelector(getAuthEmail);
  const password = useSelector(getAuthPassword);
  const isLoading = useSelector(getAuthIsLoading);
  const error = useSelector(getAuthError);
  const isRegisterModal = useSelector(getAuthIsRegisterModal);

  const { t } = useTranslation();

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(authActions.setEmail(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(authActions.setPassword(value));
    },
    [dispatch],
  );

  const onChangeModal = useCallback((): void => {
    dispatch(authActions.setIsRegisterModal(isRegisterModal ? false : true));
  }, [dispatch, isRegisterModal]);

  const onLoginClick = useCallback(
    async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
      e.preventDefault();
      const result = await dispatch(loginByEmail({ email, password }));
      if (result.meta.requestStatus === 'fulfilled') {
        onSuccess();
      }
    },
    [dispatch, password, email, onSuccess],
  );

  const onRegisterClick = useCallback(
    async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
      e.preventDefault();
      const result = await dispatch(registerByEmail({ email, password }));
      if (result.meta.requestStatus === 'fulfilled') {
        onSuccess();
      }
    },
    [dispatch, password, email, onSuccess],
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <form className={cn(styles.AuthForm, className)}>
        <Typography variant="M">{t('login-form')}</Typography>
        <Input
          value={email}
          onChange={onChangeEmail}
          autoFocus
          label={t('enter-email')}
        />
        <Input
          type="password"
          value={password}
          onChange={onChangePassword}
          label={t('enter-password')}
        />
        {error && (
          <Typography className={styles.Error}>
            {t('incorrect-login-or-password')}
          </Typography>
        )}
        <HStack fullWidth align="start" justify="spaceBetween">
          <Button
            variant="Ghost"
            size="S"
            className={styles.ChangeButton}
            onClick={onChangeModal}
            disabled={isLoading}
          >
            <Typography variant="XS">
              {isRegisterModal
                ? t('change-to-login-button')
                : t('change-to-register-button')}
            </Typography>
          </Button>
          <Button
            type="submit"
            variant="Primary"
            onClick={isRegisterModal ? onRegisterClick : onLoginClick}
            disabled={isLoading}
          >
            {isRegisterModal ? t('register') : t('auth')}
          </Button>
        </HStack>
      </form>
    </DynamicModuleLoader>
  );
});

export default AuthForm;
