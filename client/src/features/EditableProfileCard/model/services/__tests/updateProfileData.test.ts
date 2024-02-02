import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import { EMPTY_STRING } from '@shared/constants/common';
import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileErrorEnum } from '../../constants/constants';
import { updateProfileData } from '../updateProfileData';
const USER_DATA = {
  username: 'admin',
  age: '22',
  country: CountryEnum.Russia,
  firstName: 'first name',
  lastName: 'last name',
  city: 'test city',
  currency: CurrencyEnum.RUB,
};

describe('updateProfileData test suite', () => {
  test('should update data with success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      editableCardProfile: {
        form: USER_DATA,
      },
    });

    thunk.apiNew.put.mockReturnValue(
      Promise.resolve({
        data: USER_DATA,
      }),
    );
    const result = await thunk.callThunkNew();

    expect(thunk.apiNew.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(USER_DATA);
  });

  test('should update data with error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      editableCardProfile: {
        form: USER_DATA,
      },
    });
    thunk.apiNew.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunkNew();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrorEnum.SERVER_ERROR]);
  });

  test('should update data with validation error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      editableCardProfile: {
        form: { ...USER_DATA, firstName: EMPTY_STRING },
      },
    });
    const result = await thunk.callThunkNew();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrorEnum.INCORRECT_FIO]);
  });
});
