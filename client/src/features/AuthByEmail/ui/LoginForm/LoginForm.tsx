import cn from 'classnames';
import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { Typography } from '@shared/ui/Typography';
import { getLoginEmail } from '../../model/selectors/getLoginEmail';
import { getLoginError } from '../../model/selectors/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import styles from './styles.module.scss';

interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const reducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo(({ className, onSuccess }) => {
  const dispatch = useAppDispatch();
  const email = useSelector(getLoginEmail);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const { t } = useTranslation();

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(loginActions.setEmail(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async (): Promise<void> => {
    const result = await dispatch(loginByEmail({ email, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, password, email, onSuccess]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={cn(styles.LoginForm, className)}>
        <Typography variant="M">{t('login-form')}</Typography>
        <Input
          value={email}
          onChange={onChangeEmail}
          autoFocus
          label={t('enter-email')}
        />
        <Input
          value={password}
          onChange={onChangePassword}
          label={t('enter-password')}
        />
        {error && (
          <Typography className={styles.Error}>
            {t('incorrect-login-or-password')}
          </Typography>
        )}
        <Button
          variant="Primary"
          className={styles.Button}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('auth')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
