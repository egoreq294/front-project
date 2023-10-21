import { CountryEnum } from '@entities/Country';

import { profileActions, profileReducer } from '../profileSlice';
import { CurrencyEnum } from '@entities/Currency';
import { EMPTY_STRING } from '@shared/constants/common';
import { updateProfileData } from '../../services/updateProfileData';
import { ValidateProfileErrorEnum } from '../../constants/constants';
import { ProfileSchema } from '../../types/editableProfileCardSchema';

const USER_DATA = {
  username: 'admin',
  age: '22',
  country: CountryEnum.Russia,
  firstName: 'first name',
  lastName: 'last name',
  city: 'test city',
  currency: CurrencyEnum.RUB,
};

describe('profileSlice test suite', () => {
  test('should set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
    ).toEqual({
      readonly: true,
    });
  });

  test('should cancel edit', () => {
    const initialState: DeepPartial<ProfileSchema> = {
      readonly: false,
      validationErrors: [
        ValidateProfileErrorEnum.INCORRECT_AGE,
        ValidateProfileErrorEnum.INCORRECT_USERNAME,
      ],
      form: {
        username: EMPTY_STRING,
        age: EMPTY_STRING,
        country: CountryEnum.UnitedStates,
        firstName: EMPTY_STRING,
        lastName: EMPTY_STRING,
        city: EMPTY_STRING,
        currency: CurrencyEnum.USD,
      },
      data: USER_DATA,
    };

    const expectedState = {
      readonly: true,
      validationErrors: [],
      form: USER_DATA,
      data: USER_DATA,
    };

    expect(
      profileReducer(
        initialState as ProfileSchema,
        profileActions.cancelEdit(),
      ),
    ).toEqual(expectedState);
  });

  test('should update profile', () => {
    const initialState: DeepPartial<ProfileSchema> = {
      form: {
        username: EMPTY_STRING,
        age: EMPTY_STRING,
        country: CountryEnum.UnitedStates,
        firstName: EMPTY_STRING,
        lastName: EMPTY_STRING,
        city: EMPTY_STRING,
        currency: CurrencyEnum.USD,
      },
    };

    const expectedState = {
      form: USER_DATA,
    };

    expect(
      profileReducer(
        initialState as ProfileSchema,
        profileActions.updateProfile({ ...USER_DATA }),
      ),
    ).toEqual(expectedState);
  });

  test('should update profile data pending', () => {
    const initialState: DeepPartial<ProfileSchema> = {
      loading: false,
      validationErrors: [ValidateProfileErrorEnum.SERVER_ERROR],
    };

    const expectedState = {
      loading: true,
      validationErrors: undefined,
    };

    expect(
      profileReducer(initialState as ProfileSchema, updateProfileData.pending),
    ).toEqual(expectedState);
  });

  test('should update profile data fullfiled', () => {
    const initialState: DeepPartial<ProfileSchema> = {
      loading: true,
    };

    const expectedState = {
      loading: false,
      validationErrors: undefined,
      data: USER_DATA,
      form: USER_DATA,
      readonly: true,
    };

    expect(
      profileReducer(
        initialState as ProfileSchema,
        updateProfileData.fulfilled(USER_DATA, ''),
      ),
    ).toEqual(expectedState);
  });
});
