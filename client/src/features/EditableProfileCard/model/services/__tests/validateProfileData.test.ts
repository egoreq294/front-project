import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import { EMPTY_STRING } from '@shared/constants/common';
import { ValidateProfileErrorEnum } from '../../constants/constants';
import { validateProfileData } from '../validateProfileData';

const data = {
  username: 'admin',
  age: '22',
  country: CountryEnum.Russia,
  firstName: 'first name',
  lastName: 'last name',
  city: 'test city',
  currency: CurrencyEnum.RUB,
};

describe('validateProfileData test suite', () => {
  test('should return no data error', async () => {
    const result = validateProfileData(null);

    expect(result).toEqual([ValidateProfileErrorEnum.NO_DATA]);
  });

  test('should return incorrect fio error', async () => {
    const result = validateProfileData({ ...data, firstName: EMPTY_STRING });

    expect(result).toEqual([ValidateProfileErrorEnum.INCORRECT_FIO]);
  });

  test('should return incorrect age error', async () => {
    const result = validateProfileData({ ...data, age: '23fg34' });

    expect(result).toEqual([ValidateProfileErrorEnum.INCORRECT_AGE]);
  });

  test('should return incorrect username and incorrect fio errors', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([ValidateProfileErrorEnum.INCORRECT_FIO]);
  });
});
