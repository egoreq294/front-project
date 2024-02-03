import { userActions } from '@entities/User';
import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByEmail } from '../loginByEmail';

describe('loginByUsername test suite', () => {
  test('should login success', async () => {
    const thunk = new TestAsyncThunk(loginByEmail);

    thunk.api.post.mockReturnValue(
      Promise.resolve({ data: { user: { email: 'test@test.test', id: '1' } } }),
    );
    const result = await thunk.callThunk({
      email: 'test@test.test',
      password: '123',
    });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData({ email: 'test@test.test', id: '1' }),
    );
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('should login error', async () => {
    const thunk = new TestAsyncThunk(loginByEmail);

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({
      email: 'test@test.test',
      password: '123',
    });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
