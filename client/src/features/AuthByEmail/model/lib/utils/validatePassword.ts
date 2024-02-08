import i18n from '@shared/config/i18n/i18n';

export const validatePassword = (password: string): string | null => {
  if (password.length < 8) {
    return i18n.t('password-too-short');
  }

  return null;
};
