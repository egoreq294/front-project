import { StateSchema } from '@app/providers/StorePovider';
import { getProfileValidationErrors } from '../getProfileValidationErrors';
import { ValidateProfileErrorEnum } from '../../types/profile';

describe('getProfileValidationErrors test suite', () => {
  test('should return profile validation errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validationErrors: [
          ValidateProfileErrorEnum.INCORRECT_AGE,
          ValidateProfileErrorEnum.INCORRECT_USERNAME,
        ],
      },
    };

    expect(getProfileValidationErrors(state as StateSchema)).toEqual([
      ValidateProfileErrorEnum.INCORRECT_AGE,
      ValidateProfileErrorEnum.INCORRECT_USERNAME,
    ]);
  });

  test('should return empty array', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidationErrors(state as StateSchema)).toEqual([]);
  });
});
