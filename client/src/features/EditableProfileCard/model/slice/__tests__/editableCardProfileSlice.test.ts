import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import { EMPTY_STRING } from '@shared/constants/common';
import { ValidateProfileErrorEnum } from '../../constants/constants';
import { updateProfileData } from '../../services/updateProfileData';
import { EditableCardProfileSchema } from '../../types/editableProfileCardSchema';
import {
  editableCardProfileActions,
  editableCardProfileReducer,
} from '../editableCardProfileSlice';

const USER_DATA = {
  username: 'admin',
  age: '22',
  country: CountryEnum.Russia,
  firstName: 'first name',
  lastName: 'last name',
  city: 'test city',
  currency: CurrencyEnum.RUB,
};

describe('editableCardProfileSlice test suite', () => {
  test('should set readonly', () => {
    const state: DeepPartial<EditableCardProfileSchema> = { readonly: false };

    expect(
      editableCardProfileReducer(
        state as EditableCardProfileSchema,
        editableCardProfileActions.setReadonly(true),
      ),
    ).toEqual({
      readonly: true,
    });
  });

  test('should cancel edit', () => {
    const initialState: DeepPartial<EditableCardProfileSchema> = {
      readonly: false,
      validationErrors: [
        ValidateProfileErrorEnum.INCORRECT_AGE,
        ValidateProfileErrorEnum.INCORRECT_USERNAME,
      ],
      form: {
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
      editableCardProfileReducer(
        initialState as EditableCardProfileSchema,
        editableCardProfileActions.cancelEdit(),
      ),
    ).toEqual(expectedState);
  });

  test('should update profile', () => {
    const initialState: DeepPartial<EditableCardProfileSchema> = {
      form: {
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
      editableCardProfileReducer(
        initialState as EditableCardProfileSchema,
        editableCardProfileActions.updateProfile({ ...USER_DATA }),
      ),
    ).toEqual(expectedState);
  });

  test('should update profile data pending', () => {
    const initialState: DeepPartial<EditableCardProfileSchema> = {
      loading: false,
      validationErrors: [ValidateProfileErrorEnum.SERVER_ERROR],
    };

    const expectedState = {
      loading: true,
      validationErrors: undefined,
    };

    expect(
      editableCardProfileReducer(
        initialState as EditableCardProfileSchema,
        updateProfileData.pending,
      ),
    ).toEqual(expectedState);
  });

  test('should update profile data fullfiled', () => {
    const initialState: DeepPartial<EditableCardProfileSchema> = {
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
      editableCardProfileReducer(
        initialState as EditableCardProfileSchema,
        updateProfileData.fulfilled(USER_DATA, ''),
      ),
    ).toEqual(expectedState);
  });
});
