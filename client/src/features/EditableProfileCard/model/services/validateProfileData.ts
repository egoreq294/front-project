import { Profile } from '@entities/Profile';
import { ValidateProfileErrorEnum } from '../constants/constants';

const NUMBER_REGEX = /^\d+$/;

export const validateProfileData = (
  profile: Profile | null,
): ValidateProfileErrorEnum[] => {
  const errors: ValidateProfileErrorEnum[] = [];
  if (!profile) {
    return [ValidateProfileErrorEnum.NO_DATA];
  }

  const { firstName, lastName, age } = profile;

  if (!firstName || !lastName) {
    errors.push(ValidateProfileErrorEnum.INCORRECT_FIO);
  }

  if (age && !NUMBER_REGEX.test(age)) {
    errors.push(ValidateProfileErrorEnum.INCORRECT_AGE);
  }

  return errors;
};
