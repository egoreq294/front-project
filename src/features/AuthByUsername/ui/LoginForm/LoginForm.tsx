import React, { FC, memo, useCallback } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/Button/Button';
import { Input } from '@shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Caption } from '@shared/ui/Caption/Caption';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError';
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';

interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const reducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo(({ className, onSuccess }) => {
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const { t } = useTranslation();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
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
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, password, username, onSuccess]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={cn(styles.LoginForm, className)}>
        <Caption label={t('login-form')} />
        <Input
          value={username}
          onChange={onChangeUsername}
          autoFocus
          placeholder={t('enter-username')}
        />
        <Input
          value={password}
          onChange={onChangePassword}
          placeholder={t('enter-password')}
        />
        {error && (
          <Caption value={t('incorrect-login-or-password')} variant="Error" />
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
