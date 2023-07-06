import axios from 'axios';
import { loginByUsername } from '../loginByUsername';
import { userActions } from '@entities/User';
import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsername test suite', () => {
  test('should login success', async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({ data: { username: 'test', id: '1' } }),
    );

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'test', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData({ username: 'test', id: '1' }),
    );
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('should login error', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'test', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
