import { loginByUsername } from '../loginByUsername';
import { userActions } from '@entities/User';
import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

describe('loginByUsername test suite', () => {
  test('should login success', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(
      Promise.resolve({ data: { username: 'test', id: '1' } }),
    );
    const result = await thunk.callThunk({ username: 'test', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData({ username: 'test', id: '1' }),
    );
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('should login error', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: 'test', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
