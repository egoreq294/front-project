import React, { FC, memo, useCallback } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/Button/Button';
import { Input } from '@shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Caption } from '@shared/ui/Caption/Caption';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

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

  const onLoginClick = useCallback((): void => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
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
  );
});
