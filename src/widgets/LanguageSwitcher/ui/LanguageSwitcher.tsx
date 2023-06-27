import { Button } from '@shared/ui/Button/Button';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  className?: string;
  isShort?: boolean;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  className,
  isShort,
}) => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const toggle = (): void => {
    changeLanguage(language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button className={className} variant="GhostInverted" onClick={toggle}>
      {isShort ? t('short-language') : t('language')}
    </Button>
  );
};
