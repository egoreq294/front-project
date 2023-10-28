import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@shared/ui/Button/Button';

interface LanguageSwitcherProps {
  className?: string;
  isShort?: boolean;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(
  ({ className, isShort }) => {
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
  },
);
