import i18n from '@shared/config/i18n/i18n';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validateEmail = (email: string): string | null => {
  if (!EMAIL_REGEX.test(email)) {
    return i18n.t('invalid-email');
  }

  return null;
};
