import React, { FC, useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/Button/Button';
import { Input } from '@shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  const [value, setValue] = useState<string>('');

  const onChange = (val: string): void => {
    setValue(val);
  };

  return (
    <div className={cn(styles.LoginForm, className)}>
      <Input
        value={value}
        onChange={onChange}
        autoFocus
        placeholder={t('enter-username')}
      />
      <Input
        value={value}
        onChange={onChange}
        placeholder={t('enter-password')}
      />
      <Button className={styles.Button}>{t('auth')}</Button>
    </div>
  );
};
