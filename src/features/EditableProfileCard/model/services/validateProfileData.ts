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

  const { firstName, lastName, age, username } = profile;

  if (!firstName || !lastName) {
    errors.push(ValidateProfileErrorEnum.INCORRECT_FIO);
  }

  if (age && !NUMBER_REGEX.test(age)) {
    errors.push(ValidateProfileErrorEnum.INCORRECT_AGE);
  }

  if (!username) {
    errors.push(ValidateProfileErrorEnum.INCORRECT_USERNAME);
  }

  return errors;
};
