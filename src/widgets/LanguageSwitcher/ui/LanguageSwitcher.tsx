import { Button, ThemeButton } from '@shared/ui/Button/Button';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const toggle = (): void => {
    changeLanguage(language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button className={className} theme={ThemeButton.CLEAR} onClick={toggle}>
      {t('language')}
    </Button>
  );
};
